# Indexes 索引选择器

---
索引列表组件，可以通过点击索引导航，快速定位到列表处

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtIndexes } from 'taro-ui-vue'
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~taro-ui-vue/dist/style/components/toast.scss";
@import "~taro-ui-vue/dist/style/components/indexes.scss";
@import "~taro-ui-vue/dist/style/components/list.scss";
```
:::

## 一般用法

说明:

* AtIndexes 需要父节点设置高度，如果想整个高度屏幕高度都铺满，设置 `height: 100vh`。

:::demo

```jsx
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIndexes } from 'taro-ui-vue'

export default class Index extends Taro.Component {
  onClick (item) {
    console.log(item)
  }
  render() {
    const list = [{
      title: 'A',
      key: 'A',
      items: [
        {
          'name': '阿坝'
          // 此处可加其他业务字段
        },
        {
          'name': '阿拉善'
        }]
      },
      {
        title: 'B',
        key: 'B',
        items: [
          {
            'name': '北京'
          },
          {
            'name': '保定'
          }]
      }
    ]
    return (
      <view style='height:100vh'>
        <AtIndexes
          list={list}
          onClick={this.onClick.bind(this)}
        >
          <view>自定义内容</view>
        </AtIndexes>
      </view>
    )
  }
```

:::


## 跳转到指定key


##### html
:::demo

```vue
<template>
  <view>
    <AtIndexes
      :list="list"
      :onScrollIntoView="handleScroll"
    >
      <view class='custom-area'>
        用户自定义内容
        <AtSearchBar  
          placeholder='跳转到指定Key' 
          :onActionClick="handleActionClick" 
        />
      </view>
    </AtIndexes>
  </view>
</template>
<script>
import mockData from './mock-data'
export default {
  name: 'AtIndexesDemo',
  data() {
    return {
      value: '',
      list: mockData,
      scrollToView: null
    }
  },
  methods: {
    handleActionClick() {
      if (!this.value) {
        return
      }
      this.scrollToView && this.scrollToView(this.value.toUpperCase())
      this.value = ''
    },
    handleScroll(fn) {
      this.scrollToView = fn
    }
  }
}
</script>
```

:::

## 参数

| 参数       | 说明    | 类型    | 可选值   | 默认值   |
| ---------- | ------- | ------- | ------- | --- |
| animation | 是否开启跳转过渡动画 | Boolean  | - | false |
| isVibrate | 是否切换 key 的震动，只在微信小程序有效 | Boolean  | - | true |
| isShowToast | 是否用弹框显示当前 key | Boolean  | - | true |
| topKey | 右侧导航第一个名称 | String  | - | Top |
| list | `[ {'{title:列表标题,key:右侧导航标题,items:[{name: 列表项内容}]}'}]` | Array  | - | - |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClick | 点击列表项触发事件 |  (item:Object,event) => void |
| onScrollIntoView | 获取跳转事件跳转到指定key | (fn:Function) => void |
