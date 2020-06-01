import { View } from '@tarojs/components'
/**
 *
 * @param {number} num
 */
const formatNum = (num) => {
  return num <= 9 ? `0${num}` : `${num}`
}

export default {
  name: 'AtCountdownItem',
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
      <View class="at-countdown__item">
        <View class="at-countdown__time-box">
          <View class="at-countdown__time">{formatNum(num)}</View>
        </View>
        <View class="at-countdown__separator">{separator}</View>
      </View>
    )
  },
}
