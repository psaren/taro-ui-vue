import Vue, { VNode } from 'vue'
import classNames from 'classnames'
import {
  AtInputProps,
  BlurEventDetail,
  ConfirmEventDetail,
  FocusEventDetail,
  InputEventDetail,
  KeyboardHeightEventDetail,
} from 'types/input'
import { InputProps } from '@tarojs/components/types/Input'
import { BaseEventOrig, ITouchEvent } from '@tarojs/components/types/common'

type PickAtInputProps = Pick<AtInputProps, 'maxLength' | 'disabled' | 'password'>
type GetInputPropsReturn = PickAtInputProps & Pick<InputProps, 'type'>

function getInputProps(props: AtInputProps): GetInputPropsReturn {
  const actualProps = {
    type: props.type,
    maxLength: props.maxLength,
    disabled: props.disabled,
    password: false,
  }

  switch (actualProps.type) {
    case 'phone':
      actualProps.type = 'number'
      actualProps.maxLength = 11
      break
    case 'password':
      actualProps.type = 'text'
      actualProps.password = true
      break
    default:
      break
  }
  if (!props.disabled && !props.editable) {
    actualProps.disabled = true
  }
  return actualProps
}

const AtInput = Vue.extend({
  name: 'AtInput',
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
      type: [String, Number],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    placeholderStyle: {
      type: String,
      default: '',
    },
    placeholderClass: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    cursorSpacing: {
      type: [String, Number],
      default: 50,
    },
    confirmType: {
      type: String,
      default: '',
    },
    cursor: {
      type: [String, Number],
      default: 0,
    },
    selectionStart: {
      type: [String, Number],
      default: -1,
    },
    selectionEnd: {
      type: [String, Number],
      default: -1,
    },
    adjustPosition: {
      type: Boolean,
      default: true,
    },
    maxLength: {
      type: Number,
      default: 140,
    },
    type: {
      type: String,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: true,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
    clear: {
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
    required: {
      type: Boolean,
      default: false,
    },
    onChange: {
      type: Function,
      default: () => () => {},
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
    onErrorClick: {
      type: Function,
      default: () => () => {},
    },
    onClick: {
      type: Function,
      default: () => () => {},
    },
  },
  methods: {
    handleInput(event: BaseEventOrig<InputEventDetail>): void {
      this.onChange(event.detail.value, event)
    },
    handleFocus(event: BaseEventOrig<FocusEventDetail>): void {
      if (typeof this.onFocus === 'function') {
        this.onFocus(event.detail.value, event)
      }
    },
    handleBlur(event: BaseEventOrig<BlurEventDetail>): void {
      if (typeof this.onBlur === 'function') {
        this.onBlur(event.detail.value, event)
      }
      if (event.type === 'blur' && !this.inputClearing) {
        // fix # 583 AtInput 不触发 onChange 的问题
        this.onChange(event.detail.value)
      }
      // 还原状态
      this.inputClearing = false
    },
    handleConfirm(event: BaseEventOrig<ConfirmEventDetail>): void {
      if (typeof this.onConfirm === 'function') {
        this.onConfirm(event.detail.value, event)
      }
    },
    handleClick(event: ITouchEvent): void {
      if (!this.editable && typeof this.onClick === 'function') {
        this.onClick(event)
      }
    },
    handleClearValue(event: ITouchEvent): void {
      this.inputClearing = true
      this.onChange('', event)
    },
    handleKeyboardHeightChange(event: BaseEventOrig<KeyboardHeightEventDetail>): void {
      if (typeof this.onKeyboardHeightChange === 'function') {
        this.onKeyboardHeightChange(event)
      }
    },
    handleErrorClick(event: ITouchEvent): void {
      if (typeof this.onErrorClick === 'function') {
        this.onErrorClick(event)
      }
    },
  },
  render(): VNode {
    const {
      className,
      customStyle,
      name,
      cursorSpacing,
      confirmType,
      cursor,
      selectionStart,
      selectionEnd,
      adjustPosition,
      border,
      title,
      error,
      clear,
      placeholder,
      placeholderStyle,
      placeholderClass,
      autoFocus,
      focus,
      value,
      required,
    } = this
    const { type, maxLength, disabled, password } = getInputProps(this)

    const rootCls = classNames(
      'at-input',
      {
        'at-input--without-border': !border,
      },
      className
    )
    const containerCls = classNames('at-input__container', {
      'at-input--error': error,
      'at-input--disabled': disabled,
    })
    const overlayCls = classNames('at-input__overlay', {
      'at-input__overlay--hidden': !disabled,
    })
    const placeholderCls = classNames('placeholder', placeholderClass)

    return (
      <view class={rootCls} style={customStyle}>
        <view class={containerCls}>
          <view class={overlayCls} onTap={this.handleClick}></view>
          {title && (
            <view class={`at-input__title ${required && 'at-input__title--required'}`} for={name}>
              {title}
            </view>
          )}
          <input
            class="at-input__input"
            id={name}
            name={name}
            type={type}
            password={password}
            placeholderStyle={placeholderStyle}
            placeholderClass={placeholderCls}
            placeholder={placeholder}
            cursorSpacing={cursorSpacing}
            maxLength={maxLength}
            autoFocus={autoFocus}
            focus={focus}
            value={value}
            confirmType={confirmType}
            cursor={cursor}
            selectionStart={selectionStart}
            selectionEnd={selectionEnd}
            adjustPosition={adjustPosition}
            onInput={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onConfirm={this.handleConfirm}
            onKeyboardHeightChange={this.handleKeyboardHeightChange}
          />
          {clear && value && (
            <view class="at-input__icon" onTouchEnd={this.handleClearValue}>
              <view class="at-icon at-icon-close-circle at-input__icon-close"></view>
            </view>
          )}
          {error && (
            <view class="at-input__icon" onTouchStart={this.handleErrorClick}>
              <view class="at-icon at-icon-alert-circle at-input__icon-alert"></view>
            </view>
          )}
          <view class="at-input__children">{this.$slots.default}</view>
        </view>
      </view>
    )
  },
})

export default AtInput
