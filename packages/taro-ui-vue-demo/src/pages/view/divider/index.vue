<template>
  <view class='page'>
    <!-- S Header -->
    <DocsHeader title='Divider 分隔线'></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class='doc-body'>
      <!-- 文字 -->
      <view class='panel'>
        <view class='panel__title'>一般用法</view>
        <view class='panel__content no-padding'>
          <AtDivider content='分割线' />
        </view>
      </view>

      <!-- 自定义颜色 -->
      <view class='panel'>
        <view class='panel__title'>自定义颜色</view>
        <view class='panel__content no-padding'>
          <AtDivider
            content='没有更多了'
            fontColor='#ed3f14'
            lineColor='#ed3f14'
          />
          <AtDivider
            content='没有更多了'
            fontColor='#ff9900'
            lineColor='#ff9900'
          />
          <AtDivider
            content='没有更多了'
            fontColor='#2d8cf0'
            lineColor='#2d8cf0'
          />
        </view>
      </view>

      <!-- 自定义内容 -->
      <view class='panel'>
        <view class='panel__title'>自定义内容</view>
        <view class='panel__content no-padding'>
          <AtDivider>
            <AtIcon value='check-circle'></AtIcon>
          </AtDivider>
        </view>
      </view>
    </view>
    <!-- E Body -->
  </view>
</template>
<script>
import './index.scss'
export default {
  name: 'DividerPage',
}
</script>