/**
 *
 * @param {number} num
 */
const formatNum = (num) => {
  return num <= 9 ? `0${num}` : `${num}`
}

export default {
  name: 'CountdownItem',
  props: {
    num: {
      type: Number,
      default: 0,
    },
    separator: {
      type: String,
      default: '',
    },
  },
  render() {
    const { num, separator } = this
    return (
      <view class="at-countdown__item">
        <view class="at-countdown__time-box">
          <text class="at-countdown__time">{formatNum(num)}</text>
        </view>
        <text class="at-countdown__separator">{separator}</text>
      </view>
    )
  },
}
