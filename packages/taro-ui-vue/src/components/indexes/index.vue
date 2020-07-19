<template>
  <view 
    :class="rootCls" 
    :style="customStyle"
  >
    <AtToast 
      :customStyle="toastStyle"
      :isOpened="state._isShowToast"
      :text="state._tipText"
      :duration="2000"
    />
    <view
      class="at-indexes__menu"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <view
        class="at-indexes__menu-item"
        @tap="jumpTarget('at-indexes__top', 0)"
      >
        {{ topKey }}
      </view>
      <view
        v-for="(dataList, i) in list"
        class="at-indexes__menu-item"
        :key="dataList.key"
        @tap="jumpTarget(`at-indexes__list-${dataList.key}`, i + 1)"
      >
        {{ dataList.key }}
      </view>
    </view>
    <scroll-view
      class="at-indexes__body"
      :id="listId"
      scrollY
      :scrollWithAnimation="animation"
      :scrollTop="isWEB ? state._scrollTop : undefined"
      :scrollIntoView="!isWEB ? state._scrollIntoView : ''"
      @scroll="handleScroll"
    >
      <view class="at-indexes__content" id="at-indexes__top">
        <slot></slot>
      </view>
      <view
        v-for="dataList in list" 
        :id="`at-indexes__list-${dataList.key}`" 
        class="at-indexes__list" 
        :key="dataList.key"
      >
        <view class="at-indexes__list-title">{{ dataList.title }}</view>
        <AtList>
          <template v-if="dataList.items">
            <AtListItem
              v-for="item in dataList.items"
              :key="item.name"
              :title="item.name"
              @tap="handleClick"
            />
          </template>
        </AtList>
      </view>
    </scroll-view>
  </view>
</template>
<script>
import AtIndexes from './index'
export default AtIndexes
</script>