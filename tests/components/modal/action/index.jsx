import classNames from 'classnames'

export default {
  name: 'AtModalAction',
  props: {
    isSimple: {
      type: Boolean,
      default: false,
    },
    className: {
      type: [Object, String],
      default: () => '',
    },
  },
  render() {
    const rootClass = classNames(
      'at-modal__footer',
      {
        'at-modal__footer--simple': this.isSimple,
      },
      this.className
    )

    return (
      <view class={rootClass}>
        <view class="at-modal__action">{this.$slots.default}</view>
      </view>
    )
  },
}
