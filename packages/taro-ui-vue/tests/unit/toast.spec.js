import { mount } from '@vue/test-utils'
import AtToast from '../components/toast'
import { sleep } from '../helper'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtToast, {
    slots,
    propsData: { ...values },
  })
}

const ICON = 'loading'
const TEXT = '测试数据Text'
const IMAGE = 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png'

const STATUS_ERROR = 'error'
const STATUS_SUCCESS = 'success'
const STATUS_LOADING = 'loading'

describe('Toast Snap', () => {
  it('render initial Toast', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Toast', () => {
    const wrapper = factory({ isOpened: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Toast -- props text', () => {
    const wrapper = factory({ isOpened: true, text: TEXT })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Toast -- props icon', () => {
    const wrapper = factory({ isOpened: true, icon: ICON })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened  Toast -- props image', () => {
    const wrapper = factory({ isOpened: true, image: IMAGE })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened  Toast -- props hasMask', () => {
    const wrapper = factory({ isOpened: true, hasMask: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Toast -- props status : success ', () => {
    const wrapper = factory({ isOpened: true, status: STATUS_SUCCESS })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Toast -- props status : loading ', () => {
    const wrapper = factory({ isOpened: true, status: STATUS_LOADING })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Toast -- props status : error ', () => {
    const wrapper = factory({ isOpened: true, status: STATUS_ERROR })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Toast Behavior ', () => {
  it('Toast will close when is clicked && onClose will be called', async () => {
    const onClose = jest.fn()
    const wrapper = factory({ isOpened: true, onClose: onClose })
    expect(wrapper.vm.state._isOpened).toBeTruthy()
    expect(wrapper.vm.status === 'loading').toBeFalsy()
    wrapper.find('.at-toast .toast-body').trigger('tap')
    await sleep(0)
    expect(onClose).toBeCalled()
    expect(wrapper.vm.state._isOpened).toBeFalsy()
  })

  it('Toast will close when time over --- default', async () => {
    const wrapper = factory({ isOpened: true })
    expect(wrapper.vm.state._isOpened).toBeTruthy()
    expect(wrapper.vm.duration).toEqual(3000)
    await sleep(3000)
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.state._isOpened).toBeFalsy()
    })
  })

  it('Toast will close when time over', async () => {
    const wrapper = factory({ isOpened: true, duration: 1000 })
    expect(wrapper.vm.state._isOpened).toBeTruthy()
    expect(wrapper.vm.duration).toEqual(1000)
    await sleep(1000)
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.state._isOpened).toBeFalsy()
    })
  })

  it('Toast onClick will be called', async () => {
    const onClick = jest.fn()
    const wrapper = factory({ isOpened: true, onClick: onClick })
    expect(wrapper.vm.state._isOpened).toBeTruthy()
    wrapper.find('.at-toast .toast-body').trigger('tap')
    await sleep(0)
    expect(onClick).toBeCalled()
    expect(wrapper.vm.state._isOpened).toBeTruthy()
  })
})
