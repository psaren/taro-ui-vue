import Taro from '@tarojs/taro'
const { getEnv, ENV_TYPE } = Taro

type ENVS = {
  isWEAPP: boolean,
  isALIPAY: boolean,
  isWEB: boolean,
}

const getEnvs = (): ENVS => {
  const env = getEnv()
  return {
    isWEAPP: env === ENV_TYPE.WEAPP,
    isALIPAY: env === ENV_TYPE.ALIPAY,
    isWEB: env === ENV_TYPE.WEB,
  }
}

export { getEnvs }
