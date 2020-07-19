<template>
  <view class='page'>
    <!-- S Header -->
    <DocsHeader title='CountDown 倒计时'></DocsHeader>
    <!-- E Header -->
    <!-- S Body -->
    <view class='doc-body'>
      <!-- 一般用法 -->
      <view class='panel'>
        <view class='panel__title'>一般用法</view>
        <view class='panel__content'>
          <AtCountdown :minutes="1" :seconds="10" />
        </view>
        <view class='panel__content'>
          <AtCountdown :hours="48" :minutes="0" :seconds="3" />
        </view>
        <view class='panel__content'>
          <AtCountdown isShowDay :hours="1" :minutes="1" :seconds="10" />
        </view>
        <view class='panel__content'>
          <AtCountdown :isShowHour="false" :minutes="1" :seconds="10" />
        </view>
      </view>

      <!-- 自定义格式化 -->
      <view class='panel'>
        <view class='panel__title'>自定义格式化</view>
        <view class='panel__content'>
          <AtCountdown
            :format="{ hours: ':', minutes: ':', seconds: '' }"
            :minutes="1"
            :seconds="10"
          />
        </view>
      </view>

      <!-- 卡片式 -->
      <view class='panel'>
        <view class='panel__title'>卡片式</view>
        <view class='panel__content'>
          <AtCountdown isCard :minutes="1" :seconds="10" />
        </view>
        <view class='panel__content'>
          <AtCountdown
            isCard
            isShowDay
            :day="1"
            :minutes="1"
            :seconds="10"
            :format="{ day: '天', hours: ':', minutes: ':', seconds: '' }"
          />
        </view>
      </view>

      <!-- 自定义倒计时回调事件 -->
      <view class='panel'>
        <view class='panel__title'>自定义倒计时回调事件</view>
        <view class='panel__content'>
          <AtCountdown
            :format="{ hours: ':', minutes: ':', seconds: '' }"
            :seconds="10"
            :onTimeUp="onTimeUp"
          />
        </view>
      </view>
    </view>
    <!-- E Body -->
  </view>
</template>
<script>
import Taro from '@tarojs/taro'
export default {
  name: 'CountdownPage',
  methods: {
    onTimeUp() {
      Taro.showToast({
        title: '时间到',
        icon: 'success',
        duration: 2000
      })
    }
  }
}
</script>