# taro-ui-vue
[![NPM version](https://img.shields.io/npm/v/taro-ui-vue.svg)](https://npmjs.org/package/dva)
[![NPM](https://img.shields.io/npm/l/taro-ui-vue)](./LECENSE)
![David](https://img.shields.io/david/psaren/taro-ui-vue)
[![npm](https://img.shields.io/npm/dm/taro-ui-vue)](https://www.npmjs.com/package/taro-ui-vue)
## 项目背景 
`tarojs` 已经开始支持 `vue` 去写 taro 应用了，由于缺少相关的 ui 库，因此决定 按照 taro-ui 重写用 `(j|t)sx` 成 `vue` 组件。
形成了 `taro-ui-vue` 这个库。
重写是基于 @tarojs 3.0.0-beta.6, 样式是复用的 taro-ui@2.2.x。
## 安装
``` bash
npm i -S taro-ui-vue
```
## 使用
### 按需引入
``` javascript
// page.js
import { AtButton } from 'taro-ui-vue'
// 除了引入所需的组件，还需要手动引入组件样式

```
按需引入样式
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
### 全局引入所有组件
```
// app.js
import TaroUiVue from 'taro-ui-vue'
import 'taro-ui-vue/dist/style/index.scss'
Vue.use(TaroUiVue)
```
### onXXX 属性示例
在 .vue 文件 template 中需要按下面这样写  
```
<template>
  <view>
    <AtTag
      type="primary"
      :on-click="handleClick"
    >
      标签
    </AtTag>
  </view>
</template>
```
在 jsx 中需要按下面这样写, 明确 onXXX(on开头的props) 属于 props 
``` javascript
{
  ...
  methods: {
    handleClick() {
      // TODO
    }
  },
  render() {
    return (
      <AtTag
      type="primary"
      props={{onClick: this.handleClick}}
    >
      标签
    </AtTag>
    )
  }
}
```
| AtCalendar | AtActionSheet | AtTabBar |
| :--------: | :--------: | :--------: |
|![AtCalendar](./src/assets/images/AtCalendar.gif)|![AtActionSheet](./src/assets/images/AtActionSheet.gif)|![AtTabBar](./src/assets/images/AtTabBar.gif)
## 更多使用方式
更多组件使用及属性请参考 [taro-ui 使用文档](https://taro-ui.jd.com/#/docs/introduction)   
所有参数基本一致

## 先关链接
[taro](https://github.com/NervJS/taro)  
[taro-ui](https://github.com/NervJS/taro-ui)

## TODO
- 为组件添加测试用例
- 修复现存[已知问题](./src/components/notes.md)

## CHANGELOG
[CHANGELOG](./CHANGELOG.md)

## License

[MIT](./LECENSE)