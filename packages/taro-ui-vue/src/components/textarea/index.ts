import Vue from 'vue'
import classNames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { pxTransform } from '../../utils/common'

type ExtendEvent = {
  target: {
    value: string,
  },
}

function getMaxLength(maxLength: number, textOverflowForbidden: boolean): number {
  if (!textOverflowForbidden) {
    return maxLength + 500
  }
  return maxLength
}

const ENV = Taro.getEnv()

const AtTextarea = Vue.extend({
  name: 'AtTextarea',
  props: {
    customStyle: {
      type: [Object, String],
      default: function () {
        return {}
      },
    },
    placeholderStyle: {
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
    value: {
      type: String,
      default: '',
      required: true,
    },
    cursorSpacing: {
      type: Number,
      default: 100,
    },
    maxLength: {
      type: [Number, String],
      default: 200,
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
    focus: {
      type: Boolean,
      default: false,
    },
    showConfirmBar: {
      type: Boolean,
      default: false,
    },
    count: {
      type: Boolean,
      default: true,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    selectionStart: {
      type: Number,
      default: -1,
    },
    selectionEnd: {
      type: Number,
      default: -1,
    },
    height: {
      type: [Number, String],
      default: '',
    },
    textOverflowForbidden: {
      type: Boolean,
      default: true,
    },
    onLinechange: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
    onChange: {
      type: Function,
      default: function () {
        return function () {}
      },
      required: true,
    },
    onFocus: {
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
    onConfirm: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
  },
  computed: {
    rootCls () {
      const { maxLength, value, className } = this
      const _maxLength = parseInt(maxLength.toString())
      return classNames(
        'at-textarea',
        `at-textarea--${ENV}`,
        {
          'at-textarea--error': _maxLength < value.length,
        },
        className
      )
    },
    textareaStyle () {
      const { height } = this
      return height ? `height:${pxTransform(Number(height))}` : ''
    },
    actualMaxLength () {
      const { maxLength,textOverflowForbidden } = this
      const _maxLength = parseInt(maxLength.toString())
      return getMaxLength(_maxLength, textOverflowForbidden)
    },
    placeholderCls () {
      return classNames('placeholder', this.placeholderClass)
    }
  },
  methods: {
    handleInput(event: CommonEvent & ExtendEvent): void {
      this.onChange(event.target.value, event)
    },

    handleFocus(event: CommonEvent): void {
      this.onFocus && this.onFocus(event)
    },

    handleBlur(event: CommonEvent): void {
      this.onBlur && this.onBlur(event)
    },

    handleConfirm(event: CommonEvent): void {
      this.onConfirm && this.onConfirm(event)
    },

    handleLinechange(event: CommonEvent) {
      this.onLinechange && this.onLinechange(event)
    },
  },
})

export default AtTextarea
