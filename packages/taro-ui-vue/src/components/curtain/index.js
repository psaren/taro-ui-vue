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
  computed: {
    curtainClass () {
      const { isOpened, className } = this
      return classNames(
        {
          'at-curtain': true,
          'at-curtain--closed': !isOpened,
        },
        className
      )
    },
    btnCloseClass () {
      const { closeBtnPosition } = this
      return classNames({
        'at-curtain__btn-close': true,
        [`at-curtain__btn-close--${closeBtnPosition}`]: closeBtnPosition,
      })
    },

  },
  methods: {
    handleTab(event) {
      event.stopPropagation()
      this.onClose && this.onClose(event)
    },
    stopPropagation(event) {
      event.stopPropagation()
    },
  },
}
