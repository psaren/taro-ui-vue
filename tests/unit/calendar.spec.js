import { mount } from '@vue/test-utils'
import { AtCalendar } from '../dist/index.esm'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtCalendar, {
    slots,
    propsData: { ...values },
  })
}

describe('AtCalendar Snap', () => {
  it('render initial AtCalendar', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })
})
