<template>
  <view
    :class="classNames(
      {
        'at-message': true,
        'at-message--show': isOpened,
        'at-message--hidden': !isOpened,
      },
      `at-message--${type}`,
      className
    )"
    style="{customStyle}"
  >
    {{ message }}
  </view>
</template>

<script lang='ts'>
import AtMessage from './index'
export default AtMessage
</script>