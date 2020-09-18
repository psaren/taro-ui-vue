<template>
  <view :class="rootClass" :on-touch-move="handleTouchMove">
    <view class="at-action-sheet__overlay" @tap="close" @click="close" />
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

<script>
import ActionSheetBody from './components/body.vue'
import ActionSheetFooter from './components/footer.vue'
import ActionSheetHeader from './components/header.vue'
import AtActionSheet from './index'
export default {
  name: 'AtActionSheet',
  mixins: [AtActionSheet],
  components: {
    ActionSheetBody,
    ActionSheetFooter,
    ActionSheetHeader,
  },
}
</script>
