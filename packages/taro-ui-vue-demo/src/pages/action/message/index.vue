<template>
  <view class='page toast-page'>
    <!-- S Header -->
    <DocsHeader title='Message 消息通知' />
    <!-- E Header -->

    <!-- S Body -->
    <view class='doc-body'>
      <view class='panel'>
        <view class='panel__title'>基本案例</view>
        <view class='panel__content'>
          <view class='example-item'>
            <AtButton :on-click="handleClick.bind(this, '')">
              普通消息
            </AtButton>
          </view>
          <view class='example-item'>
            <AtButton :on-click="handleClick.bind(this, 'success')">
              成功消息
            </AtButton>
          </view>
          <view class='example-item'>
            <AtButton :on-click="handleClick.bind(this, 'error')">
              错误消息
            </AtButton>
          </view>
          <view class='example-item'>
            <AtButton :on-click="handleClick.bind(this, 'warning')">
              警告消息
            </AtButton>
          </view>
          <view class='example-item'>
            <AtButton :on-click="handleClick.bind(this, 'info')">
              提示消息
            </AtButton>
          </view>
        </view>
      </view>
    </view>
    <!-- E Body -->
    <AtMessage />
  </view>
</template>

<script lang="ts">
import Taro from '@tarojs/taro'
export default {
  name: 'ToastPage',
  methods: {
    handleClick(type) {
      Taro.atMessage({
        message: '消息通知',
        type
      })
    }
  }
}
</script>
<style lang="scss">
  @import './index.scss';
</style>