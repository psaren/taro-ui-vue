import classNames from 'classnames'

export default {
  name: 'ActionSheetBody',
  props: {
    className: {
      type: [Array, String],
      default: () => '',
    },
  },
  render() {
    const rootClass = classNames('at-action-sheet__body', this.className)
    return <view className={rootClass}>{this.$slots.default}</view>
  },
}
