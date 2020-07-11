<template>
  <view 
    :class="rootCls" 
    :style="customStyle"
  >
    <view class="at-switch__title">{{ title }}</view>
    <view :class="containerCls">
      <view class="at-switch__mask"></view>
      <switch
        class="at-switch__switch"
        :checked="checked"
        :color="color"
        @change="handleChange"
      />
    </view>
  </view>
</template>

<script lang="ts">
import AtSwitch from './index'
export default AtSwitch
</script>