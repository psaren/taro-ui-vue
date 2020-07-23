<template>
  <view>
    <view 
      v-if="title || content" 
      :class="rootClass"
    >
      <view 
        @tap="handleClickOverlay"  
        class="at-modal__overlay" 
      />
      <view class="at-modal__container">
        <ModalHeader v-if="title">
          <view>{{ title }}</view>
        </ModalHeader>
        <ModalContent v-if="content">
          <view class="content-simple">
            <view
              v-if="isWEB"
              v-html="content.replace(/\n/g, '<br/>')">
            </view>
            <view v-else>{{ content }}</view>
          </view>
        </ModalContent>
        <ModalAction v-if="cancelText || confirmText" isSimple>
          <Button
            v-if="cancelText" 
            @tap="handleCancel"
            @click="handleCancel"
          >
            {{ cancelText }}
          </Button>
          <Button 
            v-if="confirmText"
            @tap="handleConfirm"
            @click="handleConfirm"
          >
            {{ confirmText }}
          </Button>
        </ModalAction>
      </view>
    </view>
    <view v-else @touchmove="handleTouchMove" :class="rootClass">
      <view class='at-modal__overlay' @tap="handleClickOverlay" />
      <view class='at-modal__container'>
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script>
import ModalAction from './action/index.vue'
import ModalContent from './content/index.vue'
import ModalHeader from './header/index.vue'
import AtModal from './index'
export default {
  name: 'AtModal',
  mixins: [AtModal],
  components: {
    ModalAction,
    ModalContent,
    ModalHeader
  }
}
</script>