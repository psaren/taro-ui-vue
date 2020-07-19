import classNames from 'classnames'
import { getEnvs } from '../../utils/common'

const SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small',
}

export default {
  name: 'AtAvatar',
  props: {
    size: {
      type: String,
      default: 'normal',
      validator: (val) => ['large', 'normal', 'small'].includes(val),
    },
    circle: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    openData: {
      type: Object,
      default: () => ({}),
    },
    customStyle: {
      type: [Object, String],
      default: () => {},
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
  },
  computed: {
    rootCls() {
      const { circle, className, size } = this
      const rootClassName = ['at-avatar']
      const iconSize = SIZE_CLASS[size || 'normal']
      
      const classObject = {
        [`at-avatar--${iconSize}`]: iconSize,
        'at-avatar--circle': circle,
      }
      return classNames(rootClassName, classObject, className)
    },
    letter() {
      const { text } = this
      let letter = ''
      if (text) letter = text[0]
      return letter
    },
    isOpenData() {
      const { openData } = this
      return openData && openData.type === 'userAvatarUrl' && getEnvs().isWEAPP
    },
    isImage() {
      const { image, isOpenData } = this
      return !isOpenData && image !== ''
    },
    isText() {
      const { image, isOpenData } = this
      return !isOpenData && !image
    }
  },
}
