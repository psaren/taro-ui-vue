<template>
  <view class="page">
    <!-- S Header -->
    <DocsHeader title="Avatar 头像"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class="doc-body">
      <!-- 圆形头像 -->
      <view class="panel">
        <view class="panel__title">圆形头像</view>
        <view class="panel__content">
          <view class="example-item">
            <view class="subitem">
              <AtAvatar circle size="small" :image="avatarImg"></AtAvatar>
            </view>
            <view class="subitem">
              <AtAvatar circle :image="avatarImg"></AtAvatar>
            </view>
            <view class="subitem">
              <AtAvatar circle size="large" :image="avatarImg"></AtAvatar>
            </view>
          </view>
        </view>
      </view>

      <!-- 圆角矩形头像 -->
      <view class="panel">
        <view class="panel__title">圆角矩形头像</view>
        <view class="panel__content">
          <view class="example-item">
            <view class="subitem">
              <AtAvatar size="small" :image="avatarImg"></AtAvatar>
            </view>
            <view class="subitem">
              <AtAvatar :image="avatarImg"></AtAvatar>
            </view>
            <view class="subitem">
              <AtAvatar size="large" :image="avatarImg"></AtAvatar>
            </view>
          </view>
        </view>
      </view>

      <!-- 圆形头像（支持文本） -->
      <view class="panel">
        <view class="panel__title">圆形头像（支持文本）</view>
        <view class="panel__content">
          <view class="example-item">
            <view class="subitem">
              <AtAvatar circle size="small" text="凹"></AtAvatar>
            </view>
            <view class="subitem">
              <AtAvatar circle text="凹"></AtAvatar>
            </view>
            <view class="subitem">
              <AtAvatar circle size="large" text="凹"></AtAvatar>
            </view>
          </view>
        </view>
      </view>

      <!-- 圆角矩形头像（支持文本） -->
      <view class="panel">
        <view class="panel__title">圆角矩形头像（支持文本）</view>
        <view class="panel__content">
          <view class="example-item">
            <view class="subitem">
              <AtAvatar size="small" text="凹"></AtAvatar>
            </view>
            <view class="subitem">
              <AtAvatar text="凹"></AtAvatar>
            </view>
            <view class="subitem">
              <AtAvatar size="large" text="凹"></AtAvatar>
            </view>
          </view>
        </view>
      </view>

      <!-- openData 头像（仅微信小程序支持） -->
      <view class="panel" v-if="isWEAPP">
        <view class="panel__title">
          openData 头像（仅微信小程序支持）
        </view>
        <view class="panel__content">
          <view class="example-item">
            <view class="subitem">
              <AtAvatar
                :openData="{ type: 'userAvatarUrl' }"
                size="small"
              ></AtAvatar>
            </view>
            <view class="subitem">
              <AtAvatar :openData="{ type: 'userAvatarUrl' }"></AtAvatar>
            </view>
            <view class="subitem">
              <AtAvatar
                size="large"
                :openData="{ type: 'userAvatarUrl' }"
              ></AtAvatar>
            </view>
            <view class="subitem">
              <AtAvatar
                size="large"
                circle
                :openData="{ type: 'userAvatarUrl' }"
              ></AtAvatar>
            </view>
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
const avatarImg =
  'http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
export default {
  name: 'AvatarPage',
  data() {
    return {
      avatarImg,
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
    }
  },
}
</script>
