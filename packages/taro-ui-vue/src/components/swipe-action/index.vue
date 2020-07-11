<template>
  <view
    :id="`swipeAction-${state.componentId}`"
    :class="rootClass"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @touchstart="handleTouchStart"
  >
    <view
      :class="contentCls"
      :style="transformStyle">
      <slot></slot>
    </view>
    <AtSwipeActionOptions
      v-if="Array.isArray(options) && options.length > 0"
      :options="options"
      :componentId="state.componentId"
      :onQueryedDom="handleDomInfo"
    >
      <view
        v-for="(item, key) in options"
        :key="`${item.text}-${key}`"
        :style="item.style"
        @tap="handleClick(item, key, $event)"
        :class="getOptionsCls(item)">
        <view class="option__text">{{ item.text }}</view>
      </view>
    </AtSwipeActionOptions>
  </view>
</template>

<script>
import AtSwipeAction from './index.js'
export default AtSwipeAction
</script>