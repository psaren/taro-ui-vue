import { mount } from '@vue/test-utils'
import { AtTextarea } from '../dist/index.esm'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtTextarea, {
    slots,
    propsData: { value: '', onChange: () => {}, ...values },
  })
}

describe('AtTextarea Snap', () => {
  it('render initial AtTextarea', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTextarea -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTextarea -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTextarea -- props value', () => {
    const wrapper = factory({ value: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTextarea -- props maxLength', () => {
    const wrapper = factory({ maxLength: 300 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTextarea -- props placeholder', () => {
    const wrapper = factory({ placeholder: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTextarea -- props count', () => {
    const wrapper = factory({ count: false })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTextarea -- props height', () => {
    const wrapper = factory({ height: 3000 })
    expect(wrapper.vm.height).toBe(3000)
    expect(wrapper.element).toMatchSnapshot()
  })
})
