import Vue from 'vue'
import Component from 'vue-class-component'

const AtTagProps = Vue.extend({
  props: {
    name: {
      type: String,
      default: 'AtTag',
    },
  },
})
@Component
export default class AtTag extends AtTagProps {
  render() {
    return (
      <view>
        <text>{this.name}</text>
      </view>
    )
  }
}
