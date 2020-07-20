<template>
	<view
			:class="classNames(
				{
					'at-countdown': true,
					'at-countdown--card': isCard,
				},
				className
			)"
			:style="customStyle">
			{{isShowDay && <AtCountdownItem num={day} separator={format.day} />}}
			{{isShowHour && <AtCountdownItem num={hours} separator={format.hours} />}}
			<AtCountdownItem num={minutes} separator={format.minutes} />
			<AtCountdownItem num={seconds} separator={format.seconds} />
		</view>
</template>

<script>
import AtCountdown from './index'
export default AtCountdown
</script>
