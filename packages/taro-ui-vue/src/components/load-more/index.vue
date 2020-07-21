<template>
  <view
    :class="classNames('at-load-more', className)"
    :style="customStyle"
  >
    <AtActivityIndicator
      v-if="status === 'loading'"
      mode="center"
      :content="loadingText"
    />
    <view
      v-else-if="status === 'more'"
      class="at-load-more__cnt"
    >
      <AtButton
        full
        :custom-style="moreBtnStyle"
        :on-tap="onClick"
        :on-click="onClick"
      >
        {{ moreText }}
      </AtButton>
    </view>
    <view
      v-else
      class="at-load-more__tip"
      :style="noMoreTextStyle"
    >
      {{ noMoreText }}
    </view>
  </view>
</template>
<script lang="ts">
import AtLoadMore from './main'
export default AtLoadMore
</script>