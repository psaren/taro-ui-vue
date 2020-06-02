import AtLoading from '../loading/index.jsx'
import classNames from 'classnames'
import { getEnvs } from '../../utils/common'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
}

const TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary',
}

export default {
  name: 'AtButton',
  components: {
    AtLoading,
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
      default: () => {},
    },
    className: {
      type: [Object, String],
      default: () => {},
    },
    formType: {
      type: String,
      default: undefined,
    },
    openType: {
      type: String,
      default: undefined,
      validator: (val) => ['contact', 'share', 'getPhoneNumber'],
    },
    lang: {
      type: String,
      default: 'en',
    },
    sessionFrom: {
      type: String,
      default: '',
    },
    sendMessageTitle: {
      type: String,
      default: '',
    },
    sendMessagePath: {
      type: String,
      default: '',
    },
    sendMessageImg: {
      type: String,
      default: '',
    },
    showMessageCard: {
      type: Boolean,
      default: false,
    },
    appParameter: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    onGetUserInfo: {
      type: Function,
      default: () => {},
    },
    onContact: {
      type: Function,
      default: () => {},
    },
    onGetPhoneNumber: {
      type: Function,
      default: () => {},
    },
    onError: {
      type: Function,
      default: () => {},
    },
    onOpenSetting: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      ...getEnvs(),
    }
  },
  mounted() {},
  methods: {
    hanldeClick(event) {
      if (!this.disabled) {
        this.onClick && this.onClick(event)
      }
    },
    handleGetUserInfo(event) {
      this.onGetUserInfo && this.onGetUserInfo(event)
    },
    handleGetPhoneNumber(event) {
      this.onGetPhoneNumber && this.onGetPhoneNumber(event)
    },
    handleOpenSetting(event) {
      this.onOpenSetting && this.onOpenSetting(event)
    },
    handleError(event) {
      this.onError && this.onError(event)
    },
    handleContact(event) {
      this.onContact && this.onContact(event)
    },
    handleSubmit(event) {
      if (this.isWEAPP || this.isWEB) {
        this.$scope.triggerEvent('submit', event.detail, {
          bubbles: true,
          composed: true,
        })
      }
    },
    handleReset(event) {
      if (this.isWEAPP || this.isWEB) {
        this.$scope.triggerEvent('reset', event.detail, {
          bubbles: true,
          composed: true,
        })
      }
    },
    getWxButtonProps() {
      if (!this.openType) return {}
      const wxButtonProps = { error: this.handleError }
      switch (this.openType) {
        case 'concact':
          wxButtonProps.onConcact = this.handleContact
          break
        case 'opensetting':
          wxButtonProps.onOpenSetting = this.hanldeSetting
          break
        case 'getPhoneNumber':
          wxButtonProps.getphonenumber = this.hanldeGetPhoneNumber
          break
        case 'getUserInfo':
          wxButtonProps.getuserinfo = this.handleGetUserInfo
          break
        default:
          break
      }
      return wxButtonProps
    },
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
      appParameter,
    } = this
    // data
    const { isWEB, isWEAPP, isALIPAY } = this
    const rootClassName = ['at-button']
    const classObject = {
      [`at-button--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
      'at-button--disabled': disabled,
      [`at-button--${type}`]: TYPE_CLASS[type],
      'at-button--circle': circle,
      'at-button--full': full,
    }

    const loadingColor = type === 'primary' ? '#fff' : ''
    const loadingSize = size === 'small' ? '30' : 0

    if (loading) {
      rootClassName.push('at-button--icon')
    }

    const webButton = (
      <button
        class="at-button__wxbutton"
        lang={lang}
        formType={formType === 'submit' || formType === 'reset' ? formType : undefined}></button>
    )

    const button = (
      <button
        class="at-button__wxbutton"
        formType={formType}
        openType={openType}
        lang={lang}
        sessionFrom={sessionFrom}
        sendMessageTitle={sendMessageTitle}
        sendMessagePath={sendMessagePath}
        sendMessageImg={sendMessageImg}
        showMessageCard={showMessageCard}
        appParameter={appParameter}
        {...{ on: this.getWxButtonProps() }}></button>
    )
    return (
      <view
        onTap={this.hanldeClick}
        class={classNames(rootClassName, classObject, className)}
        style={customStyle}>
        {isWEB && !disabled && webButton}
        {isWEAPP && !disabled && (
          <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
            {button}
          </form>
        )}
        {isALIPAY && !disabled && button}
        {loading && (
          <view class="at-button__icon">
            <AtLoading color={loadingColor} size={loadingSize} />
          </view>
        )}
        <view class="at-button__text">{this.$slots.default}</view>
      </view>
    )
  },
}
