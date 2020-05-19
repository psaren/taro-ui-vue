import Vue, { VNode } from 'vue'
import { CommonEvent } from '@tarojs/components/types/common'
import classNames from 'classnames'
import { CSSProperties } from '../../../global'
import mixins from '../mixins'

type ExtendEvent = {
  target: {
    value: string,
  },
}

const AtSearchBar = Vue.extend({
  name: 'AtSearchBar',
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
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '搜索',
    },
    actionName: {
      type: String,
      default: '搜索',
    },
    maxLength: {
      type: Number,
      default: 140,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    focus: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showActionButton: {
      type: Boolean,
      default: false,
    },
    inputType: {
      type: String,
      default: 'text',
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
    onActionClick: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
  },
  data() {
    return {
      state: {
        isFocus: !!this.focus,
      },
    }
  },
  methods: {
    handleFocus(event: CommonEvent): void {
      this.setState({
        isFocus: true,
      })
      this.onFocus && this.onFocus(event)
    },
    handleBlur(event: CommonEvent): void {
      this.setState({
        isFocus: false,
      })
      this.onBlur && this.onBlur(event)
    },
    handleChange(e: CommonEvent & ExtendEvent): void {
      this.onChange(e.target.value, e)
    },
    handleClear(event: CommonEvent): void {
      if (this.onClear) {
        this.onClear(event)
      } else {
        this.onChange('', event)
      }
    },
    handleConfirm(event: CommonEvent): void {
      this.onConfirm && this.onConfirm(event)
    },
    handleActionClick(event: CommonEvent): void {
      this.onActionClick && this.onActionClick(event)
    },
  },
  render(): VNode {
    const {
      value,
      placeholder,
      maxLength,
      fixed,
      disabled,
      showActionButton,
      actionName,
      inputType,
      className,
      customStyle,
    } = this
    const { isFocus } = this.state
    const fontSize = 14
    const rootCls = classNames(
      'at-search-bar',
      {
        'at-search-bar--fixed': fixed,
      },
      className
    )
    const placeholderWrapStyle: CSSProperties = {}
    const actionStyle: CSSProperties = {}
    if (isFocus || (!isFocus && value)) {
      actionStyle.opacity = 1
      actionStyle.marginRight = `0`
      placeholderWrapStyle.flexGrow = 0
    } else if (!isFocus && !value) {
      placeholderWrapStyle.flexGrow = 1
      actionStyle.opacity = 0
      actionStyle.marginRight = `-${(actionName.length + 1) * fontSize + fontSize / 2 + 10}px`
    }
    if (showActionButton) {
      actionStyle.opacity = 1
      actionStyle.marginRight = `0`
    }

    const clearIconStyle: CSSProperties = { display: 'flex' }
    const placeholderStyle: CSSProperties = { visibility: 'hidden' }
    if (!value.length) {
      clearIconStyle.display = 'none'
      placeholderStyle.visibility = 'visible'
    }

    return (
      <view class={rootCls} style={customStyle}>
        <view class="at-search-bar__input-cnt">
          <view class="at-search-bar__placeholder-wrap" style={placeholderWrapStyle}>
            <view class="at-icon at-icon-search"></view>
            <view class="at-search-bar__placeholder" style={placeholderStyle}>
              {isFocus ? '' : placeholder}
            </view>
          </view>
          <input
            class="at-search-bar__input"
            type={inputType}
            confirmType="search"
            value={value}
            focus={isFocus}
            disabled={disabled}
            maxLength={maxLength}
            onInput={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onConfirm={this.handleConfirm}
          />
          <view class="at-search-bar__clear" style={clearIconStyle} onTouchStart={this.handleClear}>
            <view class="at-icon at-icon-close-circle"></view>
          </view>
        </view>
        <view class="at-search-bar__action" style={actionStyle} onTap={this.handleActionClick}>
          {actionName}
        </view>
      </view>
    )
  },
})

export default AtSearchBar
