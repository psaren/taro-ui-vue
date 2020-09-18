import classNames from 'classnames'
import mixins from '../mixins'
import { handleTouchScroll } from '../../utils/common'

export default {
  name: 'AtFloatLayout',
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
    scrollY: {
      type: Boolean,
      default: true,
    },
    scrollX: {
      type: Boolean,
      default: false,
    },
    scrollWithAnimation: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      default: () => () => {},
    },
    onScroll: {
      type: Function,
      default: () => () => {},
    },
    onScrollToLower: {
      type: Function,
      default: () => () => {},
    },
    onScrollToUpper: {
      type: Function,
      default: () => () => {},
    },
    scrollTop: {
      type: Number,
      default: 0,
    },
    scrollLeft: {
      type: Number,
      default: 0,
    },
    upperThreshold: {
      type: Number,
      default: 0,
    },
    lowerThreshold: {
      type: Number,
      default: 0,
    },
    className: {
      type: [String, Array],
      default: '',
    },
  },
  computed: {
    rootClass() {
      const { _isOpened } = this.state
      return classNames(
        'at-float-layout',
        {
          'at-float-layout--active': _isOpened,
        },
        this.className
      )
    },
  },
  data() {
    const { isOpened } = this
    return {
      state: {
        _isOpened: isOpened,
      },
    }
  },
  watch: {
    isOpened(val, oldVal) {
      if (val !== oldVal) {
        handleTouchScroll(val)
      }
      if (val !== this.state._isOpened) {
        this.setState({
          _isOpened: val,
        })
      }
    },
  },
  methods: {
    handleClose() {
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    close() {
      this.setState(
        {
          _isOpened: false,
        },
        this.handleClose
      )
    },
    /**
     *
     * @param {event} e
     */
    handleTouchMove(e) {
      e.stopPropagation()
    },
  },
}
