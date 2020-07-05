import { mount } from '@vue/test-utils'
import AtNoticebar from '../components/noticebar'

const factory = (values = {}, slots = { default: ['这是内容'] }) => {
  return mount(AtNoticebar, {
    slots,
    propsData: { ...values },
  })
}

describe('AtNoticebar Snap', () => {
  it('render AtNoticebar -- props show', () => {
    const wrapper = factory({ close: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNoticebar -- props single', () => {
    const wrapper = factory({ single: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNoticebar -- props speed', () => {
    const wrapper = factory({ speed: 200 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNoticebar -- props moreText & showMore', () => {
    // showMore work only when single is true
    const wrapper = factory({ moreText: '查看更多', showMore: true, single: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNoticebar -- props icon', () => {
    const wrapper = factory({ icon: 'volume-plus' })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtNoticebar Event', () => {
  it('AtNoticebar onClose', () => {
    const onClose = jest.fn()
    const wrapper = factory({
      close: true,
      onClose: onClose,
    })
    wrapper.find('.at-noticebar__close').trigger('tap')
    expect(onClose).toBeCalled()
  })

  it('AtNoticebar onGotoMore', () => {
    const onGotoMore = jest.fn()
    const wrapper = factory({
      icon: 'volume-plus',
      single: true,
      showMore: true,
      onGotoMore: onGotoMore,
      moreText: '更多内容',
    })
    wrapper.find('.at-noticebar__more').trigger('tap')
    expect(onGotoMore).toBeCalled()
  })
})
