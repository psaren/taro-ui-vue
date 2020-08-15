# Swiper 滑动视图容器

---

滑块视图容器，常用于走马灯、轮播图

## 使用指南

无需引入，直接在 vue template 中使用 swiper, swiper-item  

## 示例

:::demo
``` vue
<template>
  <view>
    <swiper
      class='test-h'
      indicatorColor='#999'
      indicatorActiveColor='#333'
      current="current"
      :duration="duration"
      :interval="interval"
      :circular="isCircular"
      :autoplay="isAutoplay"
      :indicatorDots="hasIndicatorDots">
      <swiper-item v-for="(item, idx) in imgUrls" :key="idx">
        <image :src="item" class="slide-image" />
      </swiper-item>
    </swiper>
  </view>
</template>
<script>
export default {
  name: 'SwiperDemo',
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
  }
}
</script>
```
:::

## [Swiper 参数](https://taro-docs.jd.com/taro/docs/components/viewcontainer/swiper/) 

| 微信 | H5 | 参数     | 说明                         | 类型    | 可选值                 | 默认值   |
|:-----|:---|:---------|:-----------------------------|:--------|:-----------------------|:---------|
| √    | √  | indicatorDots     | 是否显示面板指示点  | Boolean | - | false |
| √    | √  | indicatorColor     | 指示点颜色 | String  | -  | `rgba(0, 0, 0, .3)` |
| √    | √  | indicatorActiveColor   | 当前选中的指示点颜色 | String  | -  | `000` |
| √    | √  | autoplay   | 是否自动切换 | Boolean  | -  | false |
| √    | √  | interval   | 自动切换时间间隔 | Number  | -  | 5000 |
| √    | √  | duration   | 	滑动动画时长 | Number  | -  | 500 |
| √    | √  | current   | 	当前所在滑块的 index | Number  | -  | 0 |
| √    | √  | circular | 是否采用衔接滑动 | Boolean | -  | false |
| √    |   | skipHiddenItemLayout | 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息 | Boolean | -  | false |
| √    |   | displayMultipleItems | 同时显示的滑块数量 | Number | -  | 1 |
| √    |   | vertical | 滑动方向是否为纵向 | Boolean | -  | false |
| √    | √  | onChange | current 改变时会触发 change 事件 | EventHandle | -  | - |
| √    |   | onAnimationfinish | 动画结束时会触发 animationfinish 事件 | EventHandle | -  | - |
