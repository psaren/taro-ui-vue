<template>
  <view :class="rootClass" @tap="handleClick">
    <view class="at-list__item-container">
      <view v-if="thumb" class="at-list__item-thumb item-thumb">
        <image class="item-thumb__info" mode="scaleToFill" :src="thumb" />
      </view>
      <view v-if="iconInfo.value" class="at-list__item-icon item-icon">
        <view :class="iconClass" :style="getIconStyle()"></view>
      </view>
      <view class="at-list__item-content item-content">
        <view class="item-content__info">
          <view class="item-content__info-title">{{ String(title) }}</view>
          <view v-if="note" class="item-content__info-note">{{ note }}</view>
        </view>
      </view>
      <view class="at-list__item-extra item-extra">
        <view v-if="extraText" class="item-extra__info">{{
          String(extraText)
        }}</view>
        <view v-if="extraThumb && !String(extraText)" class="item-extra__image">
          <image
            class="item-extra__image-info"
            mode="aspectFit"
            :src="extraThumb"
          />
        </view>
        <view
          v-if="isSwitch && !extraThumb && !String(extraText)"
          class="item-extra__switch"
          @tap="handleSwitchClick"
        >
          <switch
            :color="switchColor"
            :disabled="disabled"
            :checked="switchIsCheck"
            @change="handleSwitchChange"
          />
        </view>
        <view v-if="arrow" class="item-extra__icon">
          <view
            :class="`at-icon item-extra__icon-arrow at-icon-chevron-${arrow}`"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import AtListItem from './index'
export default AtListItem
</script>
