<template>
  <view class="at-calendar__controller controller">
    <view
      v-if="!hideArrow"
      :class="getLeftArrowCls()"
      @tap="onPreMonth(isMinMonth)"
    />
    <picker
      mode="date"
      fields="month"
      :end="maxDateValue"
      :start="minDateValue"
      @change="onSelectDate"
      :value="dayjsDate.format('YYYY-MM')"
    >
      <text class="controller__info">
        {{ dayjsDate.format(monthFormat) }}
      </text>
    </picker>
    <view
      v-if="!hideArrow"
      :class="getRightArrowCls()"
      @tap="onNextMonth(isMaxMonth)"
    />
  </view>
</template>
<script>
import AtCalendarController from './index'
export default {
  name: 'AtCalendarController',
  mixins: [AtCalendarController],
}
</script>
