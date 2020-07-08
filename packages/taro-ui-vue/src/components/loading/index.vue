<template>
  <view class="at-loading" :style="transformStyle(sizeStyle)">
    <view class="at-loading__ring" :style="ringStyle"></view>
    <view class="at-loading__ring" :style="transformStyle(ringStyle)"></view>
    <view class="at-loading__ring" :style="ringStyle"></view>
  </view>
</template>

<script lang="ts">
import { pxTransform } from '../../utils/common'
export default {
  name: 'AtLoading',
  props: {
    size: {
      type: [String, Number],
      default: 0,
    },
    color: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    transformStyle(style = {}) {
      return Object.keys(style).map(item => `${item}: ${style[item]}`).join(';')
    }
  },
  computed: {
    sizeStyle() {
      const { size } = this
      const loadingSize = typeof size === 'string' ? size : String(size)
      const res = {
        width: size ? `${pxTransform(parseInt(loadingSize))}` : '',
        height: size ? `${pxTransform(parseInt(loadingSize))}` : '',
      }
      return res
    },
    ringStyle() {
      const { color, sizeStyle } = this
      const colorStyle = {
        border: color ? `1px solid ${color}` : '',
        'border-color': color ? `${color} transparent transparent transparent` : '',
      }
      return Object.assign({}, colorStyle, sizeStyle)
    }
  }
}
</script>