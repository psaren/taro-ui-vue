<template>
  <view class='page picker__page'>
    <!-- S Header -->
    <DocsHeader title='Picker 选择器'></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class='doc-body'>
      <!-- 普通选择器 -->
      <view class='panel'>
        <view class='panel__title'>普通选择器</view>
        <view class='panel__content'>
          <view class='example-item'>
            <picker
              mode='selector'
              :range="state.selector"
              :value="state.selectorValue"
              :onChange="handleChange"
            >
              <view class='demo-list-item'>
                <view class='demo-list-item__label'>国家地区</view>
                <view class='demo-list-item__value'>
                  {{ state.selector[state.selectorValue] }}
                </view>
              </view>
            </picker>
          </view>
        </view>
      </view>

      <!-- 多列选择器 -->
      <view v-if="isAlipay" class='panel'>
        <view class='panel__title'>多列选择器</view>
        <view class='panel__content'>
          <view class='example-item'>
            <picker
              mode='multiSelector'
              :range="state.multiSelector"
              :value="state.mulitSelectorValues"
              :onChange="handleMulitChange"
            >
              <view class='demo-list-item'>
                <view class='demo-list-item__label'>请选择早餐</view>
                <view class='demo-list-item__value'>{{
                  `${
                  state.multiSelector[0][state.mulitSelectorValues[0]]
                } & ${state.multiSelector[1][state.mulitSelectorValues[1]]}`
                  }}</view>
              </view>
            </picker>
          </view>
        </view>
      </view>

      <!-- 时间选择器 -->
      <view class='panel'>
        <view class='panel__title'>时间选择器</view>
        <view class='panel__content'>
          <view class='example-item'>
            <picker
              mode='time'
              :value="state.timeSel"
              :onChange="handleTimeChange"
            >
              <view class='demo-list-item'>
                <view class='demo-list-item__label'>请选择时间</view>
                <view class='demo-list-item__value'>{{ state.timeSel }}</view>
              </view>
            </picker>
          </view>
        </view>
      </view>

      <!-- 日期选择器 -->
      <view class='panel'>
        <view class='panel__title'>日期选择器</view>
        <view class='panel__content'>
          <view class='example-item'>
            <picker
              mode='date'
              :value="state.dateSel"
              :onChange="handleDateChange"
            >
              <view class='demo-list-item'>
                <view class='demo-list-item__label'>请选择日期</view>
                <view class='demo-list-item__value'>{{ state.dateSel }}</view>
              </view>
            </picker>
          </view>
        </view>
      </view>
    </view>
    <!-- E Body -->
  </view>
</template>

<script>
import setStateMixin from '../../../mixins/setStateMixin'
import './index.scss'
import Taro from '@tarojs/taro'

export default {
  name: 'PickerPage',
  mixins: [setStateMixin],
  mounted() {
    const env = Taro.getEnv()
    this.isAlipay = env === Taro.ENV_TYPE.ALIPAY
  },
  data() {
    return {
      isAlipay: false,
      state: {
        selector: ['中国', '美国', '巴西', '日本'],
        multiSelector: [
          ['饭', '粥', '粉'],
          ['猪肉', '牛肉']
        ],
        selectorValue: 0,
        mulitSelectorValues: [0, 1],
        timeSel: '06:18',
        dateSel: '2018-06-18',
      }
    }
  },
  methods: {
    handleChange (e) {
      this.setState({
        selectorValue: e.detail.value
      })
    },

    handleMulitChange (e) {
      this.setState({
        mulitSelectorValues: e.detail.value
      })
    },

    handleTimeChange (e) {
      this.setState({
        timeSel: e.detail.value
      })
    },

    handleDateChange (e) {
      this.setState({
        dateSel: e.detail.value
      })
    }
  }
}
</script>