import { mount } from '@vue/test-utils'
import { AtDrawer } from '../dist/index.esm'
import { sleep } from '../helper'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtDrawer, {
    slots,
    propsData: { ...values },
  })
}

describe('AtDrawer Snap', () => {
  it('render initial AtDrawer', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtDrawer -- props show', () => {
    const wrapper = factory({ show: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtDrawer -- props width', () => {
    const wrapper = factory({ show: true, width: 50 })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render AtDrawer -- props items', () => {
    const wrapper = factory({ show: true, items: ['菜单1', '菜单2'] })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtDrawer Event', () => {
  it('AtDrawer onItemClick & onClose', async () => {
    const onItemClick = jest.fn()
    const onClose = jest.fn()
    const wrapper = factory({
      show: true,
      onItemClick: onItemClick,
      onClose: onClose,
      items: ['菜单1', '菜单2'],
    })
    await sleep(300)
    wrapper.find('.at-drawer .at-list__item').trigger('tap')
    expect(onItemClick).toBeCalled()
    await sleep(350)
    expect(onClose).toBeCalled()
  })

  it('AtDrawer item NO.0 & NO.1 click, onItemClick(index) index should be 0 and 1', async () => {
    const onItemClick = jest.fn()
    const wrapper = factory({
      show: true,
      onItemClick: onItemClick,
      items: ['菜单1', '菜单2'],
    })
    await sleep(300)
    wrapper.find('.at-drawer .at-list__item').trigger('tap')
    wrapper.find('.at-drawer .at-list__item:nth-child(2)').trigger('tap')
    await sleep(0)
    expect(onItemClick.mock.calls[0][0]).toBe(0)
    expect(onItemClick.mock.calls[1][0]).toBe(1)
  })
  it('AtDrawer click mask onClose', async () => {
    const onClose = jest.fn()
    const wrapper = factory({
      show: true,
      onClose: onClose,
      items: ['菜单1', '菜单2'],
    })
    await sleep(300)
    wrapper.find('.at-drawer .at-drawer__mask').trigger('tap')
    await sleep(350)
    expect(onClose).toBeCalled()
  })
})
