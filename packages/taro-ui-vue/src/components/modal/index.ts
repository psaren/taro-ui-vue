import classNames from 'classnames'
import ModalAction from './action/index.vue'
import ModalContent from './content/index.vue'
import ModalHeader from './header/index.vue'
import { getEnvs } from '../../utils/common'
import mixins from '../mixins'
import Vue from 'vue'

export default Vue.extend({
  name: 'AtModal',
  mixins: [mixins],
  components: {
    ModalAction,
    ModalContent,
    ModalHeader,
  },
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
      default: function(){
        return () => {}
      },
    },
    onConfirm: {
      type: Function,
      default: function(){
        return () => {}
      },
    },
    onClose: {
      type: Function,
      default: function(){
        return () => {}
      },
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
      ...getEnvs(),
      state: {
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
  computed: {
    rootClass() {
      return classNames(
        'at-modal',
        {
          'at-modal--active': this.state._isOpened,
        },
        this.className
      )
    }
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
})
