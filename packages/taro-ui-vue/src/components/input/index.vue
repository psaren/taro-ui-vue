<template>
  <view :class="rootCls" :style="customStyle">
    <view :class="containerCls">
      <view :class="overlayCls" @tap="handleClick"></view>
      <view
        v-if="title"
        :class="[
          'at-input__title',
          required ? 'at-input__title--required' : '',
        ]"
        :for="name"
      >
        {{ title }}
      </view>
      <input
        class="at-input__input"
        :id="name"
        :name="name"
        :type="inputProps.type"
        :password="inputProps.password"
        :placeholderStyle="placeholderStyle"
        :placeholderClass="placeholderCls"
        :placeholder="placeholder"
        :cursorSpacing="cursorSpacing"
        :maxLength="inputProps.maxLength"
        :autoFocus="autoFocus"
        :focus="focus"
        :value="value"
        :confirmType="confirmType"
        :cursor="cursor"
        :selectionStart="selectionStart"
        :selectionEnd="selectionEnd"
        :adjustPosition="adjustPosition"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        :on-confirm="handleConfirm"
        @keyboardHeightChange="handleKeyboardHeightChange"
      />
      <view
        v-if="clear && value"
        class="at-input__icon"
        @touchend="handleClearValue"
      >
        <view class="at-icon at-icon-close-circle at-input__icon-close"></view>
      </view>
      <view v-if="error" class="at-input__icon" @touchstart="handleErrorClick">
        <view class="at-icon at-icon-alert-circle at-input__icon-alert"></view>
      </view>
      <view class="at-input__children">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import AtInput from './index'
export default AtInput
</script>
