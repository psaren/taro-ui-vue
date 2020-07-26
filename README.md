# taro-ui-vue
[![NPM version](https://img.shields.io/npm/v/taro-ui-vue.svg)](https://npmjs.org/package/taro-ui-vue)
[![NPM](https://img.shields.io/npm/l/taro-ui-vue)](./LECENSE)
![David](https://img.shields.io/david/psaren/taro-ui-vue)
[![npm](https://img.shields.io/npm/dm/taro-ui-vue)](https://www.npmjs.com/package/taro-ui-vue)
## 项目背景 
`tarojs` 已经开始支持 `vue` 去写 taro 应用了，由于缺少相关的 ui 库，因此决定 按照 taro-ui 重写成 `vue` 组件。
形成了 `taro-ui-vue` 这个库。
## 相关链接
[Taro Ui Vue使用文档](http://taro-ui-vue.fontend.com/)
[taro](https://github.com/NervJS/taro)  
[taro-ui](https://github.com/NervJS/taro-ui)
## 安装
``` bash
npm i -S taro-ui-vue
```
## 使用
### 按需引入
``` javascript
// page.js
import { AtButton } from 'taro-ui-vue'
// OR
import AtButton from 'taro-ui-vue/src/components/button/index.vue'
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
``` javascript
// app.js
import TaroUiVue from 'taro-ui-vue/src'
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
|![AtCalendar](https://raw.githubusercontent.com/psaren/taro-ui-vue/HEAD/src/assets/images/AtCalendar.gif)|![AtActionSheet](https://raw.githubusercontent.com/psaren/taro-ui-vue/HEAD/src/assets/images/AtActionSheet.gif)|![AtTabBar](https://raw.githubusercontent.com/psaren/taro-ui-vue/HEAD/src/assets/images/AtTabBar.gif)

## 更多使用方式
更多组件使用及属性请参考 [taro-ui 使用文档](https://taro-ui.jd.com/#/docs/introduction)   
所有参数基本一致

## TODO
- 为组件添加测试用例
- 修复现存[已知问题](https://github.com/psaren/taro-ui-vue/blob/master/src/components/notes.md)

## CHANGELOG
[CHANGELOG](https://github.com/psaren/taro-ui-vue/blob/master/CHANGELOG.md)

## 贡献
如果你在使用 Taro-UI-Vue 时遇到问题，或者有好的建议，欢迎给我们提 Issue 或 Pull Request。在开始之前，请阅读 [贡献指南](https://github.com/psaren/taro-ui-vue/blob/master/.github/CONTRIBUTING.md)

## License

[MIT](./LECENSE)