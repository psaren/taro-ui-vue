<template>
  <view :class="rootCls" :style="customStyle">
    <view
      v-for="(option, idx) in options"
      :class="getOptionCls(option)"
      :key="option.value"
      @tap="handleClick(idx)"
    >
      <view class="at-checkbox__option-wrap">
        <view class="at-checkbox__option-cnt">
          <view class="at-checkbox__icon-cnt">
            <text class="at-icon at-icon-check"></text>
          </view>
          <view class="at-checkbox__title">{{ option.label }}</view>
        </view>
        <view v-if="option.desc" class="at-checkbox__desc">{{
          option.desc
        }}</view>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import AtCheckbox from './index'
export default AtCheckbox
</script>
