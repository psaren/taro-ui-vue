import { mount } from '@vue/test-utils'
import AtTabsPane from '../components/tabs-pane'

const factory = (values = {}, slots = { default: [''] }) => {
  return mount(AtTabsPane, {
    slots,
    propsData: { ...values },
  })
}

describe('AtTabsPane Snap', () => {
  it('render initial AtTabs', () => {
    const wrapper = factory({}, { default: ['test'] })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTabsPane -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTabsPane -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTabsPane -- props index current', () => {
    const wrapper = factory({ index: 0, current: 0 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTabsPane -- props index current', () => {
    const wrapper = factory({ index: 1, current: 0 })
    expect(wrapper.element).toMatchSnapshot()
  })
})
