import classNames from 'classnames'
import mixins from '../mixins'
import { handleTouchScroll } from '../../utils/common'

export default {
  name: 'FloatLayout',
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
  render() {
    const { _isOpened } = this.state
    const {
      title,

      scrollY,
      scrollX,
      scrollTop,
      scrollLeft,
      upperThreshold,
      lowerThreshold,
      scrollWithAnimation,
    } = this

    const rootClass = classNames(
      'at-float-layout',
      {
        'at-float-layout--active': _isOpened,
      },
      this.className
    )

    return (
      <view class={rootClass} onTouchMove={this.handleTouchMove}>
        <view onTap={this.close} class="at-float-layout__overlay" />
        <view class="at-float-layout__container layout">
          {title ? (
            <view class="layout-header">
              <view class="layout-header__title">{title}</view>
              <view class="layout-header__btn-close" onTap={this.close} />
            </view>
          ) : null}
          <view class="layout-body">
            <scroll-view
              scrollY={scrollY}
              scrollX={scrollX}
              scrollTop={scrollTop}
              scrollLeft={scrollLeft}
              upperThreshold={upperThreshold}
              lowerThreshold={lowerThreshold}
              scrollWithAnimation={scrollWithAnimation}
              // @ts-ignore // TODO: Fix typings
              onScroll={this.onScroll}
              // @ts-ignore // TODO: Fix typings
              onScrollToLower={this.onScrollToLower}
              // @ts-ignore // TODO: Fix typings
              onScrollToUpper={this.onScrollToUpper}
              class="layout-body__content">
              {this.$slots.default}
            </scroll-view>
          </view>
        </view>
      </view>
    )
  },
}
