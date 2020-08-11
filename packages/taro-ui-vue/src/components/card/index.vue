<template>
  <view class="rootClass" @tap="handleClick">
    <view class="at-card__header">
      <view v-if="thumb" class="at-card__header-thumb">
        <image
          class="at-card__header-thumb-info"
          mode="scaleToFill"
          :src="thumb"
        />
      </view>
      <slot name="renderIcon">
        {{ renderIcon }}
      </slot>
      <view
        v-if="!thumb && icon && icon.value"
        :class="iconClass"
        :style="iconStyle"
      />
      <view class="at-card__header-title">
        {{ title }}
      </view>
      <view
        v-if="extra"
        :style="{ ...extraStyle }"
        class="at-card__header-extra"
      >
        {{ extra }}
      </view>
    </view>
    <view class="at-card__content">
      <view class="at-card__content-info">
        <slot />
      </view>
      <view v-if="note" class="at-card__content-note">
        {{ note }}
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import AtCard from './index'
export default AtCard
</script>
