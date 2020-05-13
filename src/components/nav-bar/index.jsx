import Taro from '@tarojs/taro'
import classNames from 'classnames'

export default {
  name: 'NavBar',
  props: {
    customStyle: {
      type: [Object, String],
      default: '',
    },
    className: {
      type: [Array, String],
      default: '',
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: '',
    },
    leftIconType: {
      type: String,
      default: '',
    },
    leftText: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    onClickLeftIcon: {
      type: Function,
      default: () => () => {},
    },
    onClickRgIconSt: {
      type: Function,
      default: () => () => {},
    },
    onClickRgIconNd: {
      type: Function,
      default: () => () => {},
    },
    rightFirstIconType: {
      type: [String, Object],
      default: '',
    },
    rightSecondIconType: {
      type: [String, Object],
      default: '',
    },
  },
  methods: {
    /**
     *
     * @param {event} event
     */
    handleClickLeftView(event) {
      this.onClickLeftIcon && this.onClickLeftIcon(event)
    },
    /**
     *
     * @param {event} event
     */
    handleClickSt(event) {
      this.onClickRgIconSt && this.onClickRgIconSt(event)
    },
    /**
     *
     * @param {event} event
     */
    handleClickNd(event) {
      this.onClickRgIconNd && this.onClickRgIconNd(event)
    },
  },
  render() {
    const {
      customStyle,
      className,
      color,
      fixed,
      border,
      leftIconType,
      leftText,
      title,
      rightFirstIconType,
      rightSecondIconType,
    } = this
    const linkStyle = { color }

    const defaultIconInfo = {
      customStyle: '',
      className: '',
      prefixClass: 'at-icon',
      value: '',
      color: '',
      size: 24,
    }

    const leftIconInfo =
      leftIconType instanceof Object
        ? { ...defaultIconInfo, ...leftIconType }
        : { ...defaultIconInfo, value: leftIconType }
    const leftIconClass = classNames(
      leftIconInfo.prefixClass,
      {
        [`${leftIconInfo.prefixClass}-${leftIconInfo.value}`]: leftIconInfo.value,
      },
      leftIconInfo.className
    )

    const rightFirstIconInfo =
      rightFirstIconType instanceof Object
        ? { ...defaultIconInfo, ...rightFirstIconType }
        : { ...defaultIconInfo, value: rightFirstIconType }
    const rightFirstIconClass = classNames(
      rightFirstIconInfo.prefixClass,
      {
        [`${rightFirstIconInfo.prefixClass}-${rightFirstIconInfo.value}`]: rightFirstIconInfo.value,
      },
      rightFirstIconInfo.className
    )

    const rightSecondIconInfo =
      rightSecondIconType instanceof Object
        ? { ...defaultIconInfo, ...rightSecondIconType }
        : { ...defaultIconInfo, value: rightSecondIconType }
    const rightSecondIconClass = classNames(
      rightSecondIconInfo.prefixClass,
      {
        [`${rightSecondIconInfo.prefixClass}-${rightSecondIconInfo.value}`]: rightSecondIconInfo.value,
      },
      rightSecondIconInfo.className
    )

    return (
      <view
        class={classNames(
          {
            'at-nav-bar': true,
            'at-nav-bar--fixed': fixed,
            'at-nav-bar--no-border': !border,
          },
          className
        )}
        style={customStyle}>
        <view
          class="at-nav-bar__left-view"
          onTap={this.handleClickLeftView.bind(this)}
          style={linkStyle}>
          {leftIconType && (
            <view
              class={leftIconClass}
              style={this.$mergeStyle(
                {
                  color: leftIconInfo.color,
                  fontSize: `${Taro.pxTransform(parseInt(leftIconInfo.size.toString()) * 2)}`,
                },
                leftIconInfo.customStyle
              )}></view>
          )}
          <view class="at-nav-bar__text">{leftText}</view>
        </view>
        <view class="at-nav-bar__title">{title || this.$slots.default}</view>
        <view class="at-nav-bar__right-view">
          <view
            class={classNames({
              'at-nav-bar__container': true,
              'at-nav-bar__container--hide': !rightSecondIconType,
            })}
            style={linkStyle}
            onTap={this.handleClickNd.bind(this)}>
            {rightSecondIconType && (
              <view
                class={rightSecondIconClass}
                style={this.$mergeStyle(
                  {
                    color: rightSecondIconInfo.color,
                    fontSize: `${Taro.pxTransform(
                      parseInt(rightSecondIconInfo.size.toString()) * 2
                    )}`,
                  },
                  rightSecondIconInfo.customStyle
                )}></view>
            )}
          </view>
          <view
            class={classNames({
              'at-nav-bar__container': true,
              'at-nav-bar__container--hide': !rightFirstIconType,
            })}
            style={linkStyle}
            onTap={this.handleClickSt.bind(this)}>
            {rightFirstIconType && (
              <view
                class={rightFirstIconClass}
                style={this.$mergeStyle(
                  {
                    color: rightFirstIconInfo.color,
                    fontSize: `${Taro.pxTransform(
                      parseInt(rightFirstIconInfo.size.toString()) * 2
                    )}`,
                  },
                  rightFirstIconInfo.customStyle
                )}></view>
            )}
          </view>
        </view>
      </view>
    )
  },
}
