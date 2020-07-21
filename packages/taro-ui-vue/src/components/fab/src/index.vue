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

<script>
import AtFab from './main'
export default AtFab
</script>
