<template>
  <view>
    <AtFab
      :on-click="handleClick"
      @tap="handleClick"
    >
      fab
    </AtFab>
    <AtBadge dot>
      <AtButton loading>
        按钮文字
      </AtButton>
    </AtBadge>
    <AtCountdown :hours="25" />
    <AtIcon
      value="clock"
      size="30"
      color="#F92"
    />
    <view><AtLoading size="30"></AtLoading></view>
    <AtInput
      name="value"
      title="标准五个字"
      type="text"
      placeholder="标准五个字"
      error
    />
    <AtSwipeAction :on-click="handleClick" :options="OPTIONS">
      <view class='normal'>AtSwipeAction 一般使用场景</view>
    </AtSwipeAction>
    <InputNumber v-model="inputNumber"></InputNumber>
    <AtAccordion
      title="标题三"
      :open="open"
      :on-click="clickAccordion"
    >
      <AtList
        :has-border="false"
      >
        <AtListItem
          title="标题文字"
          arrow="right"
          thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
        />
        <AtListItem
          title="标题文字"
          note="描述信息"
          arrow="right"
          thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
        />
        <AtListItem
          title="标题文字"
          note="描述信息"
          extra-text="详细信息"
          arrow="right"
          thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
        />
      </AtList>
    </AtAccordion>
    <AtCalendar />
    <AtTag
      type="primary"
      circle
      :on-click="handleClick"
    >
      index page
    </AtTag>
    <button
      open-type="getPhoneNumber"
      @getphonenumber="handleUserInfo"
    >
      getUserInfo
    </button>
    <AtButton
      open-type="getUserInfo"
      :on-get-user-info="handleUserInfo"
    >
      getPhoneNumber
    </AtButton>
    <form />
    <AtNoticebar marquee>
      这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
    </AtNoticebar>
  </view>
</template>
<script>
import Taro from '@tarojs/taro'
import AtLoading from '../../components/loading/index.vue'
import InputNumber from '../../components/input-number/index.vue'
const OPTIONS = [
  {
    text: '删除',
    style: {
      color: '#333',
      backgroundColor: '#F7F7F7'
    }
  },
  {
    text: '确认',
    style: {
      backgroundColor: '#E93B3D'
    }
  }
]
export default {
  data() {
    return {
      OPTIONS,
      date: '',
      open: false,
      inputNumber: 10
    }
  },
  components: {
    AtLoading,
    InputNumber,
  },
  methods: {
    bindDateChange: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.date = e.detail.value
    },
    handleClick() {
      console.log(123)
      // Taro.navigateTo({url: '/pages/index/index'})
      //   .then(() => {
      //     console.log('success')
      //   })
    },
    handleUserInfo(e) {
      console.log('handleUserInfo', e)
    },
    clickAccordion() {
      this.open = !this.open
    },
    clickFab(e) {
      console.log('clickFab', e)
    }
  }
}
</script>
