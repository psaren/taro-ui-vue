import { View } from '@tarojs/components'
import classNames from 'classnames'
import AtCountdownItem from './item/index'

/**
 *
 * @param {number} day
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 */
const toSeconds = (day, hours, minutes, seconds) =>
  day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds

export default {
  name: 'AtCountdown',
  props: {
    customStyle: {
      type: [String, Object],
      default: () => {},
    },
    className: {
      type: [String, Array],
      default: '',
    },
    isCard: {
      type: Boolean,
      default: false,
    },
    isShowDay: {
      type: Boolean,
      default: false,
    },
    isShowHour: {
      type: Boolean,
      default: true,
    },
    format: {
      type: Object,
      default: () => ({
        day: '天',
        hours: '时',
        minutes: '分',
        seconds: '秒',
      }),
    },
    day: {
      type: Number,
      default: 0,
    },
    hours: {
      type: Number,
      default: 0,
    },
    minutes: {
      type: Number,
      default: 0,
    },
    seconds: {
      type: Number,
      default: 0,
    },
    onTimeUp: {
      type: Function,
      default: () => () => {},
    },
  },
  data() {
    const { day, hours, minutes, seconds } = this
    const stateSeconds = toSeconds(day, hours, minutes, seconds)
    const state = this.calculateTime()

    return {
      state,
      stateSeconds,
      timer: null,
    }
  },
  mounted() {
    this.setTimer()
  },
  beforeDestroy() {
    this.clearTimer()
  },
  methods: {
    calculateTime() {
      let [day, hours, minutes, seconds] = [0, 0, 0, 0]

      if (this.stateSeconds > 0) {
        day = this.isShowDay ? Math.floor(this.stateSeconds / (60 * 60 * 24)) : 0
        hours = Math.floor(this.stateSeconds / (60 * 60)) - day * 24
        minutes = Math.floor(this.stateSeconds / 60) - day * 24 * 60 - hours * 60
        seconds =
          Math.floor(this.stateSeconds) - day * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60
      }
      return {
        day,
        hours,
        minutes,
        seconds,
      }
    },
    setTimer() {
      if (!this.timer) this.countdonwn()
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    countdonwn() {
      this.state = this.calculateTime()
      this.stateSeconds--

      if (this.stateSeconds < 0) {
        this.clearTimer()
        this.onTimeUp && this.onTimeUp()
        return
      }

      this.timer = setTimeout(() => {
        this.countdonwn()
      }, 1000)
    },
  },
  render() {
    const { isShowDay, isShowHour, className, customStyle, isCard, format } = this
    const { day, hours, minutes, seconds } = this.state
    return (
      <View
        class={classNames(
          {
            'at-countdown': true,
            'at-countdown--card': isCard,
          },
          className
        )}
        style={customStyle}>
        {isShowDay && <AtCountdownItem num={day} separator={format.day} />}
        {isShowHour && <AtCountdownItem num={hours} separator={format.hours} />}
        <AtCountdownItem num={minutes} separator={format.minutes} />
        <AtCountdownItem num={seconds} separator={format.seconds} />
      </View>
    )
  },
}
