import { mount } from '@vue/test-utils'
import ActivityIndicator from '../components/activity-indicator/index'
import AtLoading from '../components/loading'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(ActivityIndicator, {
    slots,
    components: { AtLoading },
    propsData: { ...values },
  })
}

describe('ActivityIndicator Snap', () => {
  it('render initial ActivityIndicator', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props size', () => {
    const wrapper = factory({ size: 32 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props color', () => {
    const wrapper = factory({ color: '#13CE66' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props content', () => {
    const wrapper = factory({ content: '加载中...' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props mode', () => {
    const wrapper = factory({ mode: 'center' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props isOpened', () => {
    const wrapper = factory({ isOpened: true })
    expect(wrapper.element).toMatchSnapshot()
  })
})
