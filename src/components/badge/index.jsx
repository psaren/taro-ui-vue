import { View } from '@tarojs/components'
import classNames from 'classnames'

/**
 * formatValue
 * @param {string | number | undefined} value
 * @param {number} maxValue
 * @return string | number
 */
const formatValue = (value, maxValue) => {
  if (value === '' || value === null || value === undefined) return ''
  const numValue = +value
  if (Number.isNaN(numValue)) {
    return value
  }
  return numValue > maxValue ? `${maxValue}+` : numValue
}

export default {
  name: 'AtBadge',
  props: {
    dot: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    maxValue: {
      type: Number,
      default: 99,
    },
    customStyle: {
      type: [String, Object],
      default: () => {},
    },
    className: {
      type: [String, Array],
      default: '',
    },
  },

  render() {
    const { dot, customStyle, className, maxValue, value } = this
    const rootClassName = ['at-badge']

    const val = formatValue(value, maxValue)
    return (
      <View class={classNames(rootClassName, className)} style={customStyle}>
        {this.$slots.default}
        {dot ? (
          <View class="at-badge__dot"></View>
        ) : (
          val !== '' && <View class="at-badge__num">{val}</View>
        )}
      </View>
    )
  },
}
