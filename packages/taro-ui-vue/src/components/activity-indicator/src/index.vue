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

<script>
import AtActivityIndicator from './main'
export default AtActivityIndicator
</script>
