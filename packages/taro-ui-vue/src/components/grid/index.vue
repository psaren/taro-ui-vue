<template>
  <view :class="rootClass">
    <view 
      v-for="(item, i) in gridGroup" 
      :key="`at-grid-group-${i}`" 
      class="at-grid__flex"
    >
      <view
        v-for="(childItem, index) in item"
        :key="`at-grid-item-${index}`"
        :class="[bodyClass, index === columnNum - 1 ? 'at-grid-item--last' : '']"
        :style="{
          flex: `0 0 ${100 / columnNum}%`,
        }"
        @tap="handleClick(childItem, index, i)"
      >
        <view class="at-grid-item__content">
          <view class="at-grid-item__content-inner">
            <view class="content-inner__icon">
              <image
                v-if="childItem.image"
                class="content-inner__img"
                :src="childItem.image"
                mode="scaleToFill"
              />
              <view
                v-if="childItem.iconInfo && !childItem.image"
                :class="classNames(
                  childItem.iconInfo.prefixClass || 'at-icon',
                  {
                    [`${childItem.iconInfo.prefixClass || 'at-icon'}-${
                      childItem.iconInfo.value
                    }`]: childItem.iconInfo.value,
                  },
                  childItem.iconInfo.className
                )"
                :style="mergeStyle(
                  {
                    color: childItem.iconInfo.color,
                    fontSize: `${childItem.iconInfo.size || 24}px`,
                  },
                  childItem.iconInfo.customStyle
                )"
              />
            </view>
            <view class="content-inner__text">
              {{ childItem.value }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang='ts'>
import AtGrid from './index'
export default AtGrid
</script>