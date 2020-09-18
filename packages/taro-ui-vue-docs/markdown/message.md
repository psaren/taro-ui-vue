# Message 消息通知

---
可进行消息提醒

## 使用指南

:::demo
```js
import { AtMessage } from 'taro-ui-vue'
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~taro-ui-vue/dist/style/components/message.scss";
```
:::

## 一般用法

说明

* 必须在页面引入 `<AtMessage />`，使用 `Taro.atMessage` 函数进行调用传参数，参数 `Options` 为 `Object` 类型，见下表

:::demo

```vue
<template>
  <view>
    <view class='example-item'>
      <AtButton :on-click="handleClick.bind(this, '')">
        普通消息
      </AtButton>
    </view>
    <view class='example-item'>
      <AtButton :on-click="handleClick.bind(this, 'success')">
        成功消息
      </AtButton>
    </view>
    <view class='example-item'>
      <AtButton :on-click="handleClick.bind(this, 'error')">
        错误消息
      </AtButton>
    </view>
    <view class='example-item'>
      <AtButton :on-click="handleClick.bind(this, 'warning')">
        警告消息
      </AtButton>
    </view>
    <view class='example-item'>
      <AtButton :on-click="handleClick.bind(this, 'info')">
        提示消息
      </AtButton>
    </view>
  </view>
</template>

<script>
  import Taro from '@tarojs/taro'
  export default {
    name: 'ToastPage',
    methods: {
      handleClick(type) {
        Taro.atMessage({
          message: '消息通知',
          type
        })
      }
    }
  }
</script>
```

:::

## Taro.atMessage Options 字段说明

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| message | 文本消息内容 | String  | - | - |
| type | 消息类型 | String  | info，success，error，warning | - |
| duration | 消息持续时间,单位 ms  | Number  | - | 3000 |
