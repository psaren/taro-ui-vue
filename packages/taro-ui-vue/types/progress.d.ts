/*
 * @Author: pengyue
 * @Date: 2020-07-06 21:27:18
 * @LastEditTime: 2020-07-11 14:12:42
 * @LastEditors: pengyue
 * @Description: 
 * @FilePath: /taro-ui-vue/packages/taro-ui-vue/types/progress.d.ts
 */ 


import AtComponent from './base'

export enum statusEnum {
  'progress', 'error' , 'success'
}
export interface AtProgressProps extends AtComponent {
  /**
   * 元素的颜色
   */
  color?: string
  /**
   * 元素的状态
   */
  status?: statusEnum
  /**
   * 元素的进度
   */
  percent?: number
  /**
   * 元素的规格
   */
  strokeWidth?: number
  /**
   * 是否隐藏文字
   */
  isHidePercent?: boolean
}

