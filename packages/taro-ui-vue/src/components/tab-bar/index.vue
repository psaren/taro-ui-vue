<template>
  <view
    :class="rootCls"
    :style="rootSty"
  >
    <view
      v-for="(item, i) in tabList"
      :key="item.title"
      :class="classNames('at-tab-bar__item', {
        'at-tab-bar__item--active': current === i,
      })"
      :style="current === i ? selectedStyle : defaultStyle"
      @tap="handleClick(i, $event)"
    >
      <AtBadge
        v-if="item.iconType"
        :dot="!!item.dot"
        :value="item.text"
        :max-value="Number(item.max)"
      >
        <view class="at-tab-bar__icon">
          <view
            :class="classNames(`${item.iconPrefixClass || 'at-icon'}`, {
              [`${item.iconPrefixClass || 'at-icon'}-${item.selectedIconType}`]:
                current === i && item.selectedIconType,
              [`${item.iconPrefixClass || 'at-icon'}-${item.iconType}`]: !(
                current === i && item.selectedIconType
              ),
            })"
            :style="{
              color: current === i ? selectedColor : color,
              fontSize: iconSize ? `${iconSize}px` : '',
            }"
          />
        </view>
      </AtBadge>

      <AtBadge
        v-if="item.image"
        :dot="!!item.dot"
        :value="item.text"
        :max-value="Number(item.max)"
      >
        <view class="at-tab-bar__icon">
          <image
            :class="classNames('at-tab-bar__inner-img', {
              'at-tab-bar__inner-img--inactive': current !== i,
            })"
            mode="widthFix"
            :src="item.selectedImage || item.image"
            :style="imgStyle"
          />
          <image
            :class="classNames('at-tab-bar__inner-img', {
              'at-tab-bar__inner-img--inactive': current === i,
            })"
            mode="widthFix"
            :src="item.image"
            :style="imgStyle"
          />
        </view>
      </AtBadge>

      <view>
        <AtBadge
          :dot="item.iconType || item.image ? false : !!item.dot"
          :value="item.iconType || item.image ? '' : item.text"
          :max-value="item.iconType || item.image ? 0 : Number(item.max)"
        >
          <view
            class="at-tab-bar__title"
            :style="titleStyle"
          >
            {{ item.title }}
          </view>
        </AtBadge>
      </view>
    </view>
  </view>
</template>

<script>
import AtTabBar from './index'
import AtBadge from '../badge/index.vue'
export default {
  name: 'AtTabBar',
  mixins: [AtTabBar],
  conponents: {
    AtBadge,
  },
}
</script>