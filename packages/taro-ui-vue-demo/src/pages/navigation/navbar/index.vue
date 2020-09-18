<template>
  <view class="page">
    <DocsHeader title="NavBar 导航栏"></DocsHeader>

    <view class="doc-body">
      <!-- 基础用法 -->
      <view class="panel">
        <view class="panel__title">基础用法</view>
        <view class="panel__content no-padding">
          <view class="example-item">
            <AtNavBar
              :onClickLeftIcon="handleClick.bind(this, '返回')"
              title="NavBar 导航栏示例"
              leftIconType="chevron-left"
            />
          </view>
          <view class="example-item">
            <AtNavBar
              :onClickLeftIcon="handleClick.bind(this, '返回')"
              title="NavBar 导航栏示例"
              leftIconType="chevron-left"
              rightFirstIconType="bullet-list"
              rightSecondIconType="user"
            />
          </view>
          <view class="example-item">
            <AtNavBar
              :onClickLeftIcon="handleClick.bind(this, '返回')"
              title="NavBar 导航栏示例"
              leftIconType="chevron-left"
              rightFirstIconType="user"
            />
          </view>
        </view>
      </view>

      <!-- 自定义左上角文案 -->
      <view class="panel">
        <view class="panel__title">自定义左上角文案</view>
        <view class="panel__content no-padding">
          <view class="example-item">
            <AtNavBar
              :onClickLeftIcon="handleClick.bind(this, '返回')"
              title="NavBar 导航栏示例"
              leftText="返回"
              leftIconType="chevron-left"
              rightFirstIconType="bullet-list"
              rightSecondIconType="user"
            />
          </view>
          <view class="example-item">
            <AtNavBar
              :onClickLeftIcon="handleClick.bind(this, '返回')"
              title="NavBar 导航栏示例"
              leftText="返回"
              rightFirstIconType="bullet-list"
              rightSecondIconType="user"
            />
          </view>
        </view>
      </view>

      <!-- 自定义颜色 -->
      <view class="panel">
        <view class="panel__title">自定义颜色</view>
        <view class="panel__content no-padding">
          <AtNavBar
            :onClickRgIconSt="clickList.bind(this)"
            :onClickRgIconNd="clickMy.bind(this)"
            :onClickLeftIcon="clickReturn.bind(this)"
            color="#333"
            title="NavBar 导航栏示例"
            leftText="返回"
            rightFirstIconType="bullet-list"
            rightSecondIconType="user"
          />
        </view>
      </view>

      <!-- 自定义图标样式 -->
      <view class="panel">
        <view class="panel__title">自定义图标样式</view>
        <view class="panel__content no-padding">
          <AtNavBar
            :onClickRgIconSt="clickList.bind(this)"
            :onClickRgIconNd="clickMy.bind(this)"
            :onClickLeftIcon="clickReturn.bind(this)"
            color="#333"
            title="NavBar 导航栏示例"
            leftText="返回"
            rightFirstIconType="bullet-list"
            :rightSecondIconType="{ value: 'user', size: 18, color: 'red' }"
          />
        </view>
      </view>

      <!-- 无下划线 -->
      <view class="panel">
        <view class="panel__title">无下划线</view>
        <view class="panel__content no-padding">
          <AtNavBar
            :border="false"
            :onClickRgIconSt="clickList.bind(this)"
            :onClickRgIconNd="clickMy.bind(this)"
            :onClickLeftIcon="clickReturn.bind(this)"
            color="#333"
            title="NavBar 导航栏示例"
            leftText="返回"
            rightFirstIconType="bullet-list"
            rightSecondIconType="user"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import './index.scss'
export default {
  name: 'NavbarPage',
  data() {
    return {}
  },
  methods: {
    handleClick(title) {
      Taro.showToast({
        title,
        duration: 2000,
        icon: 'success',
      })
    },

    clickReturn() {
      Taro.showToast({
        title: '返回',
        duration: 2000,
        icon: 'success',
      })
    },

    clickMy() {
      Taro.showToast({
        title: '我的',
        duration: 2000,
        icon: 'success',
      })
    },

    clickList() {
      Taro.showToast({
        title: '功能列表',
        duration: 2000,
        icon: 'success',
      })
    },
  },
}
</script>
