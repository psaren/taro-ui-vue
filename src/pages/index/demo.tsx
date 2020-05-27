import Vue, { VNode } from 'vue'

const Demo = Vue.extend({
  name: 'Demo',
  render(h): VNode {
    return <view>demo!</view>
  },
})
export default Demo
