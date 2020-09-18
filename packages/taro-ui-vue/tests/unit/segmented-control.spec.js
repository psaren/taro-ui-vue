import { mount } from '@vue/test-utils'
import AtSegmentedControl from '../components/segmented-control'

const factory = (values = {}, slots = { default: [''] }) => {
  return mount(AtSegmentedControl, {
    slots,
    propsData: { ...values },
  })
}

describe('AtSegmentedControl Snap', () => {
  const values = ['tab1', 'tab2', 'tab3']

  it('render initial AtSegmentedControl', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props values', () => {
    const wrapper = factory({ values: values })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props current', () => {
    const wrapper = factory({ current: 2, values: values })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props fontSize', () => {
    const wrapper = factory({ fontSize: '30', values: values })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props disabled', () => {
    const wrapper = factory({ disabled: true, values: values })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props selectedColor', () => {
    const wrapper = factory({ selectedColor: '#fff', values: values })
    expect(wrapper.element).toMatchSnapshot()
  })
})
