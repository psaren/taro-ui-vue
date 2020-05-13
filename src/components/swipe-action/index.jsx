import classNames from 'classnames'
import _inRange from 'lodash/inRange'
import _isEmpty from 'lodash/isEmpty'
import SwipeActionOptions from './options/index'
import { delayGetClientRect, delayGetScrollOffset, isTest, uuid } from '../../utils/common'
import mixins from '../mixins'

export default {
  name: 'SwipeAction',
  mixins: [mixins],
  props: {
    isOpened: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    autoClose: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
      validator: (options) => {
        return options.every((item) => {
          if (typeof item === 'object') {
            if (!item.text) return false
            if (item.style && typeof item.style !== 'string' && typeof item.style !== 'object')
              return false
            if (
              item.className &&
              typeof item.className !== 'string' &&
              typeof item.className !== 'array' &&
              typeof item.className !== 'object'
            )
              return false

            return true
          } else {
            return false
          }
        })
      },
    },
    onClick: {
      type: Function,
      default: () => () => {},
    },
    onOpened: {
      type: Function,
      default: () => () => {},
    },
    onClosed: {
      type: Function,
      default: () => () => {},
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
  },
  data() {
    const { isOpened } = this
    return {
      endValue: 0,
      startX: 0,
      startY: 0,
      maxOffsetSize: 0,
      domInfo: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      isMoving: false,
      isTouching: false,
      state: {
        componentId: isTest() ? 'tabs-AOTU2018' : uuid(),
        offsetSize: 0,
        _isOpened: !!isOpened,
      },
    }
  },
  methods: {
    getDomInfo() {
      return Promise.all([
        delayGetClientRect({
          self: this,
          delayTime: 0,
          selectorStr: `#swipeAction-${this.state.componentId}`,
        }),
        delayGetScrollOffset({ delayTime: 0 }),
      ]).then(([rect, scrollOffset]) => {
        rect[0].top += scrollOffset[0].scrollTop
        rect[0].bottom += scrollOffset[0].scrollTop
        this.domInfo = rect[0]
      })
    },
    /**
     *
     * @param {boolean} isOpened
     */
    _reset(isOpened) {
      this.isMoving = false
      this.isTouching = false

      if (isOpened) {
        this.endValue = -this.maxOffsetSize
        this.setState({
          _isOpened: true,
          offsetSize: -this.maxOffsetSize,
        })
      } else {
        this.endValue = 0
        this.setState({
          offsetSize: 0,
          _isOpened: false,
        })
      }
    },
    /**
     *
     * @param {number} value
     */
    computeTransform(value) {
      return value ? `translate3d(${value}px,0,0)` : null
    },
    /**
     *
     * @param {event} event
     */
    handleOpened(event) {
      const { onOpened } = this
      if (typeof onOpened === 'function' && !this.state._isOpened) {
        onOpened(event)
      }
    },
    /**
     *
     * @param {event} event
     */
    handleClosed(event) {
      const { onClosed } = this
      if (typeof onClosed === 'function' && this.state._isOpened) {
        onClosed(event)
      }
    },
    handleTouchStart(e) {
      const { clientX, clientY } = e.touches[0]

      if (this.disabled) return

      this.getDomInfo()

      this.startX = clientX
      this.startY = clientY
      this.isTouching = true
    },
    handleTouchMove(e) {
      if (_isEmpty(this.domInfo)) {
        return
      }

      const { startX, startY } = this
      const { top, bottom, left, right } = this.domInfo
      const { clientX, clientY, pageX, pageY } = e.touches[0]

      const x = Math.abs(clientX - startX)
      const y = Math.abs(clientY - startY)

      const inDom = _inRange(pageX, left, right) && _inRange(pageY, top, bottom)

      if (!this.isMoving && inDom) {
        this.isMoving =
          y === 0 || x / y >= Number.parseFloat(Math.tan((45 * Math.PI) / 180).toFixed(2))
      }

      if (this.isTouching && this.isMoving) {
        e.preventDefault()

        const offsetSize = clientX - this.startX
        const isRight = offsetSize > 0

        if (this.state.offsetSize === 0 && isRight) return

        const value = this.endValue + offsetSize
        this.setState({
          offsetSize: value >= 0 ? 0 : value,
        })
      }
    },
    handleTouchEnd(event) {
      this.isTouching = false

      const { offsetSize } = this.state

      this.endValue = offsetSize

      const breakpoint = this.maxOffsetSize / 2
      const absOffsetSize = Math.abs(offsetSize)

      if (absOffsetSize > breakpoint) {
        this._reset(true)
        this.handleOpened(event)
        return
      }

      this._reset(false) // TODO: Check behavior
      this.handleClosed(event)
    },
    /**
     *
     * @param {{width: number}} param0
     */
    handleDomInfo({ width }) {
      const { _isOpened } = this.state

      this.maxOffsetSize = width
      this._reset(_isOpened)
    },
    /**
     *
     * @param {{text: string, style?: object | string, className?: object | string | string[]}} item
     * @param {number} index
     * @param {event} event
     */
    handleClick(item, index, event) {
      const { onClick, autoClose } = this

      if (typeof onClick === 'function') {
        onClick(item, index, event)
      }
      if (autoClose) {
        this._reset(false)
        this.handleClosed(event)
      }
    },
  },
  render() {
    const { offsetSize, componentId } = this.state
    const { options } = this
    const rootClass = classNames('at-swipe-action', this.className)
    const transform = this.computeTransform(offsetSize)
    const transformStyle = transform ? { transform } : {}

    return (
      <view
        id={`swipeAction-${componentId}`}
        class={rootClass}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        onTouchStart={this.handleTouchStart}>
        <view
          class={classNames('at-swipe-action__content', {
            animtion: !this.isTouching,
          })}
          style={transformStyle}>
          {this.$slots.default}
        </view>

        {Array.isArray(options) && options.length > 0 ? (
          <SwipeActionOptions
            options={options}
            componentId={componentId}
            onQueryedDom={this.handleDomInfo}>
            {options.map((item, key) => (
              <view
                key={`${item.text}-${key}`}
                style={item.style}
                onTap={(e) => this.handleClick(item, key, e)}
                class={classNames('at-swipe-action__option', item.className)}>
                <view class="option__text">{item.text}</view>
              </view>
            ))}
          </SwipeActionOptions>
        ) : null}
      </view>
    )
  },
}
