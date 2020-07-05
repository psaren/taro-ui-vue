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
  render(h) {
    const rootClass = classNames(
      'at-list',
      {
        'at-list--no-border': !this.hasBorder,
      },
      this.className
    )

    return <view class={rootClass}>{this.$slots.default}</view>
  },
})

export default AtList
