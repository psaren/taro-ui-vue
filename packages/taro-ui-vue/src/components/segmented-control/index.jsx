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
  methods: {
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
  render() {
    const {
      customStyle,
      className,
      disabled,
      values,
      selectedColor,
      current,
      color,
      fontSize,
    } = this

    const rootStyle = {
      borderColor: selectedColor,
    }
    const itemStyle = {
      color: selectedColor,
      fontSize: pxTransform(fontSize),
      borderColor: selectedColor,
      backgroundColor: color,
    }
    const selectedItemStyle = {
      color,
      fontSize: pxTransform(fontSize),
      borderColor: selectedColor,
      backgroundColor: selectedColor,
    }
    const rootCls = classNames(
      'at-segmented-control',
      {
        'at-segmented-control--disabled': disabled,
      },
      className
    )

    return (
      <view class={rootCls} style={mergeStyle(rootStyle, customStyle)}>
        {values.map((value, i) => (
          <view
            class={classNames('at-segmented-control__item', {
              'at-segmented-control__item--active': current === i,
            })}
            style={current === i ? selectedItemStyle : itemStyle}
            key={value}
            onTap={this.handleClick.bind(this, i)}
            onClick={this.handleClick.bind(this, i)}
          >
            {value}
          </view>
        ))}
      </view>
    )
  },
}
