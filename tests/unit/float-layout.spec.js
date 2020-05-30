import { mount } from '@vue/test-utils'
import AtFloatLayout from '../../src/components/float-layout'
import { sleep } from '../utils'

const factory = (
  values = {},
  slots = {
    default: [
      `这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
随你怎么写`,
    ],
  }
) => {
  return mount(AtFloatLayout, {
    components: {},
    slots,
    propsData: { ...values },
  })
}

describe('FloatLayout Snap', () => {
  it('render initial FloatLayout', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render FloatLayout -- props isOpened', () => {
    const wrapper = factory({ isOpened: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render FloatLayout -- props title', () => {
    const wrapper = factory({ title: '这是个标题', isOpened: true })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('FloatLayout Behavior ', () => {
  it('FloatLayout onClose', async () => {
    const onClose = jest.fn()
    const wrapper = factory({
      title: '这是个标题',
      isOpened: true,
      onClose: onClose,
    })
    wrapper.find('.at-float-layout__overlay').trigger('tap')
    await sleep(0)
    expect(onClose).toBeCalled()
  })
})
