import { mount } from '@vue/test-utils'
import { AtSwitch } from '../dist/index.esm'

const factory = (values = {}, slots = { default: ['标签'] }) => {
  return mount(AtSwitch, {
    slots,
    propsData: { ...values },
  })
}

describe('AtSwitch Snap', () => {
  it('render initial AtSwitch', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSwitch -- props title', () => {
    const wrapper = factory({ title: '开启中' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSwitch -- props checked', () => {
    const wrapper = factory({ title: '开启中', checked: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSwitch -- props border', () => {
    const wrapper = factory({ title: '开启中', border: false })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSwitch -- props disabled', () => {
    const wrapper1 = factory({ title: '开启中', checked: true, disabled: true })
    expect(wrapper1.element).toMatchSnapshot()
    const wrapper2 = factory({ title: '开启中', disabled: true })
    expect(wrapper2.element).toMatchSnapshot()
  })
})

describe('AtSwitch Event', () => {
  it('AtSwitch onChange', () => {
    const onChange = jest.fn()
    const wrapper = factory({ title: '开启中', onChange: onChange })
    wrapper.find('.at-switch .at-switch__switch').trigger('change', { detail: { value: false } })
    expect(onChange).toBeCalled()
    expect(onChange.mock.calls[0][0].value).toBeFalsy()
  })
})
