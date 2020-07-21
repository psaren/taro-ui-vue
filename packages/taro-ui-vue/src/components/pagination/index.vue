<template>
  <view 
    :class="rootCls" 
    :style="customStyle"
  >
    <view class="at-pagination__btn-prev">
      <AtButton
        v-if="icon"
        :on-click.props="onPrev"
        size="small"
        :disabled="prevDisabled"
      >
        <view class="at-icon at-icon-chevron-left text" />
      </AtButton>
      <AtButton
        v-else
        :on-click.props="onPrev"
        size="small"
        :disabled="prevDisabled"
      >
        上一页
      </AtButton>
    </view>
    <view class="at-pagination__number">
      <view class="at-pagination__number-current text">
        {{ state.currentPage }}
      </view>/{{ state.maxPage }}
    </view>
    <view class="at-pagination__btn-next">
      <AtButton
        v-if="icon"
        :on-click.props="onNext"
        size="small"
        :disabled="nextDisabled"
      >
        <view class="at-icon at-icon-chevron-right text" />
      </AtButton>
      <AtButton
        v-else
        :on-click.props="onNext"
        size="small"
        :disabled="nextDisabled"
      >
        下一页
      </AtButton>
    </view>
  </view>
</template>
<script lang='ts'>
import AtPagination from './index'
export default AtPagination
</script>