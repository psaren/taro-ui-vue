import { mount } from '@vue/test-utils'
import AtLoading from '../../src/components/loading'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtLoading, {
    components: {},
    slots,
    propsData: { ...values },
  })
}

describe('AtLoading Snap', () => {
  it('render initial AtLoading', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtLoading -- props size', () => {
    const wrapper = factory({ size: 15 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtLoading -- props color', () => {
    const wrapper = factory({ color: '#fff' })
    expect(wrapper.element).toMatchSnapshot()
  })
})
