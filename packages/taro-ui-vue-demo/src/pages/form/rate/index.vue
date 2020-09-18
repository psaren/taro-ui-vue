<template>
  <view class="page">
    <!-- S Header -->
    <DocsHeader title="Rate 评分"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class="doc-body">
      <!-- 基础用法 -->
      <view class="panel">
        <view class="panel__title">基础用法</view>
        <view class="panel__content">
          <view class="example-item">
            <AtRate
              :value="rateValue1"
              :onChange="handleRateChange.bind(this, 'rateValue1')"
            />
          </view>
        </view>
      </view>

      <!-- 自定义尺寸 -->
      <view class="panel">
        <view class="panel__title">自定义尺寸</view>
        <view class="panel__content">
          <view class="example-item">
            <AtRate
              :size="16"
              :value="rateValue2"
              :onChange="handleRateChange.bind(this, 'rateValue2')"
            />
          </view>
        </view>
      </view>

      <!-- 自定义评分数 -->
      <view class="panel">
        <view class="panel__title">自定义评分数</view>
        <view class="panel__content">
          <view class="example-item">
            <AtRate
              :max="10"
              :value="rateValue3"
              :onChange="handleRateChange.bind(this, 'rateValue3')"
            />
          </view>
        </view>
      </view>

      <!-- 自定义星星间隔 -->
      <view class="panel">
        <view class="panel__title">自定义星星间隔</view>
        <view class="panel__content">
          <view class="example-item">
            <AtRate
              :margin="15"
              :value="rateValue4"
              :onChange="handleRateChange.bind(this, 'rateValue4')"
            />
          </view>
        </view>
      </view>

      <!-- 只读 -->
      <view class="panel">
        <view class="panel__title">只读</view>
        <view class="panel__content">
          <view class="example-item">
            <view>评分: 3.5</view>
            <view>
              <AtRate :value="3.5" />
            </view>
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
  name: 'RatePage',
  data() {
    return {
      rateValue1: 3,
      rateValue2: 3,
      rateValue3: 3,
      rateValue4: 3,
    }
  },
  methods: {
    handleRateChange(stateName, value) {
      this[stateName] = value
    },
  },
}
</script>
