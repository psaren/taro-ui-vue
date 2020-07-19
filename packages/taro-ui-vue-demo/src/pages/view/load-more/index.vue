<template>
  <view class='page'>
    <!-- S Header -->
    <DocsHeader title='LoadMore 页面提示'></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class='doc-body'>
      <!-- 文字 -->
      <view class='panel'>
        <view class='panel__title'>一般用法</view>
        <view class='panel__content no-padding'>
          <AtLoadMore
            :onClick="handleClick"
            :status="status"
          />
        </view>
      </view>
    </view>
    <!-- E Body -->
  </view>
</template>
<script>
import './index.scss'
export default {
  name: 'LoadMorePage',
  data() {
    return {
      status: 'more'
    }
  },
  methods: {
    handleClick() {
      this.status = 'loading'
      setTimeout(() => {
        this.status = 'noMore'
      }, 2000)
    }
  }
}
</script>