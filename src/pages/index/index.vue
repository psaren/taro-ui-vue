<template>
  <view 
    class="index"
  >
    <Button 
      loading 
      type="primary"
      :on-click="onClick"
    >
      hello
    </Button>
  </view>
</template>

<script>
import Button from '../../components/Button.vue'
import Taro from '@tarojs/taro'
console.log('Taro.getEnv()', Taro.getEnv())
export default {
  name: 'Index',
  components: {
    Button,
  },
  methods: {
    onClick(e) {
      console.log(e)
    }
  }
}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
