<template>
  <view class='page' style='height: 100vh;'>
    <!-- 基础用法 -->
    <view style='height: 100%;'>
      <AtIndexes
        :list="mockData"
        topKey='Top'
        :onClick="onClick"
        :onScrollIntoview="handleScroll"
      >
        <view class='custom-area'>
          用户自定义内容
          <AtSearchBar
            :value="value"
            :onChange="handleChange"
            placeholder='跳转到指定Key'
            :onActionClick="handleActionClick"
          />
        </view>
      </AtIndexes>
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import mockData from './mock-data'
import './index.scss'

export default {
  name: 'IndexesPage',
  data() {
    return {
      value: '',
      mockData
    }
  },
  methods: {
    scrollIntoView(key) {
      Taro.showToast({
        title: `scrollIntoView: ${key}`,
        icon: 'none'
      })
    },

    onClick(item) {
      Taro.showToast({
        title: `onClick: ${item}`,
        icon: 'none'
      })
    },

    handleActionClick() {
      if (!this.value) {
        return
      }
      this.value = ''
      this.scrollIntoView && this.scrollIntoView(this.value.toUpperCase())
    },

    handleChange(value) {
      this.value = value
    },

    handleScroll(fn) {
      this.scrollIntoview = fn
    }
  },
}
</script>