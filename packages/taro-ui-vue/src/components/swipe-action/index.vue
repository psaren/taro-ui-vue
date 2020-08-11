<template>
  <view
    :id="`swipeAction-${state.componentId}`"
    :class="rootClass"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @touchstart="handleTouchStart"
  >
    <view :class="contentCls" :style="transformStyle">
      <slot />
    </view>
    <AtSwipeActionOptions
      v-if="Array.isArray(options) && options.length > 0"
      :options="options"
      :component-id="state.componentId"
      :on-queryed-dom="handleDomInfo"
    >
      <view
        v-for="(item, key) in options"
        :key="`${item.text}-${key}`"
        :style="item.style"
        :class="getOptionsCls(item)"
        @tap="handleClick(item, key, $event)"
      >
        <view class="option__text">
          {{ item.text }}
        </view>
      </view>
    </AtSwipeActionOptions>
  </view>
</template>

<script>
import AtSwipeActionOptions from './options/index.vue'
import AtSwipeAction from './index'
export default {
  name: 'AtSwipeAction',
  mixins: [AtSwipeAction],
  components: {
    AtSwipeActionOptions,
  },
}
</script>
