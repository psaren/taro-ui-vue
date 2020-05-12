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
    console.log('this.$slots.default', this.$slots.default)
    const rootClass = classNames('at-action-sheet__body', this.className)
    return <view class={rootClass}>{this.$slots.default}</view>
  },
}
