import Vue from 'vue'
import classnames from 'classnames'
import * as constant from '../../common/constant'

const MAP: { [key: number]: string } = {
  [constant.TYPE_PRE_MONTH]: 'pre',
  [constant.TYPE_NOW_MONTH]: 'now',
  [constant.TYPE_NEXT_MONTH]: 'next',
}

const AtCalendarList = Vue.extend({
  name: 'AtCalendarList',
  props: {
    list: {
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
    onLongClick: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
  },
  data() {
    return {
      options: { addGlobalClass: true },
    }
  },
  methods: {
    handleClick(item) {
      if (typeof this.onClick === 'function') {
        this.onClick(item)
      }
    },
    handleLongClick(item) {
      if (typeof this.onLongClick === 'function') {
        this.onLongClick(item)
      }
    },
    getCls(item) {
      return classnames('flex__item', `flex__item--${MAP[item.type]}`, {
        'flex__item--today': item.isToday,
        'flex__item--active': item.isActive,
        'flex__item--selected': item.isSelected,
        'flex__item--selected-head': item.isSelectedHead,
        'flex__item--selected-tail': item.isSelectedTail,
        'flex__item--blur':
          item.isDisabled ||
          item.type === constant.TYPE_PRE_MONTH ||
          item.type === constant.TYPE_NEXT_MONTH,
      })
    }
  },
})

export default AtCalendarList
