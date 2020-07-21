import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { mergeStyle, pxTransform } from '../../utils/common'

const defaultIconInfo = {
  customStyle: '',
  className: '',
  prefixClass: 'at-icon',
  value: '',
  color: '',
  size: Taro.getEnv() === 'WEB' ? 12 : 24,
}

export default {
  name: 'AtNavBar',
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
      type: [String, Object],
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
      default: function () {
        return () => {}
      },
    },
    onClickRgIconSt: {
      type: Function,
      default: function () {
        return () => {}
      },
    },
    onClickRgIconNd: {
      type: Function,
      default: function () {
        return () => {}
      },
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
  computed: {
    linkStyle() {
      const { color } = this
      return { color }
    },
    rootCls() {
      const { fixed, border, className } = this
      return classNames(
        {
          'at-nav-bar': true,
          'at-nav-bar--fixed': fixed,
          'at-nav-bar--no-border': !border,
        },
        className
      )
    },
    leftIconInfo() {
      const { leftIconType } = this
      const leftIconInfo =
        leftIconType instanceof Object
          ? { ...defaultIconInfo, ...leftIconType }
          : { ...defaultIconInfo, value: leftIconType }
      return leftIconInfo
    },
    leftIconClass() {
      const { leftIconInfo } = this
      return classNames(
        leftIconInfo.prefixClass,
        {
          [`${leftIconInfo.prefixClass}-${leftIconInfo.value}`]: leftIconInfo.value,
        },
        leftIconInfo.className
      )
    },
    rightFirstIconInfo() {
      const { rightFirstIconType } = this
      const rightFirstIconInfo =
        rightFirstIconType instanceof Object
          ? { ...defaultIconInfo, ...rightFirstIconType }
          : { ...defaultIconInfo, value: rightFirstIconType }
      return rightFirstIconInfo
    },
    rightFirstIconClass() {
      const { rightFirstIconInfo } = this
      return classNames(
        rightFirstIconInfo.prefixClass,
        {
          [`${rightFirstIconInfo.prefixClass}-${rightFirstIconInfo.value}`]: rightFirstIconInfo.value,
        },
        rightFirstIconInfo.className
      )
    },
    rightSecondIconInfo() {
      const { rightSecondIconType } = this
      const rightSecondIconInfo =
        rightSecondIconType instanceof Object
          ? { ...defaultIconInfo, ...rightSecondIconType }
          : { ...defaultIconInfo, value: rightSecondIconType }
      return rightSecondIconInfo
    },
    rightSecondIconClass() {
      const { rightSecondIconInfo } = this
      return classNames(
        rightSecondIconInfo.prefixClass,
        {
          [`${rightSecondIconInfo.prefixClass}-${rightSecondIconInfo.value}`]: rightSecondIconInfo.value,
        },
        rightSecondIconInfo.className
      )
    },
    leftIconStyle() {
      const { leftIconInfo } = this
      return mergeStyle(
        {
          color: leftIconInfo.color,
          fontSize: `${pxTransform(parseInt(leftIconInfo.size.toString()) * 2)}`,
        },
        leftIconInfo.customStyle
      )
    },
    rightSecondIconStyle() {
      const { rightSecondIconInfo } = this
      return mergeStyle(
        {
          color: rightSecondIconInfo.color,
          fontSize: `${pxTransform(parseInt(rightSecondIconInfo.size.toString()) * 2)}`,
        },
        rightSecondIconInfo.customStyle
      )
    },
    rightFirstIconStyle() {
      const { rightFirstIconInfo } = this
      return mergeStyle(
        {
          color: rightFirstIconInfo.color,
          fontSize: `${pxTransform(parseInt(rightFirstIconInfo.size.toString()) * 2)}`,
        },
        rightFirstIconInfo.customStyle
      )
    },
  },
  methods: {
    classNames,
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
}
