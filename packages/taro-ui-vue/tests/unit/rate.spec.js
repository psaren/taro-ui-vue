import { mount } from '@vue/test-utils'
import { AtRate } from '../dist/index.esm'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtRate, {
    slots,
    propsData: { ...values },
  })
}

describe('AtRate Snap', () => {
  it('render initial AtRate', () => {
    const wrapper = factory({ isTest: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtRate -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtRate -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtRate -- props size', () => {
    const wrapper = factory({ size: '10' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtRate -- props value', () => {
    const wrapper = factory({ value: 2 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtRate -- props max', () => {
    const wrapper = factory({ max: 10 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtRate -- props margin', () => {
    const wrapper = factory({ margin: 10 })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtRate Event', () => {
  it('AtRate onChange Event', () => {
    const onChange = jest.fn()
    const wrapper = factory({ value: 2, onChange: onChange })
    wrapper.find('.at-rate__icon').trigger('tap')
    expect(onChange).toBeCalled()
  })
})
