import classNames from 'classnames'
import {
  AtInputProps,
  BlurEventDetail,
  ConfirmEventDetail,
  FocusEventDetail,
  InputEventDetail,
  KeyboardHeightEventDetail,
} from '../../../types/input'
// import { InputProps } from '@tarojs/components/types/Input'
import { BaseEventOrig, ITouchEvent } from '@tarojs/components/types/common'

// type PickAtInputProps = Pick<AtInputProps, 'maxLength' | 'disabled' | 'password'>
// type GetInputPropsReturn = PickAtInputProps & Pick<inputProps, 'type'>

function getInputProps(props: AtInputProps) {
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

const AtInput = {
  name: 'AtInput',
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
      default: function () {
        return function () {}
      },
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
    onErrorClick: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
    onClick: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
  },
  computed: {
    inputProps() {
      return getInputProps(this)
    },
    rootCls() {
      const { border, className } = this
      return classNames(
        'at-input',
        {
          'at-input--without-border': !border,
        },
        className
      )
    },
    containerCls() {
      const { error, inputProps } = this
      return classNames('at-input__container', {
        'at-input--error': error,
        'at-input--disabled': inputProps.disabled,
      })
    },
    overlayCls() {
      const { inputProps } = this
      return classNames('at-input__overlay', {
        'at-input__overlay--hidden': !inputProps.disabled,
      })
    },
    placeholderCls() {
      return classNames('placeholder', this.placeholderClass)
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
    handleKeyboardHeightChange(
      event: BaseEventOrig<KeyboardHeightEventDetail>
    ): void {
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
}

export default AtInput
