# ActionSheet 动作面板

---

该组件提供了一种多端统一的 `动作面板` 样式与 `IOS` 对齐，在页面上的层级为 `1010`

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtActionSheet, AtActionSheetItem } from 'taro-ui-vue'
```

:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo

```scss
@import "~taro-ui-vue/dist/style/components/action-sheet.scss";
```

:::

## 一般用法

:::demo

```vue
<template>
  <AtActionSheet
    :isOpened="isOpened1"
    :on-close="handleClose"
  >
    <AtActionSheetItem
        :on-click="clickBtn1"
    >
      按钮一
    </AtActionSheetItem>
    <AtActionSheetItem
        :on-click="clickBtn2"
    >
      按钮二
    </AtActionSheetItem>
  </AtActionSheet>
</template>
<script>
import Taro from '@tarojs/taro'
export default {
  name: 'AtActionSheetDemo',
  data() {
    return {
      isOpened1: true
    }
  },
  methods: {
    handleClose() {
      this.isOpened1 = false
    },
    showToast (name) {
      Taro.showToast({
        icon: 'none',
        title: name
      })
    },
    clickBtn1() {
      this.showToast('点击了按钮一')
    },
    clickBtn2() {
      this.showToast('点击了按钮二')
    },
  }
}
</script>
```

:::

## 添加标题和底部取消按钮

:::demo

```vue
<template>
  <AtActionSheet
    cancelText='取消'
    :isOpened="isOpened2"
    title='清除位置信息后， 别人将不能查看到你'
  >
    <AtActionSheetItem
        :on-click="clickBtn1"
    >
      按钮一
    </AtActionSheetItem>
    <AtActionSheetItem
        :on-click="clickBtn2"
    >
      按钮二
    </AtActionSheetItem>
  </AtActionSheet>
</template>
```

:::

## 添加监听事件

:::demo

```vue
<template>
  <AtActionSheet
    cancelText='取消'
    :isOpened="state.isOpened3"
    :on-cancel="handleCancel"
    :on-close="handleClose"
    title='清除位置信息后， 别人将不能查看到你'
  >
    <AtActionSheetItem
        :on-click="clickBtn1"
    >
      按钮一
    </AtActionSheetItem>
    <AtActionSheetItem
        :on-click="clickBtn2"
    >
      按钮二
    </AtActionSheetItem>
    <AtActionSheetItem
        :on-click="clickBtn3"
    >
      <text class='danger'>清除位置信息并退出</text>
    </AtActionSheetItem>
  </AtActionSheet>
</template>
```

:::

## AtActionSheet 参数

| 参数       | 说明           | 类型    | 可选值 | 默认值  |
| ---------- | -------------- | ------- | ------ | ------- |
| title      | 元素的标题     | String  | -      | -       |
| isOpened   | 是否展示元素   | Boolean | -      | `false` |
| cancelText | 取消按钮的内容 | String  | -      | -       |

## AtActionSheet 事件

| 事件名称 | 说明                         | 返回参数 |
| -------- | ---------------------------- | -------- |
| onClose  | 元素被关闭触发的事件         | -        |
| onCancel | 点击了底部取消按钮触发的事件 | -        |

## AtActionSheetItem 事件

| 事件名称 | 说明                 | 返回参数 |
| -------- | -------------------- | -------- |
| onClick  | 点击 Item 触发的事件 | -        |
