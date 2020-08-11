<template>
  <view :class="rootCls" :style="customStyle">
    <OpenData v-if="isOpenData" :type="openData.type" />
    <image v-if="isImage" class="at-avatar__img" :src="image" />
    <view v-if="isText" class="at-avatar__text">
      {{ letter }}
    </view>
  </view>
</template>
<script>
import AtAvatar from './index'
export default AtAvatar
</script>
