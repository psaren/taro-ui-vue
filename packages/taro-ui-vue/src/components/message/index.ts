import Taro from '@tarojs/taro'
import classNames from 'classnames'
import mixins from '../mixins'

export default {
  name: 'AtMessage',
  mixins: [mixins],
  props: {
    customStyle: {
      type: [Object, String],
      default: '',
    },
    className: {
      type: [Array, String],
      default: '',
    },
  },
  data() {
    return {
      timer: null,
      isOpened: false,
      message: '',
      type: 'info',
      duration: 3000,
    }
  },
  mounted() {
    this.bindMessageListener()
  },
  beforeDestroy() {
    Taro.eventCenter.off('atMessage')
  },
  methods: {
    classNames,
    bindMessageListener() {
      Taro.eventCenter.on('atMessage', (options = {}) => {
        clearTimeout(this.timer)
        const { message, type } = options
        this.isOpened = true
        this.message = message
        this.type = type
        this.timer = setTimeout(() => {
          this.isOpened = false
        }, this.duration)
      })
      // 绑定函数
      Taro.atMessage = Taro.eventCenter.trigger.bind(
        Taro.eventCenter,
        'atMessage'
      )
    },
  },
}
