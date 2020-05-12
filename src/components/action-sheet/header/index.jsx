import classNames from 'classnames'

export default {
  name: 'ActionSheetHeader',
  props: {
    className: {
      type: [Array, String],
      default: () => '',
    },
  },
  render() {
    const rootClass = classNames('at-action-sheet__header', this.className)

    return <view className={rootClass}>{this.$slots.default}</view>
  },
}
