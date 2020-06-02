import { mount } from '@vue/test-utils'
import AtSwipeAction from '../components/swipe-action'

const factory = (values = {}, slots = { default: [''] }) => {
  return mount(AtSteps, {
    slots,
    propsData: { ...values },
  })
}

const MAX_OFFSET_SIZE = 101

const OPTIONS = [
  {
    text: '取消',
    className: 'cancel',
    style: {
      backgroundColor: '#6190E8',
    },
  },
  {
    text: '确认',
    className: 'confirm',
    style: {
      backgroundColor: '#FF4949',
    },
  },
]

const DOM_INFO = {
  top: 1,
  bottom: 44, // top + height
  left: 0,
  right: 375, // left + width
  height: 43,
  width: 375,
}

const START_INFO = { clientX: 0, clientY: 0 }
const MOVE_INFO = {
  clientY: 0,
  clientX: -(MAX_OFFSET_SIZE - 1),
  pageX: DOM_INFO.width / 2,
  pageY: DOM_INFO.height / 2,
}

describe('SwipeAction Snap', () => {
  it('render options', () => {
    const wrapper = mount({
      render() {
        return (
          <AtSwipeAction disabled autoClose options={OPTIONS} className="swipe-action--test">
            <View className="normal">AtSwipeAction 一般使用场景</View>
          </AtSwipeAction>
        )
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('render options -- isOpened', () => {
    const wrapper = mount({
      render() {
        return (
          <AtSwipeAction
            isOpened
            disabled
            autoClose
            options={OPTIONS}
            className="swipe-action--test">
            <View className="normal">AtSwipeAction 一般使用场景</View>
          </AtSwipeAction>
        )
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
