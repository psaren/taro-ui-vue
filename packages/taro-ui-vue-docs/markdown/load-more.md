# LoadMore 页面提示

---
用在列表里面，做滚动加载使用

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtLoadMore } from 'taro-ui-vue'
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~taro-ui-vue/dist/style/components/load-more.scss";
@import "~taro-ui-vue/dist/style/components/activity-indicator.scss";
@import "~taro-ui-vue/dist/style/components/button.scss";
```
:::

## 一般用法

说明: 开发者自行控制 `status` 来控制展示的状态

:::demo

``` vue
<template>
  <view>
    <AtLoadMore
      :on-click="handleClick"
      :status="status"
    />
  </view>
</template>
<script>
import { AtLoadMore } from 'taro-ui-vue'
export default {
  name: 'AtLoadMoreDemo',
  data() {
    return {
      status: 'more'
    }
  },
  methods: {
    handleClick() {
      this.status = 'loading'
      setTimeout(() => {
        this.status = 'noMore'
      }, 2000);
    }
  }
}
</script>
```

:::

## 参数

| 参数 | 说明   | 类型    | 可选值   | 默认值   |
| ----| ----- | --------| ------- | -------- |
| noMoreTextStyle | noMore 状态显示文案样式 | String or Object | - | - |
| moreBtnStyle | more 状态按钮样式 | String or Object  | - | - |
| status | 组件状态，more 状态显示查看更多按钮，loading 状态显示加载状态，noMore 显示无更多数据 | String  | 'more', 'loading', 'noMore' | 'more' |
| moreText | more 状态显示文案 | String  | - | '查看更多' |
| loadingText | loading 状态显示文案 | String  | - | '加载中' |
| noMoreText | noMore 状态显示文案 | String  | - | '没有更多' |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClick | more 状态点击触发的事件 | event  |
