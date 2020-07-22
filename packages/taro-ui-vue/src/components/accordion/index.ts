import classNames from 'classnames'
import mixins from '../mixins'
import { delayQuerySelector } from '../../utils/common'

export default {
  name: 'AtAccordion',
  mixins: [mixins],
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    customStyle: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    note: {
      type: String,
      default: '',
    },
    icon: {
      type: Object,
      default: () => ({ value: '' }),
    },
    hasBorder: {
      type: Boolean,
      default: true,
    },
    isAnimation: {
      type: Boolean,
      default: true,
    },
    onClick: {
      type: Function,
      default: function () {
        return () => {}
      },
    },
  },
  data() {
    return {
      isCompleted: true,
      startOpen: false,
      wrapperHeight: 0,
    }
  },
  watch: {
    open(val) {
      this.startOpen = !!val && !!this.isAnimation
      this.toggleWithAnimation()
    },
  },
  methods: {
    classNames,
    /**
     *
     * @param {event} event
     */
    handleClick(event) {
      const { open } = this
      if (!this.isCompleted) return

      this.onClick && this.onClick(!open, event)
    },
    toggleWithAnimation() {
      const { open, isAnimation } = this
      if (!this.isCompleted || !isAnimation) return
      this.isCompleted = false
      delayQuerySelector(this, '.at-accordion__body', 0).then((rect: any) => {
        const height = parseInt(rect[0].height.toString())
        const startHeight = open ? 0 : height
        const endHeight = open ? height : 0
        this.startOpen = false
        this.wrapperHeight = startHeight
        setTimeout(() => {
          this.wrapperHeight = endHeight
        }, 100)
        setTimeout(() => {
          this.isCompleted = true
        }, 700)
      })
    },
  },
  computed: {
    contentStyle() {
      const res = { height: `${this.wrapperHeight}px` }
      if (this.isCompleted) {
        res.height = ''
      }
      return res
    },
    iconCls() {
      const { icon } = this
      const prefixClass = (icon && icon.prefixClass) || 'at-icon'
      const iconCls = classNames({
        [prefixClass]: true,
        [`${prefixClass}-${icon && icon.value}`]: icon && icon.value,
        'at-accordion__icon': true,
      })
      return iconCls
    },
  },
}
