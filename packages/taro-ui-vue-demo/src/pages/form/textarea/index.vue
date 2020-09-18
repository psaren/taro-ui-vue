<template>
  <view class="page">
    <!-- S Header -->
    <DocsHeader title="Textarea 多行文本框"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class="doc-body">
      <view class="panel">
        <view class="panel__title">基础</view>
        <view class="panel__content">
          <view class="example-item">
            <AtTextarea
              :value="value1"
              :onChange="handleChange.bind(this, 'value1')"
              :maxLength="200"
              placeholder="你的问题是..."
            />
          </view>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title">不显示字数</view>
        <view class="panel__content">
          <view class="example-item">
            <AtTextarea
              :count="false"
              :value="value2"
              :onChange="handleChange.bind(this, 'value2')"
              :maxLength="200"
              placeholder="你的问题是..."
            />
          </view>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title">文字超出仍可输入</view>
        <view class="panel__content">
          <view class="example-item">
            <AtTextarea
              :textOverflowForbidden="false"
              :value="value3"
              :onChange="handleChange.bind(this, 'value3')"
              :maxLength="200"
              placeholder="你的问题是..."
            />
          </view>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title">自定义高度</view>
        <view class="panel__content">
          <view class="example-item">
            <AtTextarea
              height="300"
              :value="value4"
              :onChange="handleChange.bind(this, 'value4')"
              :maxLength="200"
              placeholder="你的问题是..."
            />
          </view>
        </view>
      </view>
    </view>
    <!-- E Body -->
  </view>
</template>

<script>
export default {
  name: 'TextareaPage',
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
    }
  },
  methods: {
    handleChange(stateName, value) {
      this[stateName] = value
    },
  },
}
</script>
