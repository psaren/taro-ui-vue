import { mount } from '@vue/test-utils'
import AtList from '../../src/components/list'
import AtListItem from '../../src/components/list/item/index'

describe('List Snap', () => {
  it('render completed List', () => {
    const wrapper = mount({
      data() {
        return {
          iconInfo: {
            size: 25,
            color: '#78A4FA',
            value: 'calendar',
          },
        }
      },
      components: {
        AtList,
        AtListItem,
      },
      template: `
      <AtList>
      <AtListItem title='标题文字' />
      <AtListItem title='标题文字' arrow='right' />
      <AtListItem title='标题文字' note='描述信息' />
      <AtListItem title='禁用状态' disabled extraText='详细信息' />
      <AtListItem title='标题文字' note='描述信息' arrow='right' />
      <AtListItem title='标题文字' extraText='详细信息' arrow='right' />
      <AtListItem
        arrow='right'
        note='描述信息'
        title='标题文字标题文字标题文字标题文字标题文字'
        extraText='详细信息详细信息详细信息详细信息'
      />
      <AtListItem
        title='标题文字'
        note='描述信息'
        extraText='详细信息'
        arrow='right'
        thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
      />
      <AtListItem
        arrow='right'
        note='描述信息'
        :iconInfo="iconInfo"
        title='标题文字'
        extraText='详细信息'
        thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
      />
      <AtListItem title='标题文字' isSwitch />
      <AtListItem title='标题文字' isSwitch disabled />
      <AtListItem title='标题文字' switchIsCheck isSwitch />
      <AtListItem title='标题文字' switchIsCheck isSwitch disabled />
    </AtList>
      `,
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render completed List -- no border', () => {
    const wrapper = mount({
      components: {
        AtList,
        AtListItem,
      },
      template: `
      <AtList :hasBorder="false">
        <AtListItem title='标题文字' :hasBorder="false" />
        <AtListItem title='标题文字' :hasBorder="false" />
      </AtList>
      `,
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('List Behavior ', () => {
  it('ListItem onClick', () => {
    const onClick = jest.fn()
    const wrapper = mount({
      components: {
        AtList,
        AtListItem,
      },
      methods: {
        onClick: onClick,
      },
      template: `
      <AtList>
        <AtListItem title='标题文字' :on-click="onClick" />
      </AtList>
      `,
    })
    wrapper.find('.at-list .at-list__item').trigger('tap')
    expect(onClick).toBeCalled()
  })

  it('ListItem onSwitchChange && onClick', () => {
    const onClick = jest.fn()
    const onChange = jest.fn()
    const wrapper = mount({
      components: {
        AtList,
        AtListItem,
      },
      methods: {
        onClick: onClick,
        onChange: onChange,
      },
      template: `
        <AtList>
          <AtListItem
            title='标题文字'
            is-switch
            :on-click="onClick"
            :on-switch-change="onChange"
          />
        </AtList>
      `,
    })
    wrapper.find('.at-list .at-list__item .item-extra__switch switch').trigger('tap')
    wrapper.find('.at-list .at-list__item .item-extra__switch switch').trigger('change')
    expect(onClick).toBeCalled()
    expect(onChange).toBeCalled()
  })

  it('ListItem switch was checked', () => {
    const wrapper = mount({
      components: {
        AtList,
        AtListItem,
      },
      template: `
        <AtList>
          <AtListItem
            title='标题文字'
            is-switch
            switch-is-check
          />
        </AtList>
      `,
    })
    const switchEl = wrapper.find('.at-list .at-list__item .item-extra__switch switch')
    expect(switchEl.attributes('checked')).toBe('checked')
  })

  it('ListItem switch was unchecked', () => {
    const wrapper = mount({
      components: {
        AtList,
        AtListItem,
      },
      template: `
        <AtList>
          <AtListItem
            title='标题文字'
            is-switch
          />
        </AtList>
      `,
    })
    const switchEl = wrapper.find('.at-list .at-list__item .item-extra__switch switch')
    expect(switchEl.attributes('checked')).toBe(undefined)
  })
})
