
import classNames from 'classnames'
import { getEnvs } from '../../utils/common'
import { CommonEvent } from '@tarojs/components/types/common'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
}

const TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary',
}

export default {
  data() {
    return {
      ...getEnvs(),
    }
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
      validator: (val) => ['contact', 'share', 'getPhoneNumber'].indexOf(val) > -1,
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
  computed: {
    loadingColor() {
      return this.type === 'primary' ? '#fff' : ''
    },
    loadingSize() {
      return this.size === 'small' ? '15' : 0
    },
    rootClassName() {
      const rootClassName = ['at-button']
      if (this.loading) {
        rootClassName.push('at-button--icon')
      }
      return rootClassName
    },
    classObject() {
      const { size, disabled, circle, type, full } = this
      return {
        [`at-button--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
        'at-button--disabled': disabled,
        [`at-button--${type}`]: TYPE_CLASS[type],
        'at-button--circle': circle,
        'at-button--full': full,
      }
    },
  },
  methods: {
    classNames,
    handleClick(event: CommonEvent) {
      if (!this.disabled) {
        this.onClick && this.onClick(event)
      }
    },
    handleGetUserInfo(event: CommonEvent) {
      this.onGetUserInfo && this.onGetUserInfo(event)
    },
    handleGetPhoneNumber(event: CommonEvent) {
      this.onGetPhoneNumber && this.onGetPhoneNumber(event)
    },
    handleOpenSetting(event: CommonEvent) {
      this.onOpenSetting && this.onOpenSetting(event)
    },
    handleError(event: CommonEvent) {
      this.onError && this.onError(event)
    },
    handleContact(event: CommonEvent) {
      this.onContact && this.onContact(event)
    },
  },
}
