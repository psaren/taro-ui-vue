<template>
  <view
    :class="classNames('at-steps', className)"
    :style="customStyle"
  >
    <view
      v-for="(item, index) in items"
      :key="index"
      :class="classNames({
        'at-steps__item': true,
        'at-steps__item--active': index === current,
        'at-steps__item--inactive': index !== current,
      })"
      @click="handleClick"
    >
      <view class="at-steps__circular-wrap">
        <view
          v-if="index !== 0"
          class="at-steps__left-line"
        />
        <view
          v-if="item.status"
          :class="classNames({
            'at-icon': true,
            'at-icon-check-circle': item.status === 'success',
            'at-icon-close-circle': item.status === 'error',
            'at-steps__single-icon': true,
            'at-steps__single-icon--success': item.status === 'success',
            'at-steps__single-icon--error': item.status === 'error',
          })"
        />
        <view
          v-else
          class="at-steps__circular"
        >
          <view
            v-if="item.icon"
            :class="classNames('at-icon', {
              [`at-icon-${item.icon.value}`]: item.icon.value,
              'at-steps__circle-icon': true,
            })"
          />
          <view
            v-else
            class="at-steps__num"
          >
            {{ index + 1 }}
          </view>
        </view>
        <view
          v-if="index !== items.length - 1"
          class="at-steps__right-line"
        />
      </view>
      <view class="at-steps__title">
        {{ item.title }}
      </view>
      <view class="at-steps__desc">
        {{ item.desc }}
      </view>
    </view>
  </view>
</template>

<script>
import AtSteps from './main'
export default AtSteps
</script>