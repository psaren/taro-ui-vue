<template>
  <view 
    :class="rootClass" 
    @touchmove="handleTouchMove">
    <view 
      @tap="close" 
      class="at-float-layout__overlay" 
    />
    <view class="at-float-layout__container layout">
      <view v-if="title" class="layout-header">
        <view class="layout-header__title">{{ title }}</view>
        <view 
          class="layout-header__btn-close" 
          @tap="close" 
        />
      </view>
      <view class="layout-body">
        <scroll-view
          :scrollY="scrollY"
          :scrollX="scrollX"
          :scrollTop="scrollTop"
          :scrollLeft="scrollLeft"
          :upperThreshold="upperThreshold"
          :lowerThreshold="lowerThreshold"
          :scrollWithAnimation="scrollWithAnimation"
          :onScroll="onScroll"
          :onScrollToLower="onScrollToLower"
          :onScrollToUpper="onScrollToUpper"
          class="layout-body__content">
          <slot></slot>
        </scroll-view>
      </view>
    </view>
  </view>
</template>
<script>
import AtFloatLayout from './index'
export default AtFloatLayout
</script>