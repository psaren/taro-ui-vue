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
  data() {
    return {
      rootClassName: ['at-badge'],
    }
  },
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
  computed: {
    val() {
      return formatValue(this.value, this.maxValue)
    },
  },
  methods: {
    classNames,
  },
}
