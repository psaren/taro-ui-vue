<template>
  <view>
    <view v-if="title || content" :class="rootClass">
      <view class="at-modal__overlay" @tap="handleClickOverlay" />
      <view class="at-modal__container">
        <ModalHeader v-if="title">
          <view>{{ title }}</view>
        </ModalHeader>
        <ModalContent v-if="content">
          <view class="content-simple">
            <view v-if="isWEB" v-html="content.replace(/\n/g, '<br/>')" />
            <view v-else>
              {{ content }}
            </view>
          </view>
        </ModalContent>
        <ModalAction v-if="cancelText || confirmText" is-simple>
          <button v-if="cancelText" @tap="handleCancel" @click="handleCancel">
            {{ cancelText }}
          </button>
          <button
            v-if="confirmText"
            @tap="handleConfirm"
            @click="handleConfirm"
          >
            {{ confirmText }}
          </button>
        </ModalAction>
      </view>
    </view>
    <view v-else :class="rootClass" @touchmove="handleTouchMove">
      <view class="at-modal__overlay" @tap="handleClickOverlay" />
      <view class="at-modal__container">
        <slot />
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
  components: {
    ModalAction,
    ModalContent,
    ModalHeader,
  },
  mixins: [AtModal],
}
</script>
