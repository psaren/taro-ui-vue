import { mount } from '@vue/test-utils'
import AtButton from '../../src/components/button'

const factory = (values = {}, slots = { default: ['按钮'] }) => {
  return mount(AtButton, {
    slots,
    propsData: { ...values },
  })
}

describe('AtButton.vue', () => {
  it('render AtButton -- props size(normal)', () => {
    const wrapper = factory({
      size: 'normal',
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render AtButton -- props size(small)', () => {
    const wrapper = factory({
      size: 'small',
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render AtButton -- props size(primary)', () => {
    const wrapper = factory({
      size: 'primary',
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render AtButton -- props size(secondary)', () => {
    const wrapper = factory({
      size: 'secondary',
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render AtButton -- props circle', () => {
    const wrapper = factory({
      circle: true,
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render AtButton -- props full', () => {
    const wrapper = factory({
      full: true,
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render AtButton -- props loading', () => {
    const wrapper = factory({
      loading: true,
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render AtButton -- props disabled', () => {
    const wrapper = factory({
      disabled: true,
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtButton Event', () => {
  it('AtButton onClick', () => {
    const onClick = jest.fn()
    const wrapper = factory({
      onClick: onClick,
    })
    wrapper.trigger('tap')
    expect(onClick).toBeCalled()
  })
  it('AtButton disabled, onClick not to be called', () => {
    const onClick = jest.fn()
    const wrapper = factory({
      disabled: true,
      onClick: onClick,
    })
    wrapper.trigger('tap')
    expect(onClick).not.toBeCalled()
  })
})
