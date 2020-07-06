import Vue from 'vue'
import './app.scss'

Vue.config.productionTip = false

import Taro from '@tarojs/taro'
Vue.prototype.$taro = Taro

import TaroUi from 'taro-ui-vue'
import 'taro-ui-vue/src/style/index.scss'

import DocsHeader from './components/DocsHeader.vue'

Vue.component('DocsHeader', DocsHeader)
Vue.use(TaroUi)

const App = new Vue({
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  },
})

export default App
