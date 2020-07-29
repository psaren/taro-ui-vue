import classNames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'

const AtSwitch = {
  name: 'AtSwitch',
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
    title: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#6190e8',
    },
    border: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    onChange: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
  },
  computed: {
    rootCls () {
      const { border, className } = this
      return classNames(
        'at-switch',
        {
          'at-switch--without-border': !border,
        },
        className
      )
    },
    containerCls () {
      const { disabled } = this
      return classNames('at-switch__container', {
        'at-switch--disabled': disabled,
      })
    }
  },
  methods: {
    handleChange(event: CommonEvent): void {
      const { value, checked } = event.detail
      const state = typeof value === 'undefined' ? checked : value
      this.onChange && this.onChange(state)
    },
  },
}

export default AtSwitch
