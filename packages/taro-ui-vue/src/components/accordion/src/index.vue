<template>
  <view
    :class="classNames('at-accordion', className)"
    :style="customStyle"
  >
    <view
      :class="classNames('at-accordion__header', {
        'at-accordion__header--noborder': !hasBorder,
      })"
      @tap="handleClick"
      @click="handleClick"
    >
      <view
        v-if="icon && icon.value"
        :class="iconCls"
        :style="{
          color: (icon && icon.color) || '',
          fontSize: (icon && `${icon.size}px`) || '',
        }"
      />
      <view class="at-accordion__info">
        <view class="at-accordion__info__title">
          {{ title }}
        </view>
        <view class="at-accordion__info__note">
          {{ note }}
        </view>
      </view>
      <view
        :class="classNames('at-accordion__arrow', {
          'at-accordion__arrow--folded': !!open,
        })"
      >
        <view class="at-icon at-icon-chevron-down" />
      </view>
    </view>
    <view
      :style="{ height: `${wrapperHeight}px` }"
      :class="classNames('at-accordion__content', {
        'at-accordion__content--inactive': (!open && isCompleted) || startOpen,
      })"
    >
      <view class="at-accordion__body">
        <slot />
      </view>
    </view>
  </view>
</template>

<script>
import AtAccordion from './main'
export default AtAccordion
</script>
