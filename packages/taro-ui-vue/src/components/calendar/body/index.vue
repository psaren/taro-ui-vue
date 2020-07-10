<template>
  <view>
    <view
      v-if="isSwiper"
      :class="getCls()">
      <AtCalendarDayList />
      <view class="main__body body">
        <view class="body__slider body__slider--now">
          <AtCalendarDateList
            :list="listGroup[1].list"
            :on-click="onDayClick"
            :on-long-click="onLongClick"
          />
        </view>
      </view>
    </view>
    <view
      v-else
      :class="getCls">
      <AtCalendarDayList />
      <swiper
        circular
        :current="1"
        skipHiddenItemLayout
        class="main__body"
        :vertical="isVertical"
        :on-change="handleChange"
        :on-animation-finish="handleAnimateFinish"
        :on-touch-end="handleSwipeTouchEnd"
        :on-touch-start="handleSwipeTouchStart"
      >
        <swiper-item 
          v-for="(item, key) in listGroup" 
          :key="item.value" 
          :itemId="key.toString()">
          <AtCalendarDateList
            :list="item.list"
            :on-click="onDayClick"
            :on-long-click="onLongClick"
          />
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>
<script lang="ts">
import AtCalendarBody from './index';
export default AtCalendarBody
</script>