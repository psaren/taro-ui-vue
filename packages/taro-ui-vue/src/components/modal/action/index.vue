<template>
  <view :class="rootClass">
    <view class="at-modal__action">
      <slot />
    </view>
  </view>
</template>

<script>
import classNames from 'classnames'

export default {
  name: 'AtModalAction',
  props: {
    isSimple: {
      type: Boolean,
      default: false,
    },
    className: {
      type: [Object, String],
      default: '',
    },
  },
  computed: {
    rootClass() {
      return classNames(
        'at-modal__footer',
        {
          'at-modal__footer--simple': this.isSimple,
        },
        this.className
      )
    },
  },
}
</script>
