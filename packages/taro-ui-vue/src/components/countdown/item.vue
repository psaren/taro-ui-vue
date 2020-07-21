<template>
  <view class="at-countdown__item">
    <view class="at-countdown__time-box">
      <view class="at-countdown__time">
        {{ num | formatNum }}
      </view>
    </view>
    <view class="at-countdown__separator">
      {{ separator }}
    </view>
  </view>
</template>

<script>
export default {
	name: 'AtCountdownItem',
  filters: {
    formatNum (num) {
			return num <= 9 ? `0${num}` : `${num}`
		}
  },
	props: {
    num: {
      type: Number,
      default: 0,
    },
    separator: {
      type: String,
      default: '',
    },
  }
}
</script>

<style>

</style>