import classNames from 'classnames'
import ActionSheetBody from './components/body.vue'
import ActionSheetFooter from './components/footer.vue'
import ActionSheetHeader from './components/header.vue'

export default {
  name: 'AtActionSheet',
  components: {
    ActionSheetBody,
    ActionSheetFooter,
    ActionSheetHeader,
  },
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
    },
    className: {
      type: [Array, String],
      default: () => '',
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
      this.handleClose()
    },
    handleTouchMove(e) {
      e.stopPropagation()
      e.preventDefault()
    },
  },
  computed: {
    rootClass() {
      const { show, className } = this
      return classNames(
        'at-action-sheet',
        {
          'at-action-sheet--active': show,
        },
        className
      )
    },
  },
}
