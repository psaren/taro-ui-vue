import { View } from '@tarojs/components'
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
      state: {
        wrapperHeight: 0,
      },
    }
  },
  watch: {
    open(val, oldVal) {
      this.startOpen = !!val && !!this.isAnimation
      this.toggleWithAnimation()
    },
  },
  methods: {
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
      delayQuerySelector(this, '.at-accordion__body', 0).then((rect) => {
        const height = parseInt(rect[0].height.toString())
        const startHeight = open ? 0 : height
        const endHeight = open ? height : 0
        this.startOpen = false
        this.setState({
          wrapperHeight: startHeight,
        })
        setTimeout(() => {
          this.setState({
            wrapperHeight: endHeight,
          })
        }, 100)
        setTimeout(() => {
          this.isCompleted = true
        }, 700)
      })
    },
  },
  render() {
    const { customStyle, className, title, icon, hasBorder, open, note } = this
    const { wrapperHeight } = this.state

    const rootCls = classNames('at-accordion', className)
    const prefixClass = (icon && icon.prefixClass) || 'at-icon'
    const iconCls = classNames({
      [prefixClass]: true,
      [`${prefixClass}-${icon && icon.value}`]: icon && icon.value,
      'at-accordion__icon': true,
    })
    const headerCls = classNames('at-accordion__header', {
      'at-accordion__header--noborder': !hasBorder,
    })
    const arrowCls = classNames('at-accordion__arrow', {
      'at-accordion__arrow--folded': !!open,
    })
    const contentCls = classNames('at-accordion__content', {
      'at-accordion__content--inactive': (!open && this.isCompleted) || this.startOpen,
    })
    const iconStyle = {
      color: (icon && icon.color) || '',
      fontSize: (icon && `${icon.size}px`) || '',
    }
    const contentStyle = { height: `${wrapperHeight}px` }

    if (this.isCompleted) {
      contentStyle.height = ''
    }

    return (
      <View class={rootCls} style={customStyle}>
        <View class={headerCls} onTap={this.handleClick}>
          {icon && icon.value && <View class={iconCls} style={iconStyle}></View>}
          <View class="at-accordion__info">
            <View class="at-accordion__info__title">{title}</View>
            <View class="at-accordion__info__note">{note}</View>
          </View>
          <View class={arrowCls}>
            <View class="at-icon at-icon-chevron-down"></View>
          </View>
        </View>
        <View style={contentStyle} class={contentCls}>
          <View class="at-accordion__body">{this.$slots.default}</View>
        </View>
      </View>
    )
  },
}
