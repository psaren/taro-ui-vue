import classNames from 'classnames'
import { mergeStyle, pxTransform } from '../../../utils/common'

export default {
  name: 'AtDivider',
  props: {
    content: {
      type: String,
      default: '',
    },
    height: {
      type: [Number, String],
      default: 0,
    },
    fontColor: {
      type: String,
      default: '',
    },
    customStyle: {
      type: String,
      default: '',
    },
    fontSize: {
      type: [Number, String],
      default: 0,
    },
    lineColor: {
      type: String,
      default: '',
    },
    className: {
      type: [Object, String],
      default: () => {},
    },
  },
  computed: {
    rootStyle() {
      return {
        height: this.height ? `${pxTransform(Number(this.height))}` : '',
      }
    },
    fontStyle() {
      return {
        color: this.fontColor,
        'font-size': this.fontSize ? `${pxTransform(Number(this.fontSize))}` : '',
      }
    },
    lineStyle() {
      return {
        backgroundColor: this.lineColor,
      }
    },
  },
  methods: {
    mergeStyle,
    classNames,
  },
}
