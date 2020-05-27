import Vue from 'vue'

const AtCalendarDayList = Vue.extend({
  name: 'AtCalendarDayList',
  data() {
    return {
      options: { addGlobalClass: true }
    }
  },
  render(h) {
    return (
      <view class='at-calendar__header header'>
        <view class='header__flex'>
          <view class='header__flex-item'>日</view>
          <view class='header__flex-item'>一</view>
          <view class='header__flex-item'>二</view>
          <view class='header__flex-item'>三</view>
          <view class='header__flex-item'>四</view>
          <view class='header__flex-item'>五</view>
          <view class='header__flex-item'>六</view>
        </view>
      </view>
    )
  }
})
export default AtCalendarDayList
