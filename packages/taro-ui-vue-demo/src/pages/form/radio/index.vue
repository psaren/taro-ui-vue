<template>
  <view class="page">
    <!-- S Header -->
    <DocsHeader title="Radio 单选框"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class="doc-body">
      <!-- 基础用法 -->
      <view class="panel">
        <view class="panel__title">基础用法</view>
        <view class="panel__content no-padding">
          <view class="radio-container">
            <AtRadio
              :options="radioOptions1"
              :value="radioValue1"
              :onClick="handleRadioChange"
            />
          </view>
        </view>
      </view>

      <!-- 含有单项描述 -->
      <view class="panel">
        <view class="panel__title">含有单项描述</view>
        <view class="panel__content no-padding">
          <view class="radio-container">
            <AtRadio
              :options="radioOptions2"
              :value="radioValue2"
              :onClick="handleRadioChangeScnd"
            />
          </view>
        </view>
      </view>

      <!-- 单项禁用 -->
      <view class="panel">
        <view class="panel__title">单项禁用</view>
        <view class="panel__content no-padding">
          <view class="radio-container">
            <AtRadio
              :options="radioOptions3"
              :value="radioValue3"
              :onClick="handleRadioChangeThd"
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
  name: 'RadioPage',
  data() {
    return {
      radioValue1: 'option1',
      radioValue2: 'option1',
      radioValue3: 'option3',
      radioOptions1: [
        { label: '单选项一', value: 'option1' },
        { label: '单选项二', value: 'option2' },
        { label: '单选项三', value: 'option3' },
      ],
      radioOptions2: [
        { label: '单选项一', value: 'option1', desc: '单选项描述一' },
        { label: '单选项二', value: 'option2', desc: '单选项描述二' },
        { label: '单选项三', value: 'option3', desc: '单选项描述三' },
      ],
      radioOptions3: [
        { label: '单选项一', value: 'option1', desc: '单选项描述' },
        { label: '单选项二', value: 'option2' },
        {
          label: '单选项三禁用',
          value: 'option3',
          desc: '单选项描述',
          disabled: true,
        },
      ],
    }
  },
  methods: {
    handleRadioChange(value) {
      this.radioValue1 = value
    },

    handleRadioChangeScnd(value) {
      this.radioValue2 = value
    },

    handleRadioChangeThd(value) {
      this.radioValue3 = value
    },
  },
}
</script>
