<template>
  <view class='page'>
    <!-- S Header -->
    <DocsHeader title='Picker view 滚动选择器'></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class='doc-body'>
      <!-- 基础用法 -->
      <view class='panel'>
        <view class='panel__title'>基础用法</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view class='example-item__desc'>嵌入页面的滑动选择器</view>
            <view v-if="isWeapp || isAlipay">
                <view class='title-date'>
                  {{ year }}年{{ month }}月{{ day }}日
                </view>
                <Pickerview
                  indicatorStyle='height: 50px;'
                  class='picker'
                  style='width: 100%; height: 300px; text-align: center;'
                  :value="state.value"
                  :onChange="handleChange"
                >
                  <PickerviewColumn>
                    <view v-if="(item, idx) in state.years" :key="idx" style='line-height: 50px'>
                      {{ item }}年
                    </view>
                  </PickerviewColumn>
                  <PickerviewColumn>
                    <view v-if="(item, idx) in state.months" :key="idx" style='line-height: 50px'>
                      {{ item }}月
                    </view>
                  </PickerviewColumn>
                  <PickerviewColumn>
                    <view v-if="(item, idx) in state.days" style='line-height: 50px'>
                      {{ item }}日
                    </view>
                  </PickerviewColumn>
                </Pickerview>
              </view>
            <view v-else class='title-date'>暂时仅支持微信小程序</view>
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

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}
for (let i = 1; i <= 12; i++) {
  months.push(i)
}
for (let i = 1; i <= 31; i++) {
  days.push(i)
}

export default {
  name: 'PickerViewPage',
  mixins: [setStateMixin],
  mounted() {
    const env = Taro.getEnv()
    this.isWeapp = env === Taro.ENV_TYPE.WEAPP
    this.isAlipay = env === Taro.ENV_TYPE.ALIPAY
  },
  data() {
    return {
      isWeapp: false,
      isAlipay: false,
        state: {
        years,
        year: date.getFullYear(),
        months,
        month: 2,
        days,
        day: 2,
        value: [9999, 5, 17],
      }
    }
  },
  methods: {
    handleChange(e) {
      const val = e.detail.value

      this.setState({
        year: this.state.years[val[0]],
        month: this.state.months[val[1]],
        day: this.state.days[val[2]],
        value: val
      })
    }
  }

}
</script>