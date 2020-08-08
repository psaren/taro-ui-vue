<template>
  <view class="page calendar-page">
    <DocsHeader title="Calendar 日历" />

    <view class="doc-body">
      <view class="panel">
        <view class="panel__title">一般案例</view>
        <view class="panel__content">
          <AtCalendar :onMonthChange="handleMonthChange" />
        </view>
      </view>

      <view class="panel">
        <view class="panel__title">跳转到指定日期</view>
        <view class="panel__content">
          <AtCalendar :currentDate="state.now" />
          <view class="body_controllers">
            <AtButton
              size="small"
              :onClick="handleClick.bind(this, 'now', '2018/01/01')"
            >跳转到 2018/01/01</AtButton>
            <AtButton
              size="small"
              :onClick="handleClick.bind(this, 'now', '2018/06/18')"
            >跳转到 2018/6/18</AtButton>
          </view>
        </view>
      </view>

      <view class="panel">
        <view class="panel__title">指定最小日期和最大日期</view>
        <view class="panel__content">
          <AtCalendar
            :minDate="state.minDate"
            :maxDate="state.maxDate"
          />
          <view class="body_controllers">
            <AtButton
              size="small"
              :onClick="handleClick.bind(this, 'minDate', '2018/01/01')"
            >设置最小值 2018/1/1</AtButton>
            <AtButton
              size="small"
              :onClick="handleClick.bind(this, 'maxDate', '2019/12/31')"
            >设置最大值 2019/12/31</AtButton>
          </view>
        </view>
      </view>

      <view class="panel">
        <view class="panel__title">标记时间</view>
        <view class="panel__content">
          <AtCalendar :marks="state.mark" />
          <view class="body_controllers">
            <AtButton
              size="small"
              class="button"
              :onClick="handleClick.bind(this, 'mark', [
                {
                  value: Date.now()
                }
              ])"
            >标记当前时间</AtButton>
          </view>
        </view>
      </view>

      <view class="panel">
        <view class="panel__title">禁止滑动</view>
        <view class="panel__content">
          <AtCalendar :isSwiper="false" />
        </view>
      </view>

      <view class="panel">
        <view class="panel__title">垂直滑动</view>
        <view class="panel__content">
          <AtCalendar
            isVertical
            :onSelectDate="handleDateChange"
          />
        </view>
      </view>

      <view class="panel">
        <view class="panel__title">范围选择</view>
        <view class="panel__content">
          <AtCalendar
            :onSelectDate="handleDateChange"
            isMultiSelect
            :currentDate="state.multiCurentDate"
          />
          <view class="body_controllers">
            <AtButton
              size="small"
              class="button"
              :onClick="handleClick.bind(this, 'multiCurentDate', {
                start: '2018/10/28',
                end: '2018/11/11'
              })"
            >设置选择区间为 2018/10/28 - 2018/11/11</AtButton>
          </view>
        </view>
      </view>

      <view class="panel">
        <view class="panel__title">有效时间组</view>
        <view class="panel__content">
          <AtCalendar :validDates="state.validDates" />
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import CalenderPage from './main'
export default CalenderPage
</script>