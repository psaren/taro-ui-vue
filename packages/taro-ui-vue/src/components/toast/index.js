import classNames from 'classnames'
import statusImg from './img.json'
import mixins from '../mixins'

export default {
  name: 'AtToast',
  mixins: [mixins],
  props: {
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    hasMask: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: '',
    },
    isOpened: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    status: {
      type: String,
      default: '',
      validator: (val) => ['', 'error', 'loading', 'success'].includes(val),
    },
    onClick: {
      type: Function,
      default: null,
    },
    onClose: {
      type: Function,
      default: () => () => {},
    },
    className: {
      type: [Object, String],
      default: () => '',
    },
  },
  data() {
    return {
      state: {
        _timer: null,
        _isOpened: this.isOpened,
      },
    }
  },
  watch: {
    isOpened: {
      immediate: true,
      handler() {
        this.handleChange()
      },
    },
    duration() {
      this.handleChange()
    },
  },
  computed: {
    rootCls() {
      return classNames('at-toast', this.className)
    },
    bodyClass() {
      const { icon, status, image, realImg } = this
      return classNames('toast-body', {
        'at-toast__body--custom-image': image,
        'toast-body--text': !realImg && !icon,
        [`at-toast__body--${status}`]: !!status,
      })
    },
    realImg() {
      const { status, image } = this
      return image || statusImg[status] || null
    },
    iconClass() {
      const { icon } = this
      return classNames('at-icon', {
        [`at-icon-${icon}`]: icon,
      })
    }
  },
  methods: {
    clearTimmer() {
      if (this._timer) {
        clearTimeout(this._timer)
        this._timer = null
      }
    },

    makeTimer(duration) {
      if (duration === 0) {
        return
      }
      this._timer = setTimeout(() => {
        this.close()
      }, +duration)
    },

    close() {
      const { _isOpened } = this.state
      if (_isOpened) {
        this.setState(
          {
            _isOpened: false,
          },
          this.handleClose
        )
        this.clearTimmer()
      }
    },

    handleClose(event) {
      if (typeof this.onClose === 'function') {
        this.onClose(event)
      }
    },

    handleClick(event) {
      const { onClick, status } = this
      if (status === 'loading') {
        return
      }
      if (typeof onClick == 'function') {
        return onClick(event)
      }
      this.close()
    },

    handleChange() {
      const { isOpened, duration } = this
      if (!isOpened) {
        this.close()
        return
      }

      if (!this.state._isOpened) {
        this.setState({
          _isOpened: true,
        })
      } else {
        this.clearTimmer()
      }
      this.makeTimer(duration || 0)
    },
  },
}
