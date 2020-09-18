import { mount } from '@vue/test-utils'
import { AtSearchBar } from '../dist/index.esm'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtSearchBar, {
    slots,
    propsData: { ...values },
  })
}

describe('AtSearchBar Snap', () => {
  it('render initial AtSearchBar', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSearchBar -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSearchBar -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSearchBar -- props value', () => {
    const wrapper = factory({ value: 'value' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSearchBar -- props placeholder', () => {
    const wrapper = factory({ placeholder: 'placeholder' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSearchBar -- props maxLength', () => {
    const wrapper = factory({ maxLength: 120 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSearchBar -- props fixed', () => {
    const wrapper = factory({ fixed: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSearchBar -- props fucos', () => {
    const wrapper = factory({ fucos: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSearchBar -- props disabled', () => {
    const wrapper = factory({ disabled: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSearchBar -- props showActionButton', () => {
    const wrapper = factory({ showActionButton: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSearchBar -- props actionName', () => {
    const wrapper = factory({ actionName: 'actionName' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSearchBar -- props inputType number', () => {
    const wrapper = factory({ inputType: 'number' })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtSearchBar Event', () => {
  it('AtSearchBar onChange', () => {
    const onChange = jest.fn()
    const wrapper = factory({ onChange: onChange })
    wrapper.find('.at-search-bar .at-search-bar__input').trigger('input')
    expect(onChange).toBeCalled()
  })

  it('AtSearchBar onChange', () => {
    const onFocus = jest.fn()
    const wrapper = factory({ onFocus: onFocus })
    wrapper.find('.at-search-bar .at-search-bar__input').trigger('focus')
    expect(onFocus).toBeCalled()
  })

  it('AtSearchBar onBlur', () => {
    const onBlur = jest.fn()
    const wrapper = factory({ onBlur: onBlur })
    wrapper.find('.at-search-bar .at-search-bar__input').trigger('blur')
    expect(onBlur).toBeCalled()
  })

  it('AtSearchBar onConfirm', () => {
    const onConfirm = jest.fn()
    const wrapper = factory({ onConfirm: onConfirm })
    wrapper.find('.at-search-bar .at-search-bar__input').trigger('confirm')
    expect(onConfirm).toBeCalled()
  })

  it('AtSearchBar onActionClick', () => {
    const onActionClick = jest.fn()
    const wrapper = factory({ onActionClick: onActionClick })
    wrapper.find('.at-search-bar .at-search-bar__action').trigger('tap')
    expect(onActionClick).toBeCalled()
  })
})
