/*
 * @Author: pengyue
 * @Date: 2020-07-11 07:05:33
 * @LastEditTime: 2020-07-11 14:26:46
 * @LastEditors: pengyue
 * @Description:
 * @FilePath: /taro-ui-vue/packages/taro-ui-vue/src/components/progress/index.ts
 */
import classNames from 'classnames'

export default {
  name: 'AtProgress',
  props: {
    color: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: 'progress',
      validator: (val) => ['progress', 'error', 'success'].includes(val),
    },
    percent: {
      type: Number,
      default: 0,
    },
    strokeWidth: {
      type: Number,
      default: 10,
    },
    isHidePercent: {
      type: Boolean,
      default: false,
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
  },
  computed: {
    progressStyle() {
      return {
        width: this.percent && `${+this.percent}%`,
        height: this.strokeWidth && `${+this.strokeWidth}px`,
        backgroundColor: this.color,
      }
    },
  },
  methods: {
    rootClass(status) {
      return classNames(
        'at-progress',
        {
          [`at-progress--${status}`]: !!status,
        },
        this.className
      )
    },
    iconClass(status) {
      return classNames('at-icon', {
        'at-icon-close-circle': status === 'error',
        'at-icon-check-circle': status === 'success',
      })
    },
  },
}
