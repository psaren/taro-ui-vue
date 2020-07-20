# ActivityIndicator 活动指示器

---

该组件提供一个加载等待元素，也就是 Loading 组件

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtActivityIndicator } from 'taro-ui-vue'
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~taro-ui-vue/dist/style/components/activity-indicator.scss";
@import '~taro-ui-vue/dist/style/components/loading.scss';
```
:::

## 一般用法

:::demo

```vue
<template>
  <AtActivityIndicator></AtActivityIndicator>
</template>
```

:::

## 自定义尺寸

:::demo

```vue
<template>
  <AtActivityIndicator :size="32"></AtActivityIndicator>
</template>
```

:::

## 自定义颜色

:::demo

```vue
<template>
  <AtActivityIndicator color='#13CE66'></AtActivityIndicator>
</template>
```

:::

## 自定义需要展示的文字

:::demo

```vue
<template>
  <AtActivityIndicator content='加载中...'></AtActivityIndicator>
</template>
```

:::

## 状态切换

:::demo

```vue
<template>
  <AtActivityIndicator :isOpened="true"></AtActivityIndicator>
</template>
```

:::

## 垂直水平居中（当设置 center 时需要给父容器提供 position: relative 属性）

:::demo

```vue
<template>
  <AtActivityIndicator mode='center'></AtActivityIndicator>
</template>
```

:::

## AtActivityIndicator 参数

| 参数    | 说明             | 类型   | 可选值            | 默认值    |
| ------- | ---------------- | ------ | ----------------- | --------- |
| mode    | 元素的类型       | String | `center`,`normal` | `normal`    |
| size    | loading 图的大小 | Number | -                 | `24`      |
| color   | loading 图的颜色 | String | -                 | `#6190E8` |
| content | 元素的内容文本   | String | -                 | -         |
| isOpened | 控制元素显示隐藏   | Boolean | -                 | true         |

