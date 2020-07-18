<template>
  <view 
    :class="rootCls" 
    :style="rootStyle"
  >
    <scroll-view
      v-if="scroll"
      :id="this.tabId"
      class="at-tabs__header"
      :style="heightStyle"
      :scrollX="scrollX"
      :scrollY="scrollY"
      scrollWithAnimation
      :scrollLeft="state._scrollLeft"
      :scrollTop="state._scrollTop"
      :scrollIntoView="state._scrollIntoView"
    >
      <view
        v-for="(item, idx) in tabList"
        :class="classNames({
          'at-tabs__item': true,
          'at-tabs__item--active': current === idx,
        })"
        :id="`tab${idx}`"
        :key="item.title"
        @tap="handleClick(idx, $event)"
      >
        {{ item.title }}
        <view class="at-tabs__item-underline"></view>
      </view>
    </scroll-view>
    <view v-else :id="this.tabId" class="at-tabs__header">
      <view
        v-for="(item, idx) in tabList"
        :class="classNames({
          'at-tabs__item': true,
          'at-tabs__item--active': current === idx,
        })"
        :id="`tab${idx}`"
        :key="item.title"
        @tap="handleClick(idx, $event)"
      >
        {{ item.title }}
        <view class="at-tabs__item-underline"></view>
      </view>
    </view>
    <view
      class="at-tabs__body"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
      @touchmove="handleTouchMove"
      :style="bodySty">
      <view class="at-tabs__underline" :style="underlineStyle"></view>
      <slot></slot>
    </view>
  </view>
</template>

<script>
import AtTabs from './index'
export default AtTabs
</script>