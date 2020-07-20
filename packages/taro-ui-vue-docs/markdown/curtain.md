# Curtain 幕帘

---
幕帘组件，可以用来放置广告提示内容

## 使用指南

要求 taro-ui 版本在`1.4.0`以上，在 Taro 文件中引入组件

:::demo
```js
import { AtCurtain } from 'taro-ui-vue'
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~taro-ui-vue/dist/style/components/curtain.scss";
```
:::

## 一般用法

说明：

* 该组件为受控组件，组件的开关状态由 isOpened 来控制，开发者需要通过 onClose 事件来更新 isOpened 值变化,从而关闭幕帘。

:::demo
```vue
<template>
  <view>
    <AtCurtain
      :isOpened="isOpened"
      onClose="onClose"
    >
      <image
        style='width:100%;height:250px'
        :src="curtainPng"
      />
    </AtCurtain>
    <AtButton
      :onClick="handleChange">
      右上关闭幕帘
    </AtButton>
  </view>
</template>

<script>
import curtainPng from '../../../assets/images/curtain.png'
import { AtCurtain, AtButton } from 'taro-ui-vue'
export default {
  name: 'AtCurtainDemo',
  components: {
    AtCurtain, 
    AtButton
  },
  data() {
    return {
      isOpened: false,
      curtainPng,
    }
  },
  methods: {
    handleChange () {
      this.isOpened = true
    },

    onClose () {
      this.isOpened = false
    }
  },
}
</script>
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| isOpened | 是否开启 | Boolean  | - | false |
| closeBtnPosition | 关闭图标位置 | String  | 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right' | bottom |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClose | 点击关闭按钮触发事件 | event  |
