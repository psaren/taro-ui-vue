import classNames from 'classnames'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import {
  delayQuerySelector,
  getEventDetail,
  mergeStyle,
} from '../../utils/common'

import mixins from '../mixins'

const AtRange = {
  name: 'AtRange',
  mixins: [mixins],
  props: {
    customStyle: {
      type: [Object, String],
      default: function () {
        return {}
      },
    },
    className: {
      type: [Object, String],
      default: function () {
        return {}
      },
    },
    sliderStyle: {
      type: [String, Object],
      default: '',
    },
    railStyle: {
      type: String,
      default: '',
    },
    trackStyle: {
      type: String,
      default: '',
    },
    value: {
      type: Array,
      default: function () {
        return [0, 0]
      },
    },
    blockSize: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    onChange: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
    onAfterChange: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
  },
  data() {
    const { min = 0, max = 100 } = this
    return {
      width: 0,
      left: 0,
      deltaValue: max - min,
      currentSlider: '',
      state: {
        aX: 0,
        bX: 0,
      },
    }
  },
  watch: {
    value(v) {
      this.updatePos()
      if (this.value[0] !== v[0] || this.value[1] !== v[1]) {
        this.setValue(v)
      }
    },
  },
  mounted() {
    const { value } = this
    this.updatePos()
    this.setValue(value)
  },

  computed: {
    rootCls() {
      return classNames(
        'at-range',
        {
          'at-range--disabled': this.disabled,
        },
        this.className
      )
    },
    sliderCommonStyle() {
      const { blockSize } = this
      return {
        width: blockSize ? `${blockSize}PX` : '',
        height: blockSize ? `${blockSize}PX` : '',
        marginLeft: blockSize ? `${-blockSize / 2}PX` : '',
      }
    },
    sliderAStyle() {
      return {
        ...this.sliderCommonStyle,
        left: `${this.state.aX}%`,
      }
    },
    sliderBStyle() {
      return {
        ...this.sliderCommonStyle,
        left: `${this.state.bX}%`,
      }
    },
    containerStyle() {
      const { blockSize } = this
      return {
        height: blockSize ? `${blockSize}PX` : '',
      }
    },
    atTrackStyle() {
      const { aX, bX } = this.state
      const smallerX = Math.min(aX, bX)
      const deltaX = Math.abs(aX - bX)
      return {
        left: `${smallerX}%`,
        width: `${deltaX}%`,
      }
    },
  },

  methods: {
    mergeStyle,
    handleClick(event: CommonEvent): void {
      if (this.currentSlider && !this.disabled) {
        let sliderValue = 0
        const detail = getEventDetail(event)
        sliderValue = detail.x - this.left
        this.setSliderValue(this.currentSlider, sliderValue, 'onChange')
      }
    },

    handleTouchMove(sliderName: string, event: ITouchEvent): void {
      if (this.disabled) return
      event.stopPropagation()

      const clientX = event.touches[0].clientX
      this.setSliderValue(sliderName, clientX - this.left, 'onChange')
    },

    handleTouchEnd(sliderName: string): void {
      if (this.disabled) return

      this.currentSlider = sliderName
      this.triggerEvent('onAfterChange')
    },

    setSliderValue(
      sliderName: string,
      targetValue: number,
      funcName: string
    ): void {
      const distance = Math.min(Math.max(targetValue, 0), this.width)
      const sliderValue = Math.floor((distance / this.width) * 100)
      if (funcName) {
        this.setState(
          {
            [sliderName]: sliderValue,
          },
          () => this.triggerEvent(funcName)
        )
      } else {
        this.setState({
          [sliderName]: sliderValue,
        })
      }
    },

    setValue(value: number[]): void {
      const aX = Math.round(((value[0] - this.min) / this.deltaValue) * 100) // fix issue #670
      const bX = Math.round(((value[1] - this.min) / this.deltaValue) * 100) // fix issue #670
      this.setState({ aX, bX })
    },

    triggerEvent(funcName: string): void {
      const { aX, bX } = this.state
      const a = Math.round((aX / 100) * this.deltaValue) + this.min
      const b = Math.round((bX / 100) * this.deltaValue) + this.min
      const result = [a, b].sort((x, y) => x - y)

      if (funcName === 'onChange') {
        this.onChange && this.onChange(result)
      } else if (funcName === 'onAfterChange') {
        this.onAfterChange && this.onAfterChange(result)
      }
    },

    updatePos(): void {
      delayQuerySelector(this, '.at-range__container', 30).then((rect) => {
        const temp = rect ? rect : [{ width: 0, left: 0 }]
        this.width = Math.round(temp[0].width)
        this.left = Math.round(temp[0].left)
      })
    },
  },
}

export default AtRange
