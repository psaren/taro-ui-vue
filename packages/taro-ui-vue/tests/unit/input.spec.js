import { mount } from '@vue/test-utils'
import { AtInput } from '../dist/index.esm'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtInput, {
    slots,
    propsData: { ...values },
  })
}

describe('AtInput Snap', () => {
  it('render initial AtInput', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props style', () => {
    const wrapper = factory({ style: 'border:none;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props value', () => {
    const wrapper = factory({ value: 'value' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props name', () => {
    const wrapper = factory({ name: 'name' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props placeholder', () => {
    const wrapper = factory({ placeholder: 'placeholder' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props title', () => {
    const wrapper = factory({ title: 'title' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props maxLength', () => {
    const wrapper = factory({ maxLength: 10 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props type(number)', () => {
    const wrapper = factory({ type: 'number' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props type(password)', () => {
    const wrapper = factory({ type: 'password' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props type(idcard)', () => {
    const wrapper = factory({ type: 'idcard' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props type(digit)', () => {
    const wrapper = factory({ type: 'digit' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props type(phone)', () => {
    const wrapper = factory({ type: 'phone' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props disabled', () => {
    const wrapper = factory({ disabled: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props border', () => {
    const wrapper = factory({ border: false })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props editable', () => {
    const wrapper = factory({ editable: false })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props error', () => {
    const wrapper = factory({ error: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props clear', () => {
    const wrapper = factory({ clear: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtInput -- props required', () => {
    const wrapper = factory({ required: true })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtInput Event', () => {
  it('AtInput onChange', () => {
    const onChange = jest.fn()
    const wrapper = factory({ onChange: onChange })
    wrapper.find('.at-input__input').trigger('input', { detail: { value: 'value' } })
    expect(onChange).toBeCalled()
  })

  it('AtInput onFocus', () => {
    const onFocus = jest.fn()
    const wrapper = factory({ onFocus: onFocus })
    wrapper.find('.at-input__input').trigger('focus', { height: 30 })
    expect(onFocus).toBeCalled()
  })

  it('AtInput onConfirm', () => {
    const onConfirm = jest.fn()
    const wrapper = factory({ onConfirm: onConfirm })
    wrapper.find('.at-input__input').trigger('confirm', { detail: { value: 'value' } })
    expect(onConfirm).toBeCalled()
  })

  it('AtInput onClick', () => {
    const onClick = jest.fn()
    const wrapper = factory({ onClick: onClick, editable: false })
    wrapper.find('.at-input .at-input__overlay').trigger('tap')
    expect(onClick).toBeCalled()
  })

  it('AtInput clear Behavior', () => {
    const onChange = jest.fn()
    const wrapper = factory({ onChange: onChange, clear: true, value: 'value' })
    wrapper.find('.at-input .at-input__icon').trigger('touchEnd')
    expect(wrapper.vm.inputClearing).toBeTruthy()
    expect(onChange).toBeCalled()
  })

  it('AtInput error Behavior', () => {
    const onErrorClick = jest.fn()
    const wrapper = factory({ onErrorClick: onErrorClick, error: true, value: 'value' })
    wrapper.find('.at-input .at-input__icon').trigger('touchStart')
    expect(onErrorClick).toBeCalled()
  })
})
