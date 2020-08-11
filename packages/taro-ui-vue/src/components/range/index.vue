<template>
  <view :class="rootCls" :style="customStyle" @tap="handleClick">
    <view class="at-range__container" :style="containerStyle">
      <view class="at-range__rail" :style="railStyle"></view>
      <view
        class="at-range__track"
        :style="mergeStyle(atTrackStyle, trackStyle)"
      ></view>
      <view
        class="at-range__slider"
        :style="mergeStyle(sliderAStyle, sliderStyle)"
        @touchmove="handleTouchMove('aX', $event)"
        @touchend="handleTouchEnd('aX', $event)"
      ></view>
      <view
        class="at-range__slider"
        :style="mergeStyle(sliderBStyle, sliderStyle)"
        @touchmove="handleTouchMove('bX', $event)"
        @touchend="handleTouchEnd('bX', $event)"
      ></view>
    </view>
  </view>
</template>
<script lang="ts">
import AtRange from './index'
export default AtRange
</script>
