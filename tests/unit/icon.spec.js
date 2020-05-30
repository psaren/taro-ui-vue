import { mount } from '@vue/test-utils'
import AtIcon from '../../src/components/icon'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtIcon, {
    components: {},
    slots,
    propsData: { ...values },
  })
}

describe('AtIcon Snap', () => {
  it('render initial AtIcon', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtIcon -- props value', () => {
    const wrapper = factory({ value: 'star' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtIcon -- props color', () => {
    const wrapper = factory({ color: '#fff' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtIcon -- props size', () => {
    const wrapper = factory({ size: '14' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtIcon -- props prefixClass', () => {
    const wrapper = factory({ prefixClass: 'prefixClass', value: 'star' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtIcon -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtIcon -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtIcon Event', () => {
  it('AtIcon onClick', () => {
    const onClick = jest.fn()
    const wrapper = factory({ onClick: onClick })

    wrapper.find('.at-icon').trigger('tap')
    expect(onClick).toBeCalled()
  })
})
