<template>
  <view :class="rootClass">
    <slot></slot>
  </view>
</template>

<script>
import classNames from 'classnames'
export default {
  name: 'AtModalHeader',
  props: {
    className: {
      type: [Object, String],
      default: '',
    },
  },
  computed: {
    rootClass() {
      return classNames('at-modal__header', this.className)
    }
  },
}
</script>