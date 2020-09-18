<template>
  <view :class="rootCls" :style="rootSty">
    <view
      v-for="(value, i) in values"
      :key="value"
      :class="
        classNames('at-segmented-control__item', {
          'at-segmented-control__item--active': current === i,
        })
      "
      :style="current === i ? selectedItemStyle : itemStyle"
      @tap="handleClick(i, $event)"
    >
      {{ value }}
    </view>
  </view>
</template>

<script lang="ts">
import AtSegmentedControl from './index'
export default AtSegmentedControl
</script>
