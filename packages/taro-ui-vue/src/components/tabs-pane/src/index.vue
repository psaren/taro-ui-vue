<template>
  <view
    :class="classNames(
      {
        'at-tabs-pane': true,
        'at-tabs-pane--vertical': tabDirection === 'vertical',
        'at-tabs-pane--active': index === current,
        'at-tabs-pane--inactive': index !== current,
      },
      className
    )"
    :style="customStyle"
  >
    <slot />
  </view>
</template>

<script>
import AtTabsPane from './main'
export default AtTabsPane
</script>