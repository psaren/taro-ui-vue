import classNames from 'classnames'
import ModalAction from './action/index'
import ModalContent from './content/index'
import ModalHeader from './header/index'
// import Button from '../button/index'
import { getEnvs } from '../../utils/common'
import mixins from '../mixins'

export default {
  name: 'Modal',
  mixins: [mixins],
  props: {
    title: {
      type: String,
      default: '',
    },
    isOpened: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false,
    },
    onCancel: {
      type: Function,
      default: () => () => {},
    },
    onConfirm: {
      type: Function,
      default: () => () => {},
    },
    onClose: {
      type: Function,
      default: () => () => {},
    },
    content: {
      type: String,
      default: '',
    },
    cancelText: {
      type: String,
      default: '',
    },
    confirmText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      state: {
        ...getEnvs(),
        _isOpened: this.isOpened,
      },
    }
  },
  watch: {
    isOpened(val) {
      if (val !== this.state._isOpened) {
        this.setState({
          _isOpened: val,
        })
      }
    },
  },
  methods: {
    handleClickOverlay() {
      if (this.closeOnClickOverlay) {
        this.setState(
          {
            _isOpened: false,
          },
          this.handleClose
        )
      }
    },

    handleClose(event) {
      if (typeof this.onClose === 'function') {
        this.onClose(event)
      }
    },

    handleCancel(event) {
      if (typeof this.onCancel === 'function') {
        this.onCancel(event)
      }
    },

    handleConfirm(event) {
      if (typeof this.onConfirm === 'function') {
        this.onConfirm(event)
      }
    },

    handleTouchMove(e) {
      e.stopPropagation()
    },
  },
  render() {
    const { _isOpened, isWEB } = this.state
    const { title, content, cancelText, confirmText } = this
    const rootClass = classNames(
      'at-modal',
      {
        'at-modal--active': _isOpened,
      },
      this.className
    )
    if (title || content) {
      const isRenderAction = cancelText || confirmText
      return (
        <view class={rootClass}>
          <view onTap={this.handleClickOverlay} class="at-modal__overlay" />
          <view class="at-modal__container">
            {title && (
              <ModalHeader>
                <view>{title}</view>
              </ModalHeader>
            )}
            {content && (
              <ModalContent>
                <view class="content-simple">
                  {isWEB ? (
                    <view
                      // @ts-ignore
                      dangerouslySetInnerHTML={{
                        __html: content.replace(/\n/g, '<br/>'),
                      }}></view>
                  ) : (
                    <view>{content}</view>
                  )}
                </view>
              </ModalContent>
            )}
            {isRenderAction && (
              <ModalAction isSimple>
                {cancelText && <button onTap={this.handleCancel}>{cancelText}</button>}
                {confirmText && <button onTap={this.handleConfirm}>{confirmText}</button>}
              </ModalAction>
            )}
          </view>
        </view>
      )
    }

    return (
      <view onTouchMove={this.handleTouchMove} class={rootClass}>
        <view class="at-modal__overlay" onTap={this.handleClickOverlay} />
        <view class="at-modal__container">{this.$slots.default}</view>
      </view>
    )
  },
}
