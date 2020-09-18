<template>
  <view class="page">
    <!-- S Header -->
    <DocsHeader title="Swiper 滑块视图容器"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class="doc-body">
      <!-- 基础用法 -->
      <view class="panel">
        <view class="panel__title">基础用法</view>
        <view class="panel__content">
          <view class="example-item">
            <swiper
              indicatorColor="#999"
              indicatorActiveColor="#333"
              :current="current"
              :duration="duration"
              :interval="interval"
              :circular="isCircular"
              :autoplay="isAutoplay"
              :indicatorDots="hasIndicatorDots"
              previousMargin="20"
            >
              <swiper-item v-for="(item, idx) in imgUrls" :key="idx">
                <image :src="item" class="slide-image" />
              </swiper-item>
            </swiper>

            <view class="control-cnt">
              <AtList>
                <AtListItem
                  title="指示点"
                  :switchIsCheck="hasIndicatorDots"
                  isSwitch
                  :onSwitchChange="setIndicatorDots"
                />
                <AtListItem
                  title="自动播放"
                  :switchIsCheck="isAutoplay"
                  isSwitch
                  :onSwitchChange="setAutoPlay"
                />
                <AtListItem
                  title="循环播放"
                  :switchIsCheck="isCircular"
                  isSwitch
                  :onSwitchChange="setCircular"
                />
              </AtList>

              <view class="slider-list">
                <view class="slider-list__item">
                  <view class="slider-list__item-header">
                    <text>幻灯片切换时长(ms)</text>
                  </view>
                  <view class="slider-list__item-body">
                    <slider
                      activeColor="#6190e8"
                      showValue
                      :step="1"
                      :min="500"
                      :max="2000"
                      :value="duration"
                      :onChange="setDuration"
                    ></slider>
                  </view>
                </view>
                <view class="slider-list__item">
                  <view class="slider-list__item-header">
                    <text>自动播放间隔时长(ms)</text>
                  </view>
                  <view class="slider-list__item-body">
                    <slider
                      activeColor="#6190e8"
                      showValue
                      :step="1"
                      :min="2000"
                      :max="10000"
                      :value="interval"
                      :onChange="setInterval"
                    ></slider>
                  </view>
                </view>
              </view>
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
  name: 'SwiperPage',
  data() {
    return {
      current: 1,
      duration: 500,
      interval: 5000,
      isCircular: false,
      isAutoplay: false,
      hasIndicatorDots: true,
      imgUrls: [
        'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
        'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
        'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180',
      ],
    }
  },
  methods: {
    setAutoPlay(e) {
      this.isAutoplay = e.detail.value
    },

    setCircular(e) {
      this.isCircular = e.detail.value
    },

    setIndicatorDots(e) {
      this.hasIndicatorDots = e.detail.value
    },

    setInterval(e) {
      this.interval = e.detail.value
    },

    setDuration(e) {
      this.duration = e.detail.value
    },
  },
}
</script>
