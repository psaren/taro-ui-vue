import classNames from 'classnames'

export default {
  name: 'AtCurtain',
  props: {
    customStyle: {
      type: [Object, String],
      default: () => {},
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
    isOpened: {
      type: Boolean,
      default: false,
    },
    closeBtnPosition: {
      type: String,
      default: 'bottom',
    },
    onClose: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    handleTab(event) {
      event.stopPropagation()
      console.log(this.onClose)
      this.onClose && this.onClose(event)
    },
    stopPropagation(event) {
      event.stopPropagation()
    },
  },
  render() {
    const { className, customStyle, isOpened, closeBtnPosition } = this

    const curtainClass = classNames(
      {
        'at-curtain': true,
        'at-curtain--closed': !isOpened,
      },
      className
    )

    const btnCloseClass = classNames({
      'at-curtain__btn-close': true,
      [`at-curtain__btn-close--${closeBtnPosition}`]: closeBtnPosition,
    })

    return (
      <view class={curtainClass} style={customStyle} onTap={this.stopPropagation}>
        <view class="at-curtain__container">
          <view class="at-curtain__body">
            {this.$slots.default}
            <view class={btnCloseClass} onTap={this.handleTab}></view>
          </view>
        </view>
      </view>
    )
  },
}
