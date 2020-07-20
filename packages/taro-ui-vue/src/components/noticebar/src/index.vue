<template>
  <view
    v-if="state.show"
    :class="classNames('at-noticebar', classObject, className)"
    :style="customStyle"
  >
    <view
      v-if="close"
      class="at-noticebar__close"
      @tap="handleClose"
      @click="handleClose"
    >
      <view class="at-icon at-icon-close" />
    </view>
    <view class="at-noticebar__content">
      <view
        v-if="icon"
        class="at-noticebar__content-icon"
      >
        <view :class="classNames(iconClass, iconClass)" />
      </view>
      <view class="at-noticebar__content-text">
        <view
          :animation="state.animationData"
          :class="classNames(innerClassName)"
          :style="style"
        >
          <slot />
        </view>
      </view>
      <view
        v-show="showMore"
        class="at-noticebar__more"
        @tap="handleGotoMore"
        @click="handleGotoMore"
      >
        <view class="text">
          {{ moreText }}
        </view>
        <view class="at-noticebar__more-icon">
          <view class="at-icon at-icon-chevron-right" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import AtNoticebar from './main'
export default AtNoticebar
</script>