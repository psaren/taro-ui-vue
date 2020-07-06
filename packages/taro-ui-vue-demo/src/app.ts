import Vue from 'vue'
import store from './store'
import './app.scss'

Vue.config.productionTip = false

import Taro from '@tarojs/taro'
Vue.prototype.$taro = Taro

import DocsHeader from './components/DocsHeader.vue'
import TaroUi from '../taro-ui-vue'
Vue.component('DocsHeader', DocsHeader)
Vue.use(TaroUi)

const App = new Vue({
  store,
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  },
})

export default App
