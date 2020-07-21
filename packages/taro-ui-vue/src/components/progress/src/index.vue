
<template>
  <view :class="rootClass(status)">
    <view class="at-progress__outer">
      <view class="at-progress__outer-inner">
        <view
          class="at-progress__outer-inner-background"
          :style="progressStyle"
        />
      </view>
    </view>
    <view
      v-if="!isHidePercent"
      class="at-progress__content"
    >
      <View v-if="!status || status === 'progress'">
        {{ `${percent}%` }}
      </View>
      <View v-else>
        <view :class="iconClass()" />
      </View>
    </view>
  </view>
</template>

<script>
import AtProgress from './main'
export default AtProgress
</script>