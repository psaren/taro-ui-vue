<template>
  <scroll-view scrollY :class="rootClass">
    <slot></slot>
  </scroll-view>
</template>
<script>
import classNames from 'classnames'
export default {
  name: 'AtModalContent',
  props: {
    className: {
      type: [Object, String],
      default: () => '',
    },
  },
  computed: {
    rootClass() {
      return classNames('at-modal__content', this.className)
    }
  }
}
</script>