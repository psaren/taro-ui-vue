<template>
  <view
    :class="classNames(prefixClass, iconName, className)"
    :style="mergeStyle(rootStyle, customStyle)"
    @tap="handleClick"
    @click="handleClick"
  />
</template>

<script lang="ts">
import AtIcon from './main'
export default AtIcon
</script>
