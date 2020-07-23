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
import AtLoading from '../loading/index.vue'
import AtActivityIndicator from './index'
export default {
  name: 'AtActivityIndicator',
  mixins: [AtActivityIndicator],
  components: {
    AtLoading
  }
}
</script>
