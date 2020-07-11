import Vue from 'vue'
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
  computed: {
    rootCls () {
      const { fixed, className } = this
      return classNames(
        'at-search-bar',
        {
          'at-search-bar--fixed': fixed,
        },
        className
      )
    },
    placeholderWrapStyle(): CSSProperties {
      const { value } = this
      const { isFocus } = this.state
      const wrapStyle: CSSProperties = {}
      if (isFocus || (!isFocus && value)) {
        wrapStyle.flexGrow = 0
      } else if (!isFocus && !value) {
        wrapStyle.flexGrow = 1
      }
      return wrapStyle
    }, 
    actionStyle (): CSSProperties {
      const { value, actionName, showActionButton } = this
      const { isFocus } = this.state
      const fontSize = 14
      const actionStyle: CSSProperties = {}
      if (isFocus || (!isFocus && value)) {
        actionStyle.opacity = 1
        actionStyle.marginRight = `0`
      } else if (!isFocus && !value) {
        actionStyle.opacity = 0
        actionStyle.marginRight = `-${(actionName.length + 1) * fontSize + fontSize / 2 + 10}px`
      }
      if (showActionButton) {
        actionStyle.opacity = 1
        actionStyle.marginRight = `0`
      }
      return actionStyle
    }, 
    clearIconStyle(): CSSProperties {
      const { value } = this
      const clearIconStyle: CSSProperties = { display: 'flex' }
      if (!value.length) {
        clearIconStyle.display = 'none'
      }
      return clearIconStyle
    },
    placeholderStyle(): CSSProperties {
      const { value } = this
      const placeholderStyle: CSSProperties = { visibility: 'hidden' }
      if (!value.length) {
        placeholderStyle.visibility = 'visible'
      }
      return placeholderStyle
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
})

export default AtSearchBar
