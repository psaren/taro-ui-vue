<template>
  <view class='page'>
    <!-- S Header -->
    <DocsHeader title='Range 范围选择器'></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class='doc-body'>
      <!-- 基础用法 -->
      <view class='panel'>
        <view class='panel__title'>基础用法</view>
        <view class='panel__content'>
          <view class='example-item'>
            数值范围：{{ value1[0] }}~{{ value1[1] }}
          </view>
          <AtRange
            :min="30"
            :max="90"
            :value="value1"
            :onChange="handleChange.bind(this, 'value1')"
          />
        </view>
      </view>
      <!-- 自定义样式 -->
      <view class='panel'>
        <view class='panel__title'>自定义样式</view>
        <view class='panel__content'>
          <view class='example-item'>
            数值范围：{{value2[0]}}~{{value2[1]}}
          </view>
          <AtRange
            :sliderStyle="{ backgroundColor: '#6190E8' }"
            :value="value2"
            :onChange="handleChange.bind(this, 'value2')"
          />
        </view>
      </view>
      <!-- 禁止状态 -->
      <view class='panel'>
        <view class='panel__title'>禁止状态</view>
        <view class='panel__content'>
          <AtRange :value="[30, 50]" disabled />
        </view>
      </view>
    </view>
    <!-- E Body -->
  </view>
</template>

<script>
import './index.scss'
export default {
  name: 'RangePage',
  data() {
    return {
      value1: [50, 60],
      value2: [50, 60]
    }
  },
  methods: {
    handleChange(key, value) {
      this[key] = value
    }
  }
}
</script>