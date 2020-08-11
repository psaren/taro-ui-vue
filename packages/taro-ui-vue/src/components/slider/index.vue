<template>
  <view :class="rootCls" :style="customStyle">
    <view class="at-slider__inner">
      <slider
        :min="min"
        :max="max"
        :step="step"
        :value="state._value"
        :disabled="disabled"
        :activeColor="activeColor"
        :backgroundColor="backgroundColor"
        :blockSize="blockSize"
        :blockColor="blockColor"
        @changing="handleChanging"
        @change="handleChange"
      >
      </slider>
    </view>
    <view v-if="showValue" class="at-slider__text">
      {{ `${state._value}` }}
    </view>
  </view>
</template>

<script lang="ts">
import AtSlider from './index'
export default AtSlider
</script>
