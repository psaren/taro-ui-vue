import classNames from 'classnames'

export default {
  name: 'ModalHeader',
  props: {
    className: {
      type: [Object, String],
      default: () => '',
    },
  },
  render() {
    const rootClass = classNames('at-modal__header', this.className)
    return <view class={rootClass}>{this.$slots.default}</view>
  },
}
