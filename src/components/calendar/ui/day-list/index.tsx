import { View } from '@tarojs/components'
import Vue from 'vue'

const AtCalendarDayList = Vue.extend({
  name: 'AtCalendarDayList',
  data() {
    return {
      options: { addGlobalClass: true }
    }
  },
  render(h) {
    return (
      <View class='at-calendar__header header'>
        <View class='header__flex'>
          <View class='header__flex-item'>日</View>
          <View class='header__flex-item'>一</View>
          <View class='header__flex-item'>二</View>
          <View class='header__flex-item'>三</View>
          <View class='header__flex-item'>四</View>
          <View class='header__flex-item'>五</View>
          <View class='header__flex-item'>六</View>
        </View>
      </View>
    )
  }
})
export default AtCalendarDayList
