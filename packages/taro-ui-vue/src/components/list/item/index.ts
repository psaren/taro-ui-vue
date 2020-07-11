import classNames from 'classnames'
import { mergeStyle } from '../../../utils/common'
import Vue from 'vue'

const AtListItem = Vue.extend({
  name: 'AtListItem',
  props: {
    className: {
      type: [Array, String],
      default: '',
    },
    note: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    thumb: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      default: function () {
        return () => {}
      },
    },
    isSwitch: {
      type: Boolean,
      default: false,
    },
    hasBorder: {
      type: Boolean,
      default: true,
    },
    switchColor: {
      type: String,
      default: '#6190E8',
    },
    switchIsCheck: {
      type: Boolean,
      default: false,
    },
    extraText: {
      type: String,
      default: '',
    },
    extraThumb: {
      type: String,
      default: '',
    },
    iconInfo: {
      type: Object,
      default: function () {
        return { value: '' }
      },
    },
    onSwitchChange: {
      type: Function,
      default: function () {
        return () => {}
      },
    },
    arrow: {
      type: String,
      default: '',
      validator: (val) => ['up', 'down', 'right', ''].includes(val),
    },
  },
  computed: {
    rootClass () {
      const {
        note,
        thumb,
        disabled,
        hasBorder,
        className
      } = this
      return classNames(
        'at-list__item',
        {
          'at-list__item--thumb': thumb,
          'at-list__item--multiple': note,
          'at-list__item--disabled': disabled,
          'at-list__item--no-border': !hasBorder,
        },
        className
      )
    },
    iconClass () {
      const { iconInfo } = this
      return classNames(
        iconInfo.prefixClass || 'at-icon',
        {
          [`${iconInfo.prefixClass || 'at-icon'}-${iconInfo.value}`]: iconInfo.value,
        },
        iconInfo.className
      )
    }
  },
  methods: {
    /**
     *
     * @param {event} event
     */
    handleClick(event) {
      if (typeof this.onClick === 'function' && !this.disabled) {
        this.onClick(event)
      }
    },
    /**
     *
     * @param {event} event
     */
    handleSwitchClick() {
      // event.stopPropagation()
    },
    /**
     *
     * @param {event} event
     */
    handleSwitchChange(event) {
      if (typeof this.onSwitchChange === 'function' && !this.disabled) {
        this.onSwitchChange(event)
      }
    },
    getIconStyle () {
      const { iconInfo } = this
      return mergeStyle(
        {
          color: iconInfo.color || '',
          fontSize: `${iconInfo.size || 24}px`,
        },
        iconInfo.customStyle
      )
    }
  },
})

export default AtListItem
