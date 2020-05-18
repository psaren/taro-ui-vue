import classNames from 'classnames'
import ActionSheetBody from './body/index'
import ActionSheetFooter from './footer/index'
import ActionSheetHeader from './header/index'

export default {
  name: 'AtActionSheet',
  props: {
    title: {
      type: String,
      default: '',
    },
    cancelText: {
      type: String,
      default: '',
    },
    isOpened: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      default: () => () => {},
    },
    onCancel: {
      type: Function,
      default: () => () => {},
    },
  },
  data() {
    return {
      show: this.isOpened,
    }
  },
  watch: {
    isOpened(val) {
      this.show = val
      !val && this.handleClose()
    },
  },
  methods: {
    handleClose() {
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    handleCancel() {
      if (typeof this.onCancel === 'function') {
        return this.onCancel()
      }
      this.close()
    },
    close() {
      this.show = false
    },
    handleTouchMove(e) {
      e.stopPropagation()
      e.preventDefault()
    },
  },
  render() {
    const { title, cancelText, className } = this
    const { show } = this

    const rootClass = classNames(
      'at-action-sheet',
      {
        'at-action-sheet--active': show,
      },
      className
    )

    return (
      <view class={rootClass} onTouchMove={this.handleTouchMove}>
        <view onTap={this.close} class="at-action-sheet__overlay" />
        <view class="at-action-sheet__container">
          {title && <ActionSheetHeader>{title}</ActionSheetHeader>}
          <ActionSheetBody>{this.$slots.default}</ActionSheetBody>
          {cancelText && (
            <ActionSheetFooter onTap={this.handleCancel}>{cancelText}</ActionSheetFooter>
          )}
        </view>
      </view>
    )
  },
}
