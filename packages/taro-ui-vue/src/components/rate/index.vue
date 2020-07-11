<template>
  <view 
    :class="rootCls"
    :style="customStyle"
  >
    <view
      v-if="(cls, i) in classNameArr"
      :class="cls"
      :key="`at-rate-star-${i}`"
      :style="iconStyle"
      @tap="handleClick(i + 1)"
    >
      <view class="at-icon at-icon-star-2" :style="starIconStyle"></view>
      <view class="at-rate__left">
        <view class="at-icon at-icon-star-2" :style="starIconStyle"></view>
      </view>
    </view>
  </view>
</template>

<script>
import AtRate from './index'
export default AtRate
</script>