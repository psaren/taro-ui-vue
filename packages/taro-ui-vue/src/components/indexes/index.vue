<template>
  <view :class="rootCls" :style="customStyle">
    <AtToast
      :custom-style="toastStyle"
      :is-opened="state._isShowToast"
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
        :key="dataList.key"
        class="at-indexes__menu-item"
        @tap="jumpTarget(`at-indexes__list-${dataList.key}`, i + 1)"
      >
        {{ dataList.key }}
      </view>
    </view>
    <scroll-view
      :id="listId"
      class="at-indexes__body"
      :scroll-y="true"
      :scroll-with-animation="animation"
      :scroll-top="isWEB ? state._scrollTop : undefined"
      :scroll-into-view="!isWEB ? state._scrollIntoView : ''"
      @scroll="handleScroll"
    >
      <view id="at-indexes__top" class="at-indexes__content">
        <slot />
      </view>
      <view
        v-for="dataList in list"
        :id="`at-indexes__list-${dataList.key}`"
        :key="dataList.key"
        class="at-indexes__list"
      >
        <view class="at-indexes__list-title">
          {{ dataList.title }}
        </view>
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
import AtList from '../list/index.vue'
import AtListItem from '../list/item/index.vue'
import AtToast from '../toast/index.vue'
import AtIndexes from './index'
export default {
  name: 'AtIndexes',
  mixins: [AtIndexes],
  components: {
    AtList,
    AtListItem,
    AtToast,
  },
}
</script>
