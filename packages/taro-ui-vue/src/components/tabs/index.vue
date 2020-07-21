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
      :scroll-x="scrollX"
      :scroll-y="scrollY"
      scroll-with-animation
      :scroll-left="state._scrollLeft"
      :scroll-top="state._scrollTop"
      :scroll-into-view="state._scrollIntoView"
    >
      <view
        v-for="(item, idx) in tabList"
        :id="`tab${idx}`"
        :key="item.title"
        :class="classNames({
          'at-tabs__item': true,
          'at-tabs__item--active': current === idx,
        })"
        @tap="handleClick(idx, $event)"
      >
        {{ item.title }}
        <view class="at-tabs__item-underline" />
      </view>
    </scroll-view>
    <view
      v-else
      :id="this.tabId"
      class="at-tabs__header"
    >
      <view
        v-for="(item, idx) in tabList"
        :id="`tab${idx}`"
        :key="item.title"
        :class="classNames({
          'at-tabs__item': true,
          'at-tabs__item--active': current === idx,
        })"
        @tap="handleClick(idx, $event)"
      >
        {{ item.title }}
        <view class="at-tabs__item-underline" />
      </view>
    </view>
    <view
      class="at-tabs__body"
      :style="bodySty"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
      @touchmove="handleTouchMove"
    >
      <view
        class="at-tabs__underline"
        :style="underlineStyle"
      />
      <slot />
    </view>
  </view>
</template>

<script lang='ts'>
import AtTabs from './index'
export default AtTabs
</script>