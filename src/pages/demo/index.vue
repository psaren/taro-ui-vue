<template>
  <view>
    <text>demo</text>
    <view>view</view>
    <AtIcon
      value="clock"
      size="30"
      color="#F00"
    />
    <AtCalendar />
    <AtTag
      type="primary"
      circle
      :on-click="handleClick"
    >
      index page
    </AtTag>
    <button open-type="getUserInfo">
      getUserInfo
    </button>
    <AtButton open-type="getUserInfo">
      getUserInfo
    </AtButton>
    <!-- <picker
      mode="date"
      :value="date"
      start="2015-09-01"
      end="2017-09-01"
      @change="bindDateChange"
    >
      <view class="picker">
        当前选择: {{ date }}
      </view>
    </picker> -->
  </view>
</template>
<script>
import Taro from '@tarojs/taro'
import { AtCalendar } from '../../components'
import { AtIcon, AtTag, AtButton } from '../../components'
export default {
  components: {
    AtCalendar,
    AtIcon,
    AtTag,
    AtButton
  },
  data() {
    return {
      date: ''
    }
  },
  methods: {
    bindDateChange: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.date = e.detail.value
    },
    handleClick() {
      Taro.navigateTo({url: '/pages/index/index'})
        .then(() => {
          console.log('success')
        })
    }
  }
}
</script>
