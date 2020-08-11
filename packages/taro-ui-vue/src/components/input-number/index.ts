import classNames from 'classnames'
import { InputError } from '../../../types/input-number'
import _toString from 'lodash/toString'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import { pxTransform } from '../../utils/common'

// 实现两数相加并保留小数点后最短尾数
function addNum(num1: number, num2: number): number {
  let sq1: number, sq2: number
  try {
    sq1 = _toString(num1).split('.')[1].length
  } catch (e) {
    sq1 = 0
  }
  try {
    sq2 = _toString(num2).split('.')[1].length
  } catch (e) {
    sq2 = 0
  }
  const m = Math.pow(10, Math.max(sq1, sq2))
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m
}

// 格式化数字，处理01变成1,并且不处理1. 这种情况
function parseValue(num: string): string {
  if (num === '') return '0'

  const numStr = _toString(num)
  if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
    // 处理01变成1,并且不处理1.
    return _toString(parseFloat(num))
  }
  return _toString(num)
}

type ExtendEvent = {
  target: {
    value: string | number
  }
}

const AtInputNumber = {
  name: 'AtInputNumber',
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
    disabled: {
      type: Boolean,
      default: false,
    },
    disabledInput: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'number',
      validator: (val): boolean => ['number', 'digit'].includes(val),
    },
    size: {
      type: String,
      default: 'normal',
      validator: (val): boolean => ['normal', 'large'].includes(val),
    },
    value: {
      type: [Number, String],
      default: 1,
    },
    width: {
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
    step: {
      type: Number,
      default: 1,
    },
    onChange: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
    onBlur: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
  },
  methods: {
    handleClick(clickType: 'minus' | 'plus', e: CommonEvent): void {
      const { disabled, value, min, max, step } = this
      const lowThanMin = clickType === 'minus' && value <= min
      const overThanMax = clickType === 'plus' && value >= max
      if (lowThanMin || overThanMax || disabled) {
        const deltaValue = clickType === 'minus' ? -step : step
        const errorValue = addNum(Number(value), deltaValue)
        if (disabled) {
          this.handleError({
            type: 'DISABLED',
            errorValue,
          })
        } else {
          this.handleError({
            type: lowThanMin ? 'LOW' : 'OVER',
            errorValue,
          })
        }
        return
      }
      const deltaValue = clickType === 'minus' ? -step : step
      let newValue = addNum(Number(value), deltaValue)
      newValue = Number(this.handleValue(newValue))
      this.$emit('input', newValue)
      this.onChange(newValue, e)
    },
    handleValue(value: string | number): string {
      const { max, min } = this
      let resultValue = value === '' ? min : value
      // 此处不能使用 Math.max，会是字符串变数字，并丢失 .
      if (resultValue > max) {
        resultValue = max
        this.handleError({
          type: 'OVER',
          errorValue: resultValue,
        })
      }
      if (resultValue < min) {
        resultValue = min
        this.handleError({
          type: 'LOW',
          errorValue: resultValue,
        })
      }
      if (resultValue && !Number(resultValue)) {
        resultValue = parseFloat(String(resultValue)) || min

        this.handleError({
          type: 'OVER',
          errorValue: resultValue,
        })
      }

      resultValue = parseValue(String(resultValue))
      return resultValue
    },
    handleInput(e: CommonEvent & ExtendEvent) {
      const { value } = e.target
      const { disabled } = this
      if (disabled) return

      const newValue = this.handleValue(value)
      this.onChange(Number(newValue), e)
      return newValue
    },

    handleBlur(event: ITouchEvent): void {
      this.onBlur && this.onBlur(event)
    },

    handleError(errorValue: InputError): void {
      if (!this.onErrorInput) {
        return
      }
      this.onErrorInput(errorValue)
    },
  },
  computed: {
    inputValue() {
      return Number(this.handleValue(this.value))
    },
    inputStyle() {
      const { width } = this
      return {
        width: width ? `${pxTransform(width)}` : '',
      }
    },
    rootCls() {
      const { size, className } = this
      return classNames(
        'at-input-number',
        {
          'at-input-number--lg': size === 'large',
        },
        className
      )
    },
    minusBtnCls() {
      const { min, disabled, value } = this
      const inputValue = Number(this.handleValue(value))
      return classNames('at-input-number__btn', {
        'at-input-number--disabled': inputValue <= min || disabled,
      })
    },
    plusBtnCls() {
      const { max, disabled, value } = this
      const inputValue = Number(this.handleValue(value))
      return classNames('at-input-number__btn', {
        'at-input-number--disabled': inputValue >= max || disabled,
      })
    },
  },
}

export default AtInputNumber
