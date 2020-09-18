import { mount } from '@vue/test-utils'
import { AtInputNumber } from '../dist/index.esm'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtInputNumber, {
    slots,
    propsData: { ...values },
  })
}

describe('AtInputNumber Snap', () => {
  it('render initial AtInputNumber', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInputNumber -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInputNumber -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInputNumber -- props type(number)', () => {
    const wrapper = factory({ type: 'number' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInputNumber -- props type(digit)', () => {
    const wrapper = factory({ type: 'digit' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInputNumber -- props disabled', () => {
    const wrapper = factory({ disabled: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInputNumber -- props disabledInput', () => {
    const wrapper = factory({ disabledInput: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInputNumber -- props value', () => {
    const wrapper = factory({ value: 2 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInputNumber -- props width', () => {
    const wrapper = factory({ width: 200 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInputNumber -- props size', () => {
    const wrapper = factory({ size: 'large' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInputNumber -- props step', () => {
    const wrapper = factory({ step: 2 })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtNumberInput Event', () => {
  it('AtNumberInput onChange', () => {
    const onChange = jest.fn()
    const wrapper = factory({ value: 2, onChange: onChange })
    wrapper.find('.at-input-number .at-input-number__input').trigger('input')
    expect(onChange).toBeCalled()
  })

  it('AtNumberInput onBlur', () => {
    const onBlur = jest.fn()
    const wrapper = factory({ value: 2, onBlur: onBlur })
    wrapper.find('.at-input-number .at-input-number__input').trigger('blur')
    expect(onBlur).toBeCalled()
  })
})
