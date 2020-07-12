import Vue from 'vue'
import Taro from '@tarojs/taro'
import setStateMixin  from '../../../mixins/setStateMixin'
import '@/taro-ui-vue/src/style/components/calendar.scss'
import './index.scss'

type DateObject = {
  value: string
}

interface IndexState {
  now: number
  minDate: string
  maxDate: string
  multiCurentDate: {
    start: number
  }
  mark: DateObject[]
  validDates: DateObject[]
  [key: string]: any
}


export default Vue.extend({
  name: 'CalenderPage',
  mixins: [setStateMixin],
  data() {
    return {
      state: {
        now: Date.now(),
        minDate: '2018/06/11',
        maxDate: '2020/12/12',
        multiCurentDate: {
          start: Date.now()
        },
        mark: [
          {
            value: '2018/11/11'
          }
        ],
        validDates: [
          {
            value: '2019/04/17'
          },
          {
            value: '2019/04/21'
          },
          {
            value: '2019/05/04'
          },
          {
            value: '2019/05/28'
          }
        ]
      }
    }
  },
  methods: {
    handleClick(key: string, value: string): void {
      this.setState({
        [key]: value
      })
    },
    handleDateChange(arg: any): void {
      Taro.showToast({
        title: `handleDateChange: ${JSON.stringify(arg)}`,
        icon: 'none'
      })
    },
  
    handleMonthChange(arg: any): void {
      Taro.showToast({
        title: `handleMonthChange: ${JSON.stringify(arg)}`,
        icon: 'none'
      })
    },
  },
})