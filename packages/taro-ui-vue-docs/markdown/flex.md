# Flex 弹性布局

---

基于 `Flex Box` 布局封装的组件，可以帮助使用者方便、快捷的构建弹性布局

## 使用指南

如果已经全局引入了 `taro-ui` 的样式文件，则无需再次引入

> 由于 `app.js` 添加的样式文件 在小程序上只能影响 `page` 样式,不能影响 `component` 的样式，所以在使用自定义组件时，你可能需要再次引入

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~taro-ui-vue/dist/style/components/flex.scss";
```
:::

## 一般用法

:::demo

```html
<view class='at-row'>
  <view class='at-col'>A</view>
  <view class='at-col'>B</view>
  <view class='at-col'>C</view>
</view>
```

:::

## 使用栅格化（长度）

:::demo

```html
<view class='at-row'>
  <view class='at-col at-col-3'>A</view>
  <view class='at-col at-col-6'>B</view>
  <view class='at-col at-col-2'>C</view>
  <view class='at-col at-col-1'>D</view>
</view>
```

:::

## 使用栅格化（偏移）

:::demo

```html
<view class='at-row'>
  <view class='at-col at-col__offset-2'>
    A
  </view>
  <view class='at-col at-col__offset-3'>
    B
  </view>
  <view class='at-col'>C</view>
</view>
```

:::

## 超出换行

:::demo

```html
<view class='at-row at-row--wrap'>
  <view class='at-col at-col-4'>A</view>
  <view class='at-col at-col-4'>B</view>
  <view class='at-col at-col-4'>C</view>
  <view class='at-col at-col-4'>D</view>
  <view class='at-col at-col-4'>E</view>
</view>
```

:::

## 宽度根据内容撑开

:::demo

```html
<view class='at-row'>
  <view class='at-col at-col-1 at-col--auto'>
    被内容撑开
  </view>
  <view class='at-col'>B</view>
</view>
```

:::

## 内容自动换行

:::demo

```html
<view class='at-row'>
  <view class='at-col at-col-1 at-col--wrap'>
    内容自动换行
  </view>
  <view class='at-col'>B</view>
</view>
```

:::

## 侧轴方向的对齐方式

:::demo

```html
<view class='at-row'>
  <view style='height:100px' class='at-col'>A</view>
  <view class='at-col'>默认对齐方式 -- stretch</view>
</view>
<view class='at-row at-row__align--start'>
  <view style='height:100px' class='at-col'>B</view>
  <view class='at-col'>顶部对齐 -- start</view>
</view>
<view class='at-row at-row__align--center'>
  <view style='height:100px' class='at-col'>C</view>
  <view class='at-col'>居中对齐 -- center</view>
</view>
<view class='at-row at-row__align--end'>
  <view style='height:100px' class='at-col'>D</view>
  <view class='at-col'>底部对齐 -- end</view>
</view>
```

:::

## 主轴方向的排列方式

:::demo

```html
<view class='at-row'>
  <view class='at-col at-col-5'>默认</view>
  <view class='at-col at-col-5'>Start</view>
</view>
<view class='at-row at-row__justify--end'>
  <view class='at-col at-col-5'>底部排列</view>
  <view class='at-col at-col-5'>End</view>
</view>
<view class='at-row at-row__justify--center'>
  <view class='at-col at-col-5'>居中排列</view>
  <view class='at-col at-col-5'>Center</view>
</view>
<view class='at-row at-row__justify--between'>
  <view class='at-col at-col-5'>左右排列</view>
  <view class='at-col at-col-5'>Between</view>
</view>
<view class='at-row at-row__justify--around'>
  <view class='at-col at-col-5'>平均排列</view>
  <view class='at-col at-col-5'>Around</view>
</view>
```
:::
