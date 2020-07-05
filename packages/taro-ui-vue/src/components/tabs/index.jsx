import Taro from '@tarojs/taro'
import classNames from 'classnames'
import mixins from '../mixins'
import { isTest, uuid, mergeStyle } from '../../utils/common'

const ENV = Taro.getEnv()
const MIN_DISTANCE = 100
const MAX_INTERVAL = 10

export default {
  name: 'AtTabs',
  mixins: [mixins],
  props: {
    customStyle: {
      type: [Object, String],
      default: () => '',
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
    tabDirection: {
      type: String,
      default: 'horizontal',
      validator: (val) => ['horizontal', 'vertical'].includes(val),
    },
    height: {
      type: String,
      default: '',
    },
    current: {
      type: Number,
      default: 0,
    },
    swipeable: {
      type: Boolean,
      default: true,
    },
    scroll: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: true,
    },
    tabList: {
      type: Array,
      default: () => [],
    },
    onClick: {
      type: Function,
      default: () => () => {},
    },
  },
  data() {
    return {
      tabId: isTest() ? 'tabs-AOTU2018' : uuid(),
      // 触摸时的原点
      touchDot: 0,
      // 定时器
      timer: null,
      // 滑动时间间隔
      interval: 0,
      // 是否已经在滑动
      isMoving: false,
      state: {
        _scrollLeft: 0,
        _scrollTop: 0,
        _scrollIntoView: '',
      },
    }
  },
  watch: {
    scroll() {
      this.getTabHeaderRef()
    },
    current(val) {
      this.updateState(val)
    },
  },
  mounted() {
    this.getTabHeaderRef()
    this.updateState(this.current)
  },
  beforeDestroy() {
    this.tabHeaderRef = null
  },
  methods: {
    /**
     *
     * @param {number} idx
     */
    updateState(idx) {
      if (this.scroll) {
        // 标签栏滚动
        switch (ENV) {
          case Taro.ENV_TYPE.WEAPP:
          case Taro.ENV_TYPE.ALIPAY:
          case Taro.ENV_TYPE.SWAN: {
            const index = Math.max(idx - 1, 0)
            this.setState({
              _scrollIntoView: `tab${index}`,
            })
            break
          }
          case Taro.ENV_TYPE.WEB: {
            const index = Math.max(idx - 1, 0)
            const prevTabItem = this.tabHeaderRef.childNodes[index]
            prevTabItem &&
              this.setState({
                _scrollTop: prevTabItem.offsetTop,
                _scrollLeft: prevTabItem.offsetLeft,
              })
            break
          }
          default: {
            console.warn('AtTab 组件在该环境还未适配')
            break
          }
        }
      }
    },
    /**
     *
     * @param {number} index
     * @param {event} event
     */
    handleClick(index, event) {
      this.onClick(index, event)
    },
    /**
     *
     * @param {event} e
     */
    handleTouchStart(e) {
      const { swipeable, tabDirection } = this
      if (!swipeable || tabDirection === 'vertical') return
      // 获取触摸时的原点
      this.touchDot = e.touches[0].pageX
      // 使用js计时器记录时间
      this.timer = setInterval(() => {
        this.interval++
      }, 100)
    },
    /**
     *
     * @param {event} e
     */
    handleTouchMove(e) {
      const { swipeable, tabDirection, current, tabList } = this
      if (!swipeable || tabDirection === 'vertical') return

      const touchMove = e.touches[0].pageX
      const moveDistance = touchMove - this.touchDot
      const maxIndex = tabList.length

      if (!this.isMoving && this.interval < MAX_INTERVAL && this.touchDot > 20) {
        // 向左滑动
        if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
          this.isMoving = true
          this.handleClick(current + 1, e)

          // 向右滑动
        } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
          this.isMoving = true
          this.handleClick(current - 1, e)
        }
      }
    },

    handleTouchEnd() {
      const { swipeable, tabDirection } = this
      if (!swipeable || tabDirection === 'vertical') return

      clearInterval(this.timer)
      this.interval = 0
      this.isMoving = false
    },

    getTabHeaderRef() {
      if (ENV === Taro.ENV_TYPE.WEB) {
        this.tabHeaderRef = document.getElementById(this.tabId)
      }
    },
  },
  render() {
    const {
      customStyle,
      className,
      height,
      tabDirection,
      animated,
      tabList,
      scroll,
      current,
    } = this
    const { _scrollLeft, _scrollTop, _scrollIntoView } = this.state

    const heightStyle = { height }
    const underlineStyle = {
      height: tabDirection === 'vertical' ? `${tabList.length * 100}%` : '1PX',
      width: tabDirection === 'horizontal' ? `${tabList.length * 100}%` : '1PX',
    }
    const bodyStyle = {}
    let transformStyle = `translate3d(0px, -${current * 100}%, 0px)`
    if (tabDirection === 'horizontal') {
      transformStyle = `translate3d(-${current * 100}%, 0px, 0px)`
    }
    Object.assign(bodyStyle, {
      transform: transformStyle,
      '-webkit-transform': transformStyle,
    })
    if (!animated) {
      bodyStyle.transition = 'unset'
    }

    const tabItems = tabList.map((item, idx) => {
      const itemCls = classNames({
        'at-tabs__item': true,
        'at-tabs__item--active': current === idx,
      })

      return (
        <view
          class={itemCls}
          id={`tab${idx}`}
          key={item.title}
          onTap={this.handleClick.bind(this, idx)}
          onClick={this.handleClick.bind(this, idx)}
        >
          {item.title}
          <view class="at-tabs__item-underline"></view>
        </view>
      )
    })
    const rootCls = classNames(
      {
        'at-tabs': true,
        'at-tabs--scroll': scroll,
        [`at-tabs--${tabDirection}`]: true,
        [`at-tabs--${ENV}`]: true,
      },
      className
    )
    const scrollX = tabDirection === 'horizontal'
    const scrollY = tabDirection === 'vertical'

    return (
      <view class={rootCls} style={mergeStyle(heightStyle, customStyle)}>
        {scroll ? (
          <scroll-view
            id={this.tabId}
            class="at-tabs__header"
            style={heightStyle}
            scrollX={scrollX}
            scrollY={scrollY}
            scrollWithAnimation
            scrollLeft={_scrollLeft}
            scrollTop={_scrollTop}
            scrollIntoView={_scrollIntoView}>
            {tabItems}
          </scroll-view>
        ) : (
          <view id={this.tabId} class="at-tabs__header">
            {tabItems}
          </view>
        )}
        <view
          class="at-tabs__body"
          onTouchStart={this.handleTouchStart.bind(this)}
          onTouchEnd={this.handleTouchEnd.bind(this)}
          onTouchMove={this.handleTouchMove.bind(this)}
          style={mergeStyle(bodyStyle, heightStyle)}>
          <view class="at-tabs__underline" style={underlineStyle}></view>
          {this.$slots.default}
        </view>
      </view>
    )
  },
}
