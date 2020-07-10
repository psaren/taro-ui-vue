import Vue from 'vue'
import classNames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'
import { RadioOption } from '../../../types/radio'

const AtRadio = Vue.extend({
  name: 'AtRadio',
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
    options: {
      type: Array,
      default: function () {
        return []
      },
    },
    onClick: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
  },
  methods: {
    handleClick(option: RadioOption<any>, event: CommonEvent) {
      if (option.disabled) return
      this.onClick(option.value, event)
    },
    getOptionCls(disabled) {
      return classNames({
        'at-radio__option': true,
        'at-radio__option--disabled': disabled,
      })
    },
    getIconCls(value) {
      return classNames({
        'at-radio__icon': true,
        'at-radio__icon--checked': this.value === value,
      })
    },
  },
})

export default AtRadio
