<template>
  <view 
    :id="`swipeActionOptions-${componentId}`" 
    :class="rootClass"
  >
    <slot />
  </view>
</template>

<script lang='ts'>
import AtSwipeActionOptions from './index'
export default AtSwipeActionOptions
</script>