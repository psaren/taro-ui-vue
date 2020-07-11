import classNames from 'classnames'
import Vue from 'vue'

const AtList = Vue.extend({
  name: 'AtList',
  props: {
    hasBorder: {
      type: Boolean,
      default: true,
    },
    className: {
      type: [Array, String],
      default: '',
    },
  },
  computed: {
    rootClass () {
      return classNames(
        'at-list',
        {
          'at-list--no-border': !this.hasBorder,
        },
        this.className
      )
    }
  },
})

export default AtList
