<template>
  <view v-if="state._isOpened" :class="rootCls">
    <view v-if="hasMask" class="at-toast__overlay" />
    <view :class="bodyClass" :style="customStyle" @tap="handleClick">
      <view class="toast-body-content">
        <view v-if="realImg" class="toast-body-content__img">
          <image
            class="toast-body-content__img-item"
            :src="realImg"
            mode="scaleToFill"
          />
        </view>
        <view v-if="isRenderIcon" class="toast-body-content__icon">
          <view :class="iconClass" />
        </view>
        <view v-if="text" class="toast-body-content__info">
          <view>{{ text }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import AtToast from './index'
export default AtToast
</script>
