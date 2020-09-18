<template>
  <view :class="rootCls" :style="customStyle" @tap="handleClick">
    <slot></slot>
  </view>
</template>

<script lang="ts">
import AtTag from './index'
export default AtTag
</script>
