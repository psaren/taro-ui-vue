<template>
  <view :class="classNames('at-calendar', className)">
    <AtCalendarController
      :min-date="minDate"
      :max-date="maxDate"
      :hide-arrow="hideArrow"
      :month-format="monthFormat"
      :generate-date="state.generateDate"
      :on-pre-month="handleClickPreMonth"
      :on-next-month="handleClickNextMonth"
      :on-select-date="handleSelectDate"
    />
    <AtCalendarBody
      :valid-dates="validDates"
      :marks="marks"
      :format="format"
      :min-date="minDate"
      :max-date="maxDate"
      :is-swiper="isSwiper"
      :is-vertical="isVertical"
      :selected-date="state.selectedDate"
      :selected-dates="selectedDates"
      :generate-date="state.generateDate"
      :on-day-click="handleDayClick"
      :on-swipe-month="setMonth"
      :on-long-click="handleDayLongClick"
    />
  </view>
</template>

<script>
import AtCalendarBody from './body/index.vue'
import AtCalendarController from './controller/index.vue'
import AtCalendar from './index'
export default {
  name: 'AtCalendar',
  mixins: [AtCalendar],
  components: {
    AtCalendarBody,
    AtCalendarController
  }
}
</script>