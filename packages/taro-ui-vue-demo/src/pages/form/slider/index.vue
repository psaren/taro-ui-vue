<template>
  <view class='page'>
    <!-- S Header -->
    <DocsHeader title='Slider 滑动条'></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class='doc-body'>
      <!-- 基础用法 -->
      <view class='panel'>
        <view class='panel__title'>基础用法</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view class='example-item__desc'>step=1</view>
            <AtSlider :step="1" :value="50"></AtSlider>
          </view>
        </view>
      </view>

      <!-- 显示当前 Value -->
      <view class='panel'>
        <view class='panel__title'>显示当前 Value</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view class='example-item__desc'>step=1</view>
            <AtSlider :step="1" :value="50" showValue></AtSlider>
          </view>
        </view>
      </view>

      <!-- 设置最大/最小值 -->
      <view class='panel'>
        <view class='panel__title'>设置最大/最小值</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view class='example-item__desc'>
              step=1, min=50, max=200
            </view>
            <AtSlider
              :step="1"
              :value="100"
              :min="50"
              :max="200"
              showValue
            ></AtSlider>
          </view>
        </view>
      </view>

      <!-- 自定义样式 -->
      <view class='panel'>
        <view class='panel__title'>自定义样式</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view class='example-item__desc'>step=1, blockSize=24</view>
            <AtSlider
              :step="1"
              :value="50"
              activeColor='#4285F4'
              backgroundColor='#BDBDBD'
              blockColor='#4285F4'
              :blockSize="24"
            ></AtSlider>
          </view>
        </view>
      </view>

      <!-- 禁用状态 -->
      <view class='panel'>
        <view class='panel__title'>禁用状态</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view class='example-item__desc'>step=1, blockSize=24</view>
            <AtSlider :step="1" :value="50" showValue disabled></AtSlider>
          </view>
        </view>
      </view>
    </view>
    <!-- E Body -->
  </view>
</template>

<script>
import './index.scss'
export default {
  name: 'SliderPage',
}
</script>