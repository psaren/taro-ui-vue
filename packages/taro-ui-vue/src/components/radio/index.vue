<template>
  <view 
    :class="rootCls" 
    :style="customStyle"
  >
    <view
      v-for="option in options"
      :key="option.value"
      @tap="handleClick(option)"
      :class="getOptionCls(option.disabled)"
    >
      <view class="at-radio__option-wrap">
        <view class="at-radio__option-container">
          <view class="at-radio__title">{{ option.label }}</view>
          <view
            :class="getIconCls(option.value)">
            <view class="at-icon at-icon-check text"></view>
          </view>
        </view>
        <view v-if="option.desc" class="at-radio__desc">{{ option.desc }}</view>
      </view>
    </view>
  </view>
</template>
<script>
import AtRadio from './index'
export default AtRadio
</script>