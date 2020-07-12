import Vue from 'vue'
import Component from 'vue-class-component'
import classNames from 'classnames'
import { mergeStyle, pxTransform } from '../../../utils/common'
import { CommonEvent } from '@tarojs/components/types/common'

const AppProps = Vue.extend({
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
})

@Component({
  methods: {
    classNames,
    mergeStyle,
  },
})
export default class AtIcon extends AppProps {
  get iconName() {
    return this.value ? `${this.prefixClass}-${this.value}` : ''
  }

  get rootStyle() {
    return {
      fontSize: `${pxTransform(parseInt(String(this.size)) * 2)}`,
      color: this.color,
    }
  }

  handleClick(event: CommonEvent) {
    this.onClick && this.onClick(event)
  }
}
