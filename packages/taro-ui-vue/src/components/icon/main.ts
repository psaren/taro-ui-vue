import classNames from 'classnames'
import { mergeStyle, pxTransform } from '../../utils/common'
import { CommonEvent } from '@tarojs/components/types/common'

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
    classNames,
    mergeStyle,
    handleClick(event: CommonEvent) {
      this.onClick && this.onClick(event)
    },
  },
  computed: {
    iconName() {
      return this.value ? `${this.prefixClass}-${this.value}` : ''
    },
    rootStyle() {
      return {
        fontSize: `${pxTransform(parseInt(String(this.size)) * 2)}`,
        color: this.color,
      }
    },
  },
}
