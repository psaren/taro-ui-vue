# ImagePicker 图片选择器

---
图片选择器，一般用于上传图片前的文件选择操作，但不包括图片上传的功能

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtImagePicker } from 'taro-ui-vue'
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~taro-ui-vue/dist/style/components/image-picker.scss";
@import "~taro-ui-vue/dist/style/components/icon.scss";
```
:::

## 一般用法

说明

* 该组件为受控组件，开发者需要通过 onChange 事件来更新 files，files 与 onChange 函数必填

* 该组件使用Taro.chooseImage实现选取图片，会受到Taro能力的制约，具体请参考Taro文档

* 开发者可以获取 files 数据并通过 [Taro.uploadFile](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html) 上传图片

:::demo
``` vue
<template>
  <view>
    <AtImagePicker
      :files="files"
      :onChange="onChange"
    />
  </view>
</template>

<script>
import { AtImagePicker } from 'taro-ui-vue'
export default {
  name: 'AtImagePickerDemo',
  components: { AtImagePicker },
  data() {
    return {
      files: [
        {
          url: 'https://jimczj.gitee.io/lazyrepay/aragaki1.jpeg',
        },
        {
          url: 'https://jimczj.gitee.io/lazyrepay/aragaki2.jpeg',
        },
        {
          url: 'https://jimczj.gitee.io/lazyrepay/aragaki3.png',
        }
      ]
    }
  },
  methods: {
    onChange (files) {
      this.files = files
    },
    onFail (mes) {
      console.log(mes)
    },
    onImageClick (index, file) {
      console.log(index, file)
    }
  },
}
</script>

```

:::

## 多选图片

:::demo

```vue
<template>
  <view>
    <AtImagePicker
      multiple
      :files="files"
      :onChange="onChange"
      :onFail="onFail"
      :onImageClick="onImageClick"
    />
  </view>
</template>
```

:::

## 自定义数量

:::demo

```vue
<template>
  <view>
    <AtImagePicker
      multiple
      length="5"
      :files="files"
      :onChange="onChange"
      :onFail="onFail"
      :onImageClick="onImageClick"
    />
  </view>
</template>
```

:::

## 多种图片预览模式

:::demo

```vue
<template>
  <view>
    <AtImagePicker
      mode='top'
      :files="files"
      :onChange="onChange"
      :onFail="onFail"
      :onImageClick="onImageClick"
    />
  </view>
</template>
```

:::

## 参数

| 参数       | 说明                                                                                                      | 类型    | 可选值                                                                                                                                             | 默认值                                                                      |
| ---------- | --------------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| files      | 图片文件数组, 元素为对象, 包含属性 url（必选)                                                             | Array   | -                                                                                                                                                  | []                                                                          |
| mode       | 图片预览模式，详见(微信开发者文档)[https://developers.weixin.qq.com/miniprogram/dev/component/image.html] | String  | ```'scaleToFill'|'aspectFit'|'aspectFill'|'widthFix'|'top'|'bottom'|'center'|'left'|'right'|'top left'|'top right'|'bottom left'|'bottom right'``` | aspectFill                                                                  |
| showAddBtn | 是否显示添加图片按钮                                                                                      | Boolean | -                                                                                                                                                  | true                                                                        |
| multiple   | 是否支持多选                                                                                              | Boolean | -                                                                                                                                                  | false                                                                       |
| count      | 最多可以选择的图片张数                                                                  | Number  | 0 ～ 99                                                                                                                                            | 默认为1，当multiple为true时候，为99，此选项设置和multiple冲突时，以该项优先 |
| sizeType   | 所选的图片的尺寸                                                                        | Array   | -                                                                                                                                                  | ['original', 'compressed']                                                  |
| sourceType | 选择图片的来源                                                                          | Array   | -                                                                                                                                                  | ['album', 'camera']                                                         |
| length     | 单行的图片数量                                                                                            | Number  | -                                                                                                                                                  | 4                                                                           |

## 事件

| 事件名称     | 说明                                                                                                                   | 返回参数                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| onChange     | files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引 | (files: Array, operationType: string, index: number) => void |
| onImageClick | 点击图片触发的回调                                                                                                     | (index: number, file: Object) => void                        |
| onFail       | 选择失败触发的回调                                                                                                     | (msg: string) => void                                        |
