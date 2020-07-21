<template>
  <dir>
    <view
      :class="classNames(rootClassName, { 'at-timeline--pending': pending }, className)"
      :style="customStyle"
    >
      <view
        v-for="(item, index) in items"
        :key="index"
        :class="itemRootClassName(item)"
      >
        <view class="at-timeline-item__tail" />
        <view :class="dotClass(item)">
          <view
            v-if="item.icon"
            :class="fileIconClass(item)"
          />
        </view>
        <view class="at-timeline-item__content">
          <view class="at-timeline-item__content-item">
            {{ item.title }}
          </view>
          <view
            v-for="(sub, subIndex) in item.content"
            :key="subIndex"
            class="at-timeline-item__content-item at-timeline-item__content--sub"
          >
            {{ sub }}
          </view>
        </view>
      </view>
    </view>
  </dir>
</template>

<script>
import AtTimeline from './main'
export default AtTimeline
</script>
