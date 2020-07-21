<template>
  <view :class="rootClass">
    <view class="at-activity-indicator__body">
      <AtLoading
        :size="size"
        :color="color"
      />
    </view>
    <view
      v-if="content"
      class="at-activity-indicator__content"
    >
      {{ content }}
    </view>
  </view>
</template>

<script lang="ts">
import AtActivityIndicator from './index'
export default AtActivityIndicator
</script>
