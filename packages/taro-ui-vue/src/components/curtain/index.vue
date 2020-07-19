<template>
  <view 
    :class="curtainClass" 
    :style="customStyle" 
    @tap="stopPropagation"
  >
    <view class="at-curtain__container">
      <view class="at-curtain__body">
        <slot></slot>
        <view :class="btnCloseClass" @tap="handleTab"></view>
      </view>
    </view>
  </view>
</template>
<script>
import AtCurtain from './index'
export default AtCurtain
</script>