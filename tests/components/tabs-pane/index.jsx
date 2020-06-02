import classNames from 'classnames'

export default {
  name: 'AtTabsPane',
  props: {
    customStyle: {
      type: [Object, String],
      default: () => '',
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
    tabDirection: {
      type: String,
      default: 'horizontal',
      validator: (val) => ['horizontal', 'vertical'].includes(val),
    },
    index: {
      type: Number,
      default: 0,
    },
    current: {
      type: Number,
      default: 0,
    },
  },
  render() {
    const { customStyle, className, tabDirection, index, current } = this

    return (
      <view
        class={classNames(
          {
            'at-tabs-pane': true,
            'at-tabs-pane--vertical': tabDirection === 'vertical',
            'at-tabs-pane--active': index === current,
            'at-tabs-pane--inactive': index !== current,
          },
          className
        )}
        style={customStyle}>
        {this.$slots.default}
      </view>
    )
  },
}
