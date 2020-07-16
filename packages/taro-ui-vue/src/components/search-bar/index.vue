<template>
  <view 
    :class="rootCls" 
    :style="customStyle"
  >
    <view class="at-search-bar__input-cnt">
      <view 
        class="at-search-bar__placeholder-wrap" 
        :style="placeholderWrapStyle">
        <view class="at-icon at-icon-search"></view>
        <view class="at-search-bar__placeholder" :style="placeholderStyle">
          {{isFocus ? '' : placeholder}}
        </view>
      </view>
      <input
        class="at-search-bar__input"
        :type="inputType"
        confirmType="search"
        :value="value"
        :focus="isFocus"
        :disabled="disabled"
        :maxLength="maxLength"
        @input="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @confirm="handleConfirm"
      />
      <view 
        class="at-search-bar__clear" 
        :style="clearIconStyle" 
        @touchstart="handleClear"
      >
        <view class="at-icon at-icon-close-circle"></view>
      </view>
    </view>
    <view 
      class="at-search-bar__action" 
      :style="actionStyle" 
      @tap="handleActionClick"
    >
      {{ actionName }}
    </view>
  </view>
</template>

<script lang="ts">
import AtSearchBar from './index'
export default AtSearchBar
</script>