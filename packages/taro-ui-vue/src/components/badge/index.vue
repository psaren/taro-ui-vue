<template>
  <view
    :class="classNames(rootClassName, className)"
    :style="customStyle"
  >
    <slot />
    <view
      v-if="dot"
      class="at-badge__dot"
    />
    <view v-if="!dot && val">
      <view class="at-badge__num">
        {{ val }}
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import AtBadge from './index'
export default AtBadge
</script>