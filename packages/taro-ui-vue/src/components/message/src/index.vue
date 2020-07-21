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

<script>
import AtMessage from './main'
export default AtMessage
</script>