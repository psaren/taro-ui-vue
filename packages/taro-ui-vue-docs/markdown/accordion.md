# Accordion 手风琴

---
可以折叠 / 展开的内容区域。

## 使用指南

:::demo
```js
import { AtAccordion } from 'taro-ui-vue'
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~taro-ui-vue/dist/style/components/accordion.scss";
@import "~taro-ui-vue/dist/style/components/icon.scss";
```
:::

## 一般用法

说明：

* 该组件为受控组件，开发者通过 open 来控制组件开关状态，可通过触发 onClick 函数时修改 open 实现状态切换

:::demo

``` vue
<template>
  <AtAccordion
    :onClick="onClick"
    title='标题一'
    :open="value1"
  >
    <AtList :hasBorder="false">
      <AtListItem
        title='标题文字'
        thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
      />
      <AtListItem
        title='标题文字'
        note='描述信息'
        thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
      />
    </AtList>
  </AtAccordion>
</template>

<script>
import { AtAccordion, AtList, AtListItem } from 'taro-ui-vue'
export default {
  name: 'AccordionDemo',
  components: {
    AtAccordion, 
    AtList, 
    AtListItem
  },
  data() {
    return {
      value1: false
    }
  },
  methods: {
    onClick(val) {
      this.value1 = val
    }
  },
}
</script>

```

:::

## 带图标

:::demo

``` vue
<template>
  <view class='example-item'>
    <AtAccordion
      title='标题三'
      :open="value3"
      :icon="{ value: 'tags', color: '#77a1fd' }"
      :onClick="onClick"
    >
      <AtList :hasBorder="false">
        <AtListItem
          title='标题文字'
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        />
        <AtListItem
          title='标题文字'
          note='描述信息'
          thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
        />
      </AtList>
    </AtAccordion>
  </view>
</template>

<script>
import { AtAccordion, AtList, AtListItem } from 'taro-ui-vue'
export default {
  name: 'AccordionDemo',
  components: {
    AtAccordion, 
    AtList, 
    AtListItem
  },
  data() {
    return {
      value3: false
    }
  },
  methods: {
    onClick(val) {
      this.value3 = val
    }
  },
}
</script>

```

:::

## 参数

| 参数        | 说明                                                                       | 类型    | 可选值 | 默认值 |
| ----------- | -------------------------------------------------------------------------- | ------- | ------ | ------ |
| open        | 是否默认开启                                                               | Boolean | -      | false  |
| title       | 标题                                                                       | String  | -      | -      |
| hasBorder   | 是否有头部下划线                                                           | Boolean | -      | true   |
| isAnimation | 是否开启动画                                                               | Boolean | -      | true   |
| icon        | 图标，仅支持 AtIcon 支持的类型，object 属性有 value color size prefixClass | object  | -      | -      |
| note        | 描述信息                                                                   | string  | -      | -      |

## 事件

| 事件名称 | 说明             | 返回参数             |
| -------- | ---------------- | -------------------- |
| onClick  | 点击头部触发事件 | (open,event) => void |
