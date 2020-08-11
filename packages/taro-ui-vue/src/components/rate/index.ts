import { CommonEvent } from '@tarojs/components/types/common'
import classNames from 'classnames'
import { pxTransform } from '../../utils/common'

const AtRate = {
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
  computed: {
    rootCls() {
      return classNames('at-rate', this.className)
    },
    iconStyle() {
      return {
        marginRight: pxTransform(this.margin),
      }
    },
    starIconStyle() {
      const { size } = this
      return {
        fontSize: size ? `${size}px` : '',
      }
    },
    classNameArr(): string[] {
      const { value, max } = this
      const arr: string[] = []
      const floorValue = Math.floor(value)
      const ceilValue = Math.ceil(value)
      for (let i = 0; i < max; i++) {
        if (floorValue > i) {
          arr.push('at-rate__icon at-rate__icon--on')
        } else if (ceilValue - 1 === i) {
          arr.push('at-rate__icon at-rate__icon--half')
        } else {
          arr.push('at-rate__icon at-rate__icon--off')
        }
      }
      return arr
    },
  },
  methods: {
    handleClick(event: CommonEvent) {
      this.onChange && this.onChange(event)
    },
  },
}

export default AtRate
