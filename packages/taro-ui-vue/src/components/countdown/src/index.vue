<template>
  <view
    :class="classNames(
      {
        'at-countdown': true,
        'at-countdown--card': isCard,
      },
      className
    )"
    :style="customStyle"
  >
    <AtCountdownItem
      v-if="isShowDay"
      :num="state.day"
      :separator="format.day"
    />
    <AtCountdownItem
      v-if="isShowHour"
      :num="state.hours"
      :separator="format.hours"
    />
    <AtCountdownItem
      :num="state.minutes"
      :separator="format.minutes"
    />
    <AtCountdownItem
      :num="state.seconds"
      :separator="format.seconds"
    />
  </view>
</template>

<script>
import AtCountdown from './main'
export default AtCountdown
</script>
