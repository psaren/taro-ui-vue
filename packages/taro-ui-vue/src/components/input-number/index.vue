<template>
  <view :class="rootCls" :style="customStyle">
    <view 
      :class="minusBtnCls" 
      @Tap="handleClick.bind(this, 'minus')"
    >
      <view class="at-icon at-icon-subtract at-input-number__btn-subtract"></view>
    </view>
    <input
      class="at-input-number__input"
      :style="inputStyle"
      :type="type"
      :value="String(inputValue)"
      :disabled="disabledInput || disabled"
      @input="handleInput"
      :on-blur="handleBlur"
    />
    <view 
      :class="plusBtnCls" 
      @Tap="handleClick.bind(this, 'plus')"
    >
      <view class="at-icon at-icon-add at-input-number__btn-add"></view>
    </view>
  </view>
</template>
<script lang="ts">
import AtInputNumber from './index'
export default AtInputNumber
</script>