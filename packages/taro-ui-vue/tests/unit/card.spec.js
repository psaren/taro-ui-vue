import { mount } from '@vue/test-utils'
import AtCard from '../components/card'

const factory = (values = {}, slots = { default: ['这也是内容区 可以随意定义功能'] }) => {
  return mount(AtCard, {
    components: {},
    slots,
    propsData: { ...values, title: '这是个标题' },
  })
}

describe('Card Snap', () => {
  it('render initial Card', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Card -- props thumb', () => {
    const wrapper = factory({
      thumb:
        'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Card -- props note', () => {
    const wrapper = factory({
      note: '小Tips',
      thumb:
        'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Card -- props extra', () => {
    const wrapper = factory({
      note: '小Tips',
      extra: '额外信息',
      thumb:
        'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Card -- props isFull', () => {
    const wrapper = factory({
      isFull: true,
      note: '小Tips',
      extra: '额外信息',
      thumb:
        'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render Card -- props extraStyle', () => {
    const wrapper = factory({
      isFull: true,
      note: '小Tips',
      extra: '额外信息',
      extraStyle: { fontSize: '12px', maxWidth: '200px' },
      thumb:
        'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Card Behavior ', () => {
  it('Card onClick', () => {
    const onClick = jest.fn()

    const wrapper = factory({
      onClick: onClick,
    })
    wrapper.find('.at-card').trigger('tap')

    expect(onClick).toBeCalled()
  })
})
