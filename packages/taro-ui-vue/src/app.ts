import Vue from 'vue'
import './app.scss'
// Vue.config.productionTip = false
import TaroUi from '../dist'
// import TaroUi from './index'
Vue.use(TaroUi)

const App = new Vue({
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  },
})

export default App
