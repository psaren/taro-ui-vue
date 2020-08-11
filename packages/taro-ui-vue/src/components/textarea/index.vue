<template>
  <view :class="rootCls" :style="customStyle">
    <textarea
      class="at-textarea__textarea"
      :style="textareaStyle"
      :placeholderStyle="placeholderStyle"
      :placeholderClass="placeholderCls"
      :cursorSpacing="cursorSpacing"
      :value="value"
      :maxlength="actualMaxLength"
      :placeholder="placeholder"
      :disabled="disabled"
      :autoFocus="autoFocus"
      :focus="focus"
      :showConfirmBar="showConfirmBar"
      :selectionStart="selectionStart"
      :selectionEnd="selectionEnd"
      :fixed="fixed"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @confirm="handleConfirm"
      @lineChange="handleLinechange"
    />
    <view v-if="count" class="at-textarea__counter">
      {{ value.length }}/{{ _maxLength }}
    </view>
  </view>
</template>

<script lang="ts">
import AtTextarea from './index'
export default AtTextarea
</script>
