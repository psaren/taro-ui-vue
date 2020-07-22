<template>
  <view
    :class="rootClass"
    @tap="handleClick"
    @click="handleClick"
  >
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
		onClick: {
      type: Function,
      default: () => () => {},
    },
	},
	computed: {
		rootClass() {
			return classNames('at-action-sheet__footer', this.className)
		}
	},
	methods: {
    handleClick(e) {
      this.onClick && this.onClick(e)
    },
  },
}
</script>
