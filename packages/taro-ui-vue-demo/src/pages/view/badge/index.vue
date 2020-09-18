<template>
  <view class="page">
    <!-- S Header -->
    <DocsHeader title="Badge 徽标"></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class="doc-body">
      <!-- 数字 -->
      <view class="panel">
        <view class="panel__title">数字</view>
        <view class="panel__content">
          <view class="badge-item">
            <view class="subitem">
              <AtBadge value="10" :maxValue="99">
                <AtButton size="small" circle>
                  按钮
                </AtButton>
              </AtBadge>
            </view>
            <view class="subitem">
              <AtBadge value="100" :maxValue="99">
                <AtButton size="small">按钮</AtButton>
              </AtBadge>
            </view>
          </view>
        </view>
      </view>

      <!-- 小红点 -->
      <view class="panel">
        <view class="panel__title">小红点</view>
        <view class="panel__content">
          <view class="badge-item">
            <view class="subitem">
              <AtBadge dot>
                <AtButton size="small" circle>
                  按钮
                </AtButton>
              </AtBadge>
            </view>
            <view class="subitem">
              <AtBadge dot>
                <AtButton size="small">按钮</AtButton>
              </AtBadge>
            </view>
          </view>
        </view>
      </view>

      <!-- 文本 -->
      <view class="panel">
        <view class="panel__title">文本</view>
        <view class="panel__content">
          <view class="badge-item">
            <view class="subitem">
              <AtBadge value="NEW">
                <AtButton size="small" circle>
                  按钮
                </AtButton>
              </AtBadge>
            </view>
            <view class="subitem">
              <AtBadge value="NEW">
                <AtButton size="small">按钮</AtButton>
              </AtBadge>
            </view>
          </view>
        </view>
      </view>

      <!-- 省略号 -->
      <view class="panel">
        <view class="panel__title">省略号</view>
        <view class="panel__content">
          <view class="badge-item">
            <view class="subitem">
              <AtBadge :value="dot">
                <AtButton size="small" circle>
                  按钮
                </AtButton>
              </AtBadge>
            </view>
            <view class="subitem">
              <AtBadge :value="dot">
                <AtButton size="small">按钮</AtButton>
              </AtBadge>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import './index.scss'
export default {
  name: 'BadgePage',
  data() {
    return {
      dot: '...',
    }
  },
}
</script>
