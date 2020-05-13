import classNames from 'classnames'

export default {
  name: 'List',
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
  render() {
    const rootClass = classNames(
      'at-list',
      {
        'at-list--no-border': !this.hasBorder,
      },
      this.className
    )

    return <view class={rootClass}>{this.$slots.default}</view>
  },
}
