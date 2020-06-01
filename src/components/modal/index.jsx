import { View, Button } from '@tarojs/components'
import classNames from 'classnames'
import ModalAction from './action/index'
import ModalContent from './content/index'
import ModalHeader from './header/index'
// import Button from '../button/index'
import { getEnvs } from '../../utils/common'
import mixins from '../mixins'

export default {
  name: 'AtModal',
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
        <View class={rootClass}>
          <View onTap={this.handleClickOverlay} class="at-modal__overlay" />
          <View class="at-modal__container">
            {title && (
              <ModalHeader>
                <View>{title}</View>
              </ModalHeader>
            )}
            {content && (
              <ModalContent>
                <View class="content-simple">
                  {isWEB ? (
                    <View
                      // @ts-ignore
                      dangerouslySetInnerHTML={{
                        __html: content.replace(/\n/g, '<br/>'),
                      }}></View>
                  ) : (
                    <View>{content}</View>
                  )}
                </View>
              </ModalContent>
            )}
            {isRenderAction && (
              <ModalAction isSimple>
                {cancelText && <Button onTap={this.handleCancel}>{cancelText}</Button>}
                {confirmText && <Button onTap={this.handleConfirm}>{confirmText}</Button>}
              </ModalAction>
            )}
          </View>
        </View>
      )
    }

    return (
      <View onTouchMove={this.handleTouchMove} class={rootClass}>
        <View class="at-modal__overlay" onTap={this.handleClickOverlay} />
        <View class="at-modal__container">{this.$slots.default}</View>
      </View>
    )
  },
}
