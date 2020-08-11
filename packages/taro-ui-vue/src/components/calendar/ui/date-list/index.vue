<template>
  <view v-if="list && list.length" class="at-calendar__list flex">
    <view
      v-for="(item, index) in list"
      :key="`list-item-${item.value}-${index}`"
      @tap="handleClick(item)"
      @longPress="handleLongClick(item)"
      :class="getCls(item)"
    >
      <view class="flex__item-container">
        <view class="container-text">{{ item.text }}</view>
      </view>
      <view class="flex__item-extra extra">
        <view v-if="item.marks && item.marks.length" class="extra-marks">
          <text v-for="(mark, ikey) in item.marks" :key="ikey" class="mark">
            {{ mark }}
          </text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import AtCalendarList from './index'
export default AtCalendarList
</script>
