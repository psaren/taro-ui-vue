<template>
  <view :class="rootClass">
    <slot />
  </view>
</template>

<script lang='ts'>
import classNames from 'classnames'
export default {
  name: 'ActionSheetBody',
  props: {
    className: {
      type: [Array, String],
      default: () => '',
    },
	},
	computed: {
		rootClass() {
			return classNames('at-action-sheet__body', this.className)
		}
	},
}
</script>
