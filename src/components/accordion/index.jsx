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
      default: () => () => {},
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
      if (val !== oldVal) {
        this.startOpen = !!val && !!this.isAnimation
        this.toggleWithAnimation()
      }
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
        const startHeight = open ? height : 0
        const endHeight = open ? 0 : height
        this.startOpen = false
        this.setState(
          {
            wrapperHeight: startHeight,
          },
          () => {
            setTimeout(() => {
              this.setState(
                {
                  wrapperHeight: endHeight,
                },
                () => {
                  setTimeout(() => {
                    this.isCompleted = true
                    this.setState({})
                  }, 700)
                }
              )
            }, 100)
          }
        )
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
      <view class={rootCls} style={customStyle}>
        <view class={headerCls} onTap={this.handleClick}>
          {icon && icon.value && <view class={iconCls} style={iconStyle}></view>}
          <view class="at-accordion__info">
            <view class="at-accordion__info__title">{title}</view>
            <view class="at-accordion__info__note">{note}</view>
          </view>
          <view class={arrowCls}>
            <view class="at-icon at-icon-chevron-down"></view>
          </view>
        </view>
        <view style={contentStyle} class={contentCls}>
          <view class="at-accordion__body">{this.$slots.default}</view>
        </view>
      </view>
    )
  },
}
