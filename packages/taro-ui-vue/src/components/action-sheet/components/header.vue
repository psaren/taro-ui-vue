<template>
  <view :class="rootClass">
    <slot />
  </view>
</template>

<script lang="ts">
import classNames from 'classnames'

export default {
	name: 'ActionSheetHeader',
	props: {
    className: {
      type: [Array, String],
      default: () => '',
    },
	},
	computed: {
		rootClass() {
			return classNames('at-action-sheet__header', this.className)
		}
	}
}
</script>
