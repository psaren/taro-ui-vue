<template>
  <view
    :class="classNames('at-fab', className, {
      [`at-fab--${size}`]: size,
    })"
    @tap="handleTab"
    @click="handleTab"
  >
    <slot />
  </view>
</template>

<script lang="ts">
import AtFab from './index'
export default AtFab
</script>
