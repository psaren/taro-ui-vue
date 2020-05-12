import Vue from 'vue'
import store from './store'
import './app.scss'
import './utils/vue-prototype'
// Vue.config.productionTip = false

const App = new Vue({
  store,
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
