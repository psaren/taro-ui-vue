<template>
  <view class="page">
    <!-- S Header -->
    <DocsHeader title="SearchBar 搜索栏"></DocsHeader>
    <!-- E Header -->
    <!-- S Body -->
    <view class="doc-body">
      <!-- 基础用法 -->
      <view class="panel">
        <view class="panel__title">基础用法</view>
        <view class="panel__content no-padding">
          <view class="component-item">
            <AtSearchBar
              :value="value1"
              :onChange="onChange.bind(this, 'value1')"
              :onActionClick="onActionClick"
            />
          </view>
        </view>
      </view>

      <!-- 自定义按钮文字和点击事件 -->
      <view class="panel">
        <view class="panel__title">自定义按钮文字和点击事件</view>
        <view class="panel__content no-padding">
          <view class="component-item">
            <AtSearchBar
              actionName="搜一下"
              :value="value2"
              :onChange="onChange.bind(this, 'value2')"
              :onActionClick="onActionClick"
            />
          </view>
        </view>
      </view>

      <!-- 始终显示按钮 -->
      <view class="panel">
        <view class="panel__title">始终显示按钮</view>
        <view class="panel__content no-padding">
          <view class="component-item">
            <AtSearchBar
              placeholder="请输入ISBN号"
              showActionButton
              :value="value3"
              :onChange="onChange.bind(this, 'value3')"
              :onActionClick="onActionClick"
            />
          </view>
        </view>
      </view>

      <!-- 自定义输入框类型 -->
      <view class="panel">
        <view class="panel__title">自定义输入框类型</view>
        <view class="panel__content no-padding">
          <view class="component-item">
            <AtSearchBar
              placeholder="请输入数字"
              inputType="number"
              :value="value4"
              :onChange="onChange.bind(this, 'value4')"
              :onActionClick="onActionClick"
            />
          </view>
        </view>
      </view>
    </view>
    <!-- E Body -->
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
export default {
  name: 'SearchBarPage',
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
    }
  },
  methods: {
    onChange(stateName, value) {
      this[stateName] = value
    },
    onActionClick() {
      Taro.showToast({
        title: '开始搜索',
        icon: 'success',
        duration: 2000,
      })
    },
  },
}
</script>
