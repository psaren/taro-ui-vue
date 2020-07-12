import Vue from 'vue'
import Component from 'vue-class-component'
import classNames from 'classnames'
import { mergeStyle, pxTransform } from '../../../utils/common'
import { CommonEvent } from '@tarojs/components/types/common'
import { getEnvs } from '../../../utils/common'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
}

const TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary',
}

const AppProps = Vue.extend({
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
})

@Component({
  methods: {
    classNames,
    mergeStyle,
  },
})
export default class AtButton extends AppProps {
  private isWEAPP: Boolean = false;
  private isWEB: Boolean = false;
  private isALIPAY: Boolean = false;

  public constructor() {
    super()
    const {isWEAPP, isALIPAY, isWEB} = getEnvs()
    this.isWEAPP = isWEAPP
    this.isWEB = isWEB
    this.isALIPAY = isALIPAY
  }

  get loadingColor() {
    return this.type === 'primary' ? '#fff' : ''
  }

  get loadingSize() {
    return this.size === 'small' ? '30' : 0
  }

  get rootClassName() {
    const rootClassName = ['at-button'] 
    if (this.loading) {
      rootClassName.push('at-button--icon')
    }
    return rootClassName
  }
  
  get classObject() {
    const { size ,disabled, circle, type, full} = this
    return {
      [`at-button--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
      'at-button--disabled': disabled,
      [`at-button--${type}`]: TYPE_CLASS[type],
      'at-button--circle': circle,
      'at-button--full': full,
    }
  }
  handleClick(event: CommonEvent) {
    if (!this.disabled) {
      this.onClick && this.onClick(event)
    }
  }

  handleGetUserInfo(event: CommonEvent) {
    this.onGetUserInfo && this.onGetUserInfo(event)
  }

  handleGetPhoneNumber(event: CommonEvent) {
    this.onGetPhoneNumber && this.onGetPhoneNumber(event)
  }

  handleOpenSetting(event: CommonEvent) {
    this.onOpenSetting && this.onOpenSetting(event)
  }

  handleError(event: CommonEvent) {
    this.onError && this.onError(event)
  }

  handleContact(event: CommonEvent) {
    this.onContact && this.onContact(event)
  }

  handleSubmit(event: CommonEvent) {
    if (this.isWEAPP || this.isWEB) {
      this.$scope.triggerEvent('submit', event.detail, {
        bubbles: true,
        composed: true,
      })
    }
  }

  handleReset(event: CommonEvent) {
    if (this.isWEAPP || this.isWEB) {
      this.$scope.triggerEvent('reset', event.detail, {
        bubbles: true,
        composed: true,
      })
    }
  }
}
