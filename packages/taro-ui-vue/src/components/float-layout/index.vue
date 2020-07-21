<template>
  <view 
    :class="rootClass" 
    @touchmove="handleTouchMove"
  >
    <view 
      class="at-float-layout__overlay" 
      @tap="close" 
    />
    <view class="at-float-layout__container layout">
      <view
        v-if="title"
        class="layout-header"
      >
        <view class="layout-header__title">
          {{ title }}
        </view>
        <view 
          class="layout-header__btn-close" 
          @tap="close" 
        />
      </view>
      <view class="layout-body">
        <scroll-view
          :scroll-y="scrollY"
          :scroll-x="scrollX"
          :scroll-top="scrollTop"
          :scroll-left="scrollLeft"
          :upper-threshold="upperThreshold"
          :lower-threshold="lowerThreshold"
          :scroll-with-animation="scrollWithAnimation"
          :on-scroll="onScroll"
          :on-scroll-to-lower="onScrollToLower"
          :on-scroll-to-upper="onScrollToUpper"
          class="layout-body__content"
        >
          <slot />
        </scroll-view>
      </view>
    </view>
  </view>
</template>
<script lang='ts'>
import AtFloatLayout from './index'
export default AtFloatLayout
</script>