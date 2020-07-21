import classNames from 'classnames'
import { pxTransform, mergeStyle } from '../../utils/common'

export default {
  name: 'AtSegmentedControl',
  props: {
    customStyle: {
      type: [Object, String],
      default: '',
    },
    className: {
      type: [Array, String],
      default: '',
    },
    current: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '',
    },
    fontSize: {
      type: [Number, String],
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    selectedColor: {
      type: String,
      default: '',
    },
    values: {
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
      const { disabled, className } = this
      return classNames(
        'at-segmented-control',
        {
          'at-segmented-control--disabled': disabled,
        },
        className
      )
    },
    rootStyle() {
      return {
        borderColor: this.selectedColor,
      }
    },
    rootSty() {
      return mergeStyle(this.rootStyle, this.customStyle)
    }, 
    itemStyle() {
      const {
        selectedColor,
        color,
        fontSize,
      } = this
      return {
        color: selectedColor,
        fontSize: pxTransform(fontSize),
        borderColor: selectedColor,
        backgroundColor: color,
      }
    },
    selectedItemStyle() {
      const {
        selectedColor,
        color,
        fontSize,
      } = this
      return {
        color,
        fontSize: pxTransform(fontSize),
        borderColor: selectedColor,
        backgroundColor: selectedColor,
      }
    }
  },
  methods: {
    classNames,
    /**
     *
     * @param {number} index
     * @param {event} event
     */
    handleClick(index, event) {
      if (this.disabled) return
      this.onClick(index, event)
    },
  },
}
