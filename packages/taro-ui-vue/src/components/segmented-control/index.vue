<template>
  <view 
    :class="rootCls" 
    :style="rootSty"
  >
    <view
      v-for="(value, i) in values"
      :class="classNames('at-segmented-control__item', {
        'at-segmented-control__item--active': current === i,
      })"
      :style="current === i ? selectedItemStyle : itemStyle"
      :key="value"
      @tap="handleClick(i, $event)"
    >
      {{ value }}
    </view>
  </view>
</template>

<script>
import AtSegmentedControl from './index'
export default AtSegmentedControl
</script>