<template>
  <view
    :class="rootClass"
    :on-touch-move="handleTouchMove"
  >
    <view
      class="at-action-sheet__overlay"
      @tap="close"
      @click="close"
    />
    <view class="at-action-sheet__container">
      <ActionSheetHeader v-if="title">
        {{ title }}
      </ActionSheetHeader>
      <ActionSheetBody>
        <slot />
      </ActionSheetBody>
      <ActionSheetFooter :on-click="handleCancel">
        {{ cancelText }}
      </ActionSheetFooter>
    </view>
  </view>
</template>

<script lang="ts">
import AtActionSheet from './index'
export default AtActionSheet
</script>