<template>
  <view 
    :id="`swipeActionOptions-${componentId}`" 
    :class="rootClass"
  >
    <slot></slot>
  </view>
</template>

<script>
import AtSwipeActionOptions from './index.js'
export default AtSwipeActionOptions
</script>