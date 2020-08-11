import classNames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'
import mixins from '../mixins'

function clampNumber(value: number, lower: number, upper: number): number {
  return Math.max(lower, Math.min(upper, value))
}

const AtSlider = {
  name: 'AtSlider',
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
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    value: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: '#6190e8',
    },
    backgroundColor: {
      type: String,
      default: '#e9e9e9',
    },
    blockSize: {
      type: Number,
      default: 28,
    },
    blockColor: {
      type: String,
      default: '#ffffff',
    },
    showValue: {
      type: Boolean,
      default: false,
    },
    onChange: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
    onChanging: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
  },
  data() {
    const { value, min, max } = this
    return {
      state: {
        _value: clampNumber(value, min, max),
      },
    }
  },
  computed: {
    rootCls() {
      const { disabled, className } = this
      return classNames(
        {
          'at-slider': true,
          'at-slider--disabled': disabled,
        },
        className
      )
    },
  },
  methods: {
    handleChanging(e: CommonEvent): void {
      const { _value } = this.state
      const { value }: { value: number } = e.detail

      if (value !== _value) {
        this.setState({ _value: value })
      }
      this.onChanging && this.onChanging(value)
    },
    handleChange(e: CommonEvent): void {
      const { value } = e.detail

      this.setState({ _value: value })
      this.onChange && this.onChange(value)
    },
  },
}

export default AtSlider
