<template>
  <view class="page">
    <!-- S Header -->
    <DocsHeader title="NoticeBar 通告栏"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class="doc-body">
      <!-- 文字 -->
      <view class="panel">
        <view class="panel__title">文字</view>
        <view class="panel__content">
          <view class="bar-item">
            <AtNoticebar single>
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
          <view class="bar-item">
            <AtNoticebar>
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
        </view>
      </view>

      <!-- 跑马灯 -->
      <view class="panel">
        <view class="panel__title">跑马灯</view>
        <view class="panel__content">
          <view class="bar-item">
            <AtNoticebar marquee>
              [纯文字]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
            </AtNoticebar>
          </view>
          <view class="bar-item">
            <AtNoticebar marquee icon="volume-plus">
              [带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
            </AtNoticebar>
          </view>
          <view class="bar-item">
            <AtNoticebar marquee>
              [超长文本]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
            </AtNoticebar>
          </view>
        </view>
      </view>

      <!-- 图标 -->
      <view class="panel">
        <view class="panel__title">图标</view>
        <view class="panel__content">
          <view class="bar-item">
            <AtNoticebar icon="volume-plus" single>
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
          <view class="bar-item">
            <AtNoticebar icon="volume-plus">
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
        </view>
      </view>

      <!-- 查看更多 -->
      <view class="panel">
        <view class="panel__title">查看更多</view>
        <view class="panel__content">
          <view class="bar-item">
            <AtNoticebar showMore single :onGotoMore="onGotoMore">
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
          <view class="bar-item">
            <AtNoticebar
              showMore
              icon="volume-plus"
              single
              :onGotoMore="onGotoMore"
            >
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
          <view class="bar-item">
            <AtNoticebar showMore moreText="更多内容" :onGotoMore="onGotoMore">
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
          <view class="bar-item">
            <AtNoticebar
              showMore
              moreText="更多内容"
              icon="volume-plus"
              :onGotoMore="onGotoMore"
            >
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
        </view>
      </view>

      <!-- 关闭按钮 -->
      <view class="panel">
        <view class="panel__title">关闭按钮</view>
        <view class="panel__content">
          <view class="bar-item">
            <AtNoticebar close single>
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
          <view class="bar-item">
            <AtNoticebar close icon="volume-plus" single>
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
          <view class="bar-item">
            <AtNoticebar close :onGotoMore="onGotoMore" single showMore>
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
          <view class="bar-item">
            <AtNoticebar
              close
              icon="volume-plus"
              showMore
              :onGotoMore="onGotoMore"
              single
            >
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
          <view class="bar-item">
            <AtNoticebar close>
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
          <view class="bar-item">
            <AtNoticebar close>
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
          <view class="bar-item">
            <AtNoticebar close icon="volume-plus">
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </AtNoticebar>
          </view>
        </view>
      </view>
    </view>
    <!-- E Body -->
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import './index.scss'
export default {
  name: 'NoticebarPage',
  methods: {
    onGotoMore() {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        alert('您点击了更多!')
        return
      }

      Taro.showModal({
        content: '点击了更多!',
        cancelText: '取消',
      })
    },
  },
}
</script>
