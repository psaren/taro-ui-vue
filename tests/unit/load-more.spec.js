import { mount } from '@vue/test-utils'
import AtLoadMore from '../../src/components/load-more'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtLoadMore, {
    components: {},
    slots,
    propsData: { ...values },
  })
}

describe('AtLoadMore Snap', () => {
  it('render initial AtLoadMore', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtLoadMore -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtLoadMore -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtLoadMore -- props status === more', () => {
    const wrapper = factory({ status: 'more' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtLoadMore -- props status === loading', () => {
    const wrapper = factory({ status: 'loading' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtLoadMore -- props status === noMore', () => {
    const wrapper = factory({ status: 'noMore' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtLoadMore -- props moreText', () => {
    const wrapper = factory({ moreText: 'moreText', status: 'more' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtLoadMore -- props loadingText', () => {
    const wrapper = factory({ loadingText: 'loadingText', status: 'loading' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtLoadMore -- props noMoreText', () => {
    const wrapper = factory({ noMoreText: 'noMoreText', status: 'noMore' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtLoadMore -- props noMoreTextStyle', () => {
    const wrapper = factory({ noMoreTextStyle: 'color:red' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtLoadMore -- props moreBtnStyle', () => {
    const wrapper = factory({ moreBtnStyle: 'color:red' })
    expect(wrapper.element).toMatchSnapshot()
  })
})
