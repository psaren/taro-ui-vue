<template>
  <view>
    <view
      v-if="!isSwiper"
      :class="getCls()">
      <AtCalendarDayList />
      <view class="main__body body">
        <view class="body__slider body__slider--now">
          <AtCalendarDateList
            :list="state.listGroup[1].list"
            :on-click="onDayClick"
            :on-long-click="onLongClick"
          ></AtCalendarDateList>
        </view>
      </view>
    </view>
    <view
      v-if="isH5"
      :class="h5CalendarBody"
      @touchend="handleTouchEnd"
      @touchmove="handleTouchMove"
      @touchstart="handleTouchStart"
    >
      <AtCalendarDayList />
      <view
        :class="h5CalendarMainBodyCls"
        :style="h5CalendarMainBodyStyle"
      >
        <view class='body__slider body__slider--pre'>
          <AtCalendarDateList 
            :key="state.listGroup[0].value" 
            :list="state.listGroup.length ? state.listGroup[0].list : []" 
          />
        </view>
        <view class='body__slider body__slider--now'>
          <AtCalendarDateList
            :key="state.listGroup[1].value"
            :list="state.listGroup.length ? state.listGroup[1].list : []"
            :on-click="onDayClick"
            :on-long-click="onLongClick"
          />
        </view>
        <view class='body__slider body__slider--next'>
          <AtCalendarDateList 
            :key="state.listGroup[2].value"
            :list="state.listGroup.length ? state.listGroup[2].list : []" 
          />
        </view>
      </view>
    </view>
    <view
      v-if="isSwiper && !isH5"
      :class="swiperCls">
      <AtCalendarDayList />
      <swiper
        circular
        :current="1"
        skipHiddenItemLayout
        class="main__body"
        :vertical="isVertical"
        @change="handleChange"
        @animationfinish="handleAnimateFinish"
        @touchend="handleSwipeTouchEnd"
        @touchstart="handleSwipeTouchStart"
      >
        <swiper-item 
          v-for="(item, key) in state.listGroup"
          :key="key.toString()" 
          :itemId="key.toString()">
          <AtCalendarDateList
            :key="item.value" 
            :list="item.list"
            :on-click="onDayClick"
            :on-long-click="onLongClick"
          />
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>
<script>
import AtCalendarBody from './index';
import AtCalendarDateList from '../ui/date-list/index.vue'
import AtCalendarDayList from '../ui/day-list/index.vue'
export default {
  name: 'AtCalendarBody',
  mixins: [AtCalendarBody],
  components: {
    AtCalendarDateList,
    AtCalendarDayList,
  },
}
</script>