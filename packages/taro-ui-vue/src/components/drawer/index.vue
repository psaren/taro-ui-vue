<template>
  <view v-if="state._show" :class="rootCls">
    <view class="at-drawer__mask" :style="maskStyle" @tap="onMaskClick"></view>
    <view class="at-drawer__content" :style="listStyle">
      <template v-if="!!items && items.length">
        <AtList v-for="(name, index) in items" :key="index">
          <AtListItem
            :key="`${name}-${index}`"
            :data-index="index"
            :on-click="handleItemClick.bind(this, index)"
            :title="name"
            arrow="right"
          >
          </AtListItem>
        </AtList>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </view>
  </view>
</template>
<script>
import AtList from '../list/index.vue'
import AtListItem from '../list/item/index.vue'
import AtDrawer from './index'
export default {
  name: 'AtDrawer',
  mixins: [AtDrawer],
  components: {
    AtList,
    AtListItem,
  },
}
</script>
