import classNames from 'classnames'
import { mergeStyle, pxTransform } from '../../utils/common'

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
    onClick: {
      type: Function,
      default: () => () => {},
    },
  },
  methods: {
    handleClick(event) {
      this.onClick && this.onClick(event)
    },
  },
  render() {
    const { customStyle, className, prefixClass, value, size, color } = this

    const rootStyle = {
      fontSize: `${pxTransform(parseInt(String(size)) * 2)}`,
      color,
    }

    const iconName = value ? `${prefixClass}-${value}` : ''

    return (
      <view
        class={classNames(prefixClass, iconName, className)}
        style={mergeStyle(rootStyle, customStyle)}
        onTap={this.handleClick}></view>
    )
  },
}
