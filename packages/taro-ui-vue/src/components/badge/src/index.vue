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

<script>
import AtBadge from './main'
export default AtBadge
</script>