# taro-ui vue version
### 安装
```
npm i -S taro-ui-vue
```
### 使用
``` javascript
// page.js
import { AtButton } from 'taro-ui-vue'
// 除了引入所需的组件，还需要手动引入组件样式
// app.js
import 'taro-ui-vue/dist/style/index.scss' // 全局引入一次即可
```
或者按需引入
``` javascript
// js
import 'taro-ui-vue/dist/style/components/tag.scss'
```
``` scss
// css
@import "~taro-ui/dist/style/components/button.scss";
```
### 示例
``` js
<template>
  <view class="index">
    <AtTag>标签</AtTag>
    <AtIcon value="clock" color="#F00"></AtIcon>
  </view>
</template>

<script>
import { AtTag, AtIcon } from 'taro-ui-vue'
import 'taro-ui-vue/dist/style/components/icon.scss'
import 'taro-ui-vue/dist/style/components/tag.scss'
export default {
  name: 'Index',
  components: {
    AtTag,
    AtIcon,
  }
}
</script>

```
### introduction
same as [taro-ui](https://taro-ui.jd.com/#/docs/introduction)