<template>
  <view>
    <text>demo</text>
    <view>view</view>
    <AtCalendar />
    <picker
      mode="date"
      :value="date"
      start="2015-09-01"
      end="2017-09-01"
      @change="bindDateChange"
    >
      <view class="picker">
        当前选择: {{ date }}
      </view>
    </picker>
  </view>
</template>
<script>
import { AtCalendar } from '../../components'
export default {
  components: {
    AtCalendar
  },
  data() {
    return {
      date: ''
    }
  },
  methods: {
    bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.date = e.detail.value
  }
  }
}
</script>
