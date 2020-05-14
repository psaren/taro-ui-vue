import Vue, { VNode } from 'vue'
import classNames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'

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
      default: () => {},
    },
    className: {
      type: [Object, String],
      default: () => {},
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
      default: () => () => {},
    },
    onChange: {
      type: Function,
      default: () => () => {},
      required: true,
    },
    onFocus: {
      type: Function,
      default: () => () => {},
    },
    onBlur: {
      type: Function,
      default: () => () => {},
    },
    onConfirm: {
      type: Function,
      default: () => () => {},
    },
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
  render(): VNode {
    const {
      customStyle,
      className,
      value,
      cursorSpacing,
      placeholder,
      placeholderStyle,
      placeholderClass,
      maxLength,
      count,
      disabled,
      autoFocus,
      focus,
      showConfirmBar,
      selectionStart,
      selectionEnd,
      fixed,
      textOverflowForbidden,
      height,
    } = this

    const _maxLength = parseInt(maxLength.toString())
    const actualMaxLength = getMaxLength(_maxLength, textOverflowForbidden)
    const textareaStyle = height ? `height:${Taro.pxTransform(Number(height))}` : ''
    const rootCls = classNames(
      'at-textarea',
      `at-textarea--${ENV}`,
      {
        'at-textarea--error': _maxLength < value.length,
      },
      className
    )
    const placeholderCls = classNames('placeholder', placeholderClass)

    return (
      <view class={rootCls} style={customStyle}>
        <textarea
          class="at-textarea__textarea"
          style={textareaStyle}
          placeholderStyle={placeholderStyle}
          placeholderClass={placeholderCls}
          cursorSpacing={cursorSpacing}
          value={value}
          maxlength={actualMaxLength}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          focus={focus}
          showConfirmBar={showConfirmBar}
          selectionStart={selectionStart}
          selectionEnd={selectionEnd}
          fixed={fixed}
          onInput={this.handleInput}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onConfirm={this.handleConfirm}
          onLineChange={this.handleLinechange}
        />
        {count && (
          <view class="at-textarea__counter">
            {value.length}/{_maxLength}
          </view>
        )}
      </view>
    )
  },
})

export default AtTextarea
