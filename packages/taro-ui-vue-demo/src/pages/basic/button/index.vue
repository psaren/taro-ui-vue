<template>
  <view>
    <DocsHeader title="Button 按钮" />
    <view class="doc-body">
      <view class="panel">
        <view class="panel__title">
          主操作
        </view>
        <view class="panel__content">
          <view class="btn-item">
            <AtButton
              type="primary"
            >
              主操作按钮
            </AtButton>
          </view>
          <view class="btn-item">
            <AtButton
              type="primary"
              loading
            >
              Loading
            </AtButton>
          </view>
          <view class="btn-item">
            <AtButton
              type="primary"
              disabled
            >
              不可操作
            </AtButton>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import './index.scss'

export default {
	data() {
		return {}
	}
}
</script>
