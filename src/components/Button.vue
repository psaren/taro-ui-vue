<script>
import Taro from '@tarojs/taro'
import Loading from './Loading.vue'
import classNames from 'classnames'
import { Button } from '@tarojs/components'
const { getEnv, ENV_TYPE } = Taro
const env = getEnv()

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small'
}

const TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary'
}
export default {
  name: 'Button',
  components: {
    Loading
  },
  props: {
    size: {
      type: String,
      default: 'normal',
    },
    type: {
      type: String,
      default: undefined,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    customStyle: {
      type: [Object, String],
      default: () => {}
    },
    className: {
      type: [Object, String],
      default: () => {}
    },
    formType: {
      type: String,
      default: undefined
    },
    openType: {
      type: String,
      default: undefined
    },
    lang: {
      type: String,
      default: 'en'
    },
    sessionFrom: {
      type: String,
      default: ''
    },
    sendMessageTitle: {
      type: String,
      default: ''
    },
    sendMessagePath: {
      type: String,
      default: ''
    },
    sendMessageImg: {
      type: String,
      default: ''
    },
    showMessageCard: {
      type: Boolean,
      default: false
    },
    appParameter: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    onGetUserInfo: {
      type: Function,
      default: () => {}
    },
    onContact: {
      type: Function,
      default: () => {}
    },
    onGetPhoneNumber: {
      type: Function,
      default: () => {}
    },
    onError: {
      type: Function,
      default: () => {}
    },
    onOpenSetting: {
      type: Function,
      default: () => {}
    },
  },
  data() {
    return {
      isWEB: env === ENV_TYPE.WEB,
      isWEAPP:  env === ENV_TYPE.WEAPP,
      isALIPAY:  env === ENV_TYPE.ALIPAY,
    }
  },
  methods: {
    hanldeClick(event) {
      if (!this.disabled) {
        this.onClick && this.onClick(event)
      }
    },
    handleGetUserInfo() {
      this.onGetUserInfo()
    }
  },
  render() {
    // props
    const {
      size = 'normal',
      type = '',
      circle,
      full,
      loading,
      disabled,
      customStyle,
      className,
      formType,
      openType,
      lang,
      sessionFrom,
      sendMessageTitle,
      sendMessagePath,
      sendMessageImg,
      showMessageCard,
      appParameter
    } = this
    // data
    const { isWEB, isWEAPP, isALIPAY } = this

    const rootClassName = ['at-button']
    const classObject = {
      [`at-button--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
      'at-button--disabled': disabled,
      [`at-button--${type}`]: TYPE_CLASS[type],
      'at-button--circle': circle,
      'at-button--full': full
    }

    const loadingColor = type === 'primary' ? '#fff' : ''
    const loadingSize = size === 'small' ? '30' : 0

    let loadingComponent = null
    if (loading) {
      loadingComponent = (
        <View className='at-button__icon'>
          <Loading color={loadingColor} size={loadingSize} />
        </View>
      )
      rootClassName.push('at-button--icon')
    }

    const webButton = (
      <button
        className='at-button__wxbutton'
        lang={lang}
        formType={
          formType === 'submit' || formType === 'reset' ? formType : undefined
        }
      ></button>
    )

    const button = (
      <Button
        className='at-button__wxbutton'
        formType={formType}
        openType={openType}
        lang={lang}
        sessionFrom={sessionFrom}
        sendMessageTitle={sendMessageTitle}
        sendMessagePath={sendMessagePath}
        sendMessageImg={sendMessageImg}
        showMessageCard={showMessageCard}
        appParameter={appParameter}
        onGetUserInfo={this.handleGetUserInfo}
        onGetPhoneNumber={this.hanldeClick}
        onOpenSetting={this.hanldeClick}
        onError={this.hanldeClick}
        onContact={this.hanldeClick}
      >
      </Button>
    )
    return (
      <view
        onTap={this.hanldeClick}
        class={classNames(rootClassName, classObject, className)}
        style={customStyle}
      >
        {isWEB && !disabled && webButton}
        {isWEAPP && !disabled && (
          <form
            onSubmit={this.hanldeClick}
            onReset={this.hanldeClick}
          >
            {button}
          </form>
        )}
        {isALIPAY && !disabled && button}
        {loading && <view class='at-button__icon'>
          <Loading color={loadingColor} size={loadingSize} />
        </view>}
        <view class='at-button__text'>{this.$slots.default}</view>
      </view>
    )
  }
}
</script>