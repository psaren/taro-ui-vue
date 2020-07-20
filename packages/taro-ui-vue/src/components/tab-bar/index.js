import classNames from 'classnames'
import AtBadge from '../badge/index'
import { mergeStyle } from '../../utils/common'

export default {
  name: 'AtTabBar',
  conponents: {
    AtBadge,
  },
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
    current: {
      type: Number,
      default: 0,
    },
    iconSize: {
      type: [Number, String],
      default: '',
    },
    fontSize: {
      type: [Number, String],
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    selectedColor: {
      type: String,
      default: '',
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
  computed: {
    rootCls() {
      return classNames(
        {
          'at-tab-bar': true,
          'at-tab-bar--fixed': this.fixed,
        },
        this.className
      )
    },
    rootSty() {
      const { backgroundColor } = this
      const rootStyle = {
        backgroundColor: backgroundColor || '',
      }
      return mergeStyle(rootStyle, this.customStyle)
    },
    titleStyle() {
      const { fontSize } = this
      return {
        fontSize: fontSize ? `${fontSize}px` : '',
      }
    },
    imgStyle() {
      const { iconSize } = this
      return {
        width: `${iconSize}px`,
        height: `${iconSize}px`,
      }
    },
    selectedStyle() {
      return {
        color: this.selectedColor || '',
      }
    },
    defaultStyle() {
      return {
        color: this.color || '',
      }
    },
  },
  methods: {
    /**
     *
     * @param {number} index
     * @param {event} event
     */
    handleClick(index, event) {
      this.onClick && this.onClick(index, event)
    },
    classNames,
  },
}
