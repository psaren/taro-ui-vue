<template>
  <view 
    :class="rootCls" 
    :style="customStyle"
  >
    <view 
      v-for="(row, i) in matrix"
      class="at-image-picker__flex-box" 
      :key="i + 1"
    >
      <template 
        v-for="(item, j) in row"
      >
        <view 
          v-if="item.url" 
          class="at-image-picker__flex-item" 
          :key="i * length + j"
        >
          <view class="at-image-picker__item">
            <view
              class="at-image-picker__remove-btn"
              @tap="handleRemoveImg(i * length + j)"
            ></view>
            <image
              class="at-image-picker__preview-img"
              :mode="mode"
              :src="item.url"
              @tap="handleImageClick(i * length + j)"
            />
          </view>
        </view>
        <view 
          v-else
          class="at-image-picker__flex-item" 
          :key="i * length + j"
        >
          <view
            v-if="item.type === 'btn'"
            class="at-image-picker__item at-image-picker__choose-btn"
            @tap="chooseFile"
          >
            <view class="add-bar"></view>
            <view class="add-bar"></view>
          </view>
        </view>
      </template>
    </view>
  </view>
</template>
<script lang="ts">
import AtImagePicker from './index'
export default AtImagePicker
</script>