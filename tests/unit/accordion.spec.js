import { mount } from '@vue/test-utils'
import AtAccordion from '../../src/components/accordion'

const factory = (values = {}, slots = { default: ['按钮'] }) => {
  return mount(AtAccordion, {
    slots,
    propsData: { ...values },
  })
}

describe('AtAccordion Snap', () => {
  it('render initial AtAccordion', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtAccordion -- props title', () => {
    const wrapper = factory({
      title: 'title',
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtAccordion -- props open', () => {
    const wrapper = factory({
      open: true,
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtAccordion -- props icon', () => {
    const wrapper = factory(
      {
        icon: { value: 'chevron-down', color: 'red' },
      },
      {
        default: ['<view></view>'],
      }
    )
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtAccordion -- props icon prefixClass', () => {
    const wrapper = factory(
      {
        icon: { prefixClass: 'prefixClass', value: 'star', color: 'red' },
      },
      {
        default: ['<view></view>'],
      }
    )
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtAccordion -- props note', () => {
    const wrapper = factory(
      {
        note: 'note',
      },
      {
        default: ['<view></view>'],
      }
    )
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtAccordion Event', () => {
  it('toggle accordion', () => {
    const onClick = jest.fn()
    const wrapper = factory({
      onClick: onClick,
    })
    wrapper.find('.at-accordion__header').trigger('tap')
    expect(onClick).toBeCalled()
  })
})
