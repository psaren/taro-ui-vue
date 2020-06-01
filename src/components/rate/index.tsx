import { View } from '@tarojs/components'
import Vue, { VNode } from 'vue'
import { CommonEvent } from '@tarojs/components/types/common'
import classNames from 'classnames'
import { pxTransform } from '../../utils/common'

const AtRate = Vue.extend({
  name: 'AtRate',
  props: {
    customStyle: {
      type: [Object, String],
      default: function () {
        return {}
      },
    },
    className: {
      type: [Object, String],
      default: function () {
        return {}
      },
    },
    size: {
      type: [Number, String],
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 5,
    },
    margin: {
      type: Number,
      default: 5,
    },
    onChange: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
  },
  methods: {
    handleClick(event: CommonEvent) {
      this.onChange && this.onChange(event)
    },
  },
  render(h): VNode {
    const { customStyle, className, value, max, size, margin } = this

    const iconStyle = {
      marginRight: pxTransform(margin),
    }
    const starIconStyle = {
      fontSize: size ? `${size}px` : '',
    }

    // 生成星星颜色 className 数组，方便在jsx中直接map
    const classNameArr: string[] = []
    const floorValue = Math.floor(value)
    const ceilValue = Math.ceil(value)
    for (let i = 0; i < max; i++) {
      if (floorValue > i) {
        classNameArr.push('at-rate__icon at-rate__icon--on')
      } else if (ceilValue - 1 === i) {
        classNameArr.push('at-rate__icon at-rate__icon--half')
      } else {
        classNameArr.push('at-rate__icon at-rate__icon--off')
      }
    }

    return (
      <View class={classNames('at-rate', className)} style={customStyle}>
        {classNameArr.map((cls, i) => (
          <View
            class={cls}
            key={`at-rate-star-${i}`}
            style={iconStyle}
            onTap={this.handleClick.bind(this, i + 1)}>
            <View class="at-icon at-icon-star-2" style={starIconStyle}></View>
            <View class="at-rate__left">
              <View class="at-icon at-icon-star-2" style={starIconStyle}></View>
            </View>
          </View>
        ))}
      </View>
    )
  },
})

export default AtRate
