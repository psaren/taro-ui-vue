import Vue from 'vue'
import Taro from '@tarojs/taro'
import TaroUi from 'taro-ui-vue'
import 'taro-ui-vue/dist/style/index.scss'
import './app.scss'

import DocsHeader from './components/DocsHeader.vue'

Vue.config.productionTip = false
Vue.prototype.$taro = Taro

Vue.component('DocsHeader', DocsHeader)
Vue.use(TaroUi)

const App = new Vue({
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  },
})

export default App
