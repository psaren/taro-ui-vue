import { mount } from '@vue/test-utils'
import AtModal from '../../src/components/modal'
import AtModalAction from '../../src/components/modal/action/index'
import AtModalHeader from '../../src/components/modal/header/index'
import AtModalContent from '../../src/components/modal/content/index'
import { sleep } from '../utils'

const components = {
  AtModal,
  AtModalAction,
  AtModalHeader,
  AtModalContent,
}

describe('Modal Snap', () => {
  it('render initial Modal', () => {
    const wrapper = mount({
      components,
      render() {
        return (
          <AtModal>
            <AtModalHeader>标题</AtModalHeader>
            <AtModalContent>
              这里是正文内容，欢迎加入京东凹凸实验室 这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
            </AtModalContent>
            <AtModalAction>
              <Button>取消</Button>
              <Button>确定</Button>
            </AtModalAction>
          </AtModal>
        )
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Modal', () => {
    const wrapper = mount({
      components,
      render() {
        return (
          <AtModal isOpened>
            <AtModalHeader>标题</AtModalHeader>
            <AtModalContent>
              这里是正文内容，欢迎加入京东凹凸实验室 这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
            </AtModalContent>
            <AtModalAction>
              <Button>取消</Button>
              <Button>确定</Button>
            </AtModalAction>
          </AtModal>
        )
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Modal -- not header', () => {
    const wrapper = mount({
      components,
      render() {
        return (
          <AtModal isOpened>
            <AtModalContent>
              这里是正文内容，欢迎加入京东凹凸实验室 这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
            </AtModalContent>
            <AtModalAction>
              <Button>取消</Button>
              <Button>确定</Button>
            </AtModalAction>
          </AtModal>
        )
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened Modal -- single button', () => {
    const wrapper = mount({
      components,
      render() {
        return (
          <AtModal isOpened>
            <AtModalContent>
              这里是正文内容，欢迎加入京东凹凸实验室 这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
            </AtModalContent>
            <AtModalAction>
              <Button>确定</Button>
            </AtModalAction>
          </AtModal>
        )
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render opened  Modal -- simple', () => {
    const wrapper = mount({
      components,
      render() {
        return (
          <AtModal
            isOpened
            title="标题"
            cancelText="取消"
            confirmText="确认"
            content="欢迎加入京东凹凸实验室\n\r欢迎加入京东凹凸实验室"
          />
        )
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Modal Behavior ', () => {
  it('Modal onClose & onCancel & onClick', async () => {
    const onCancel = jest.fn()
    const onConfirm = jest.fn()
    const onClose = jest.fn()
    const wrapper = mount({
      components,
      render() {
        return (
          <AtModal
            isOpened
            title="标题"
            cancelText="取消"
            confirmText="确认"
            closeOnClickOverlay
            props={{
              onClose: onClose,
              onCancel: onCancel,
              onConfirm: onConfirm,
            }}
            content="欢迎加入京东凹凸实验室\n\r欢迎加入京东凹凸实验室"
          />
        )
      },
    })

    const confirmDom = wrapper.find(
      '.at-modal .at-modal__footer .at-modal__action button:last-child'
    )

    confirmDom.trigger('tap')
    expect(onConfirm).toBeCalled()
    await sleep(10)

    const cancelDom = wrapper.find(
      '.at-modal .at-modal__footer .at-modal__action button:first-child'
    )
    cancelDom.trigger('tap')
    expect(onCancel).toBeCalled()
    await sleep(10)

    const overlayDom = wrapper.find('.at-modal .at-modal__overlay')
    overlayDom.trigger('tap')
    await sleep(10)
    expect(onClose).toBeCalled()
  })
})
