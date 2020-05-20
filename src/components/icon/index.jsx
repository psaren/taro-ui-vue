import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { mergeStyle } from '../../utils/common'

export default {
  name: 'AtIcon',
  props: {
    customStyle: {
      type: [Object, String],
      default: '',
    },
    className: {
      type: [Array, String],
      default: '',
    },
    prefixClass: {
      type: String,
      default: 'at-icon',
    },
    value: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    size: {
      type: [String, Number],
      default: '',
    },
    handleClick: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    handleTab(event) {
      this.handleClick && this.handleClick(event)
    },
  },
  render() {
    const { customStyle, className, prefixClass, value, size, color } = this

    const rootStyle = {
      fontSize: `${Taro.pxTransform(parseInt(String(size)) * 2)}`,
      color,
    }

    const iconName = value ? `${prefixClass}-${value}` : ''

    return (
      <view
        class={classNames(prefixClass, iconName, className)}
        style={mergeStyle(rootStyle, customStyle)}
        onTab={this.handleTab}></view>
    )
  },
}
