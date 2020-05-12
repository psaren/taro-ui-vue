import Taro from '@tarojs/taro'
import Vue from 'vue'
const { getEnv, ENV_TYPE } = Taro
const env = getEnv()

const objectToString = (style: object | string): string => {
  if (style && typeof style === 'object') {
    let styleStr = ''
    Object.keys(style).forEach((key) => {
      const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      styleStr += `${lowerCaseKey}:${style[key]};`
    })
    return styleStr
  } else if (style && typeof style === 'string') {
    return style
  }
  return ''
}

Vue.prototype.$mergeStyle = function mergeStyle(
  style1: object | string,
  style2: object | string
): object | string {
  if (style1 && typeof style1 === 'object' && style2 && typeof style2 === 'object') {
    return Object.assign({}, style1, style2)
  }
  return objectToString(style1) + objectToString(style2)
}

Vue.prototype.$isWEB = () => env === ENV_TYPE.WEB
Vue.prototype.$isWEAPP = () => env === ENV_TYPE.WEAPP
Vue.prototype.$isALIPAY = () => env === ENV_TYPE.ALIPAY

export {}
