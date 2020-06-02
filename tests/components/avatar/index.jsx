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

  render(h) {
    const { size, circle, image, text, openData, customStyle, className } = this
    const rootClassName = ['at-avatar']
    const iconSize = SIZE_CLASS[size || 'normal']
    const classObject = {
      [`at-avatar--${iconSize}`]: iconSize,
      'at-avatar--circle': circle,
    }

    let letter = ''
    if (text) letter = text[0]

    const isOpenData = openData && openData.type === 'userAvatarUrl' && getEnvs().isWEAPP
    const isImage = !isOpenData && image !== ''
    const isText = !isOpenData && !image
    return (
      <view class={classNames(rootClassName, classObject, className)} style={customStyle}>
        {isOpenData && <OpenData type={openData.type}></OpenData>}
        {isImage && <image class="at-avatar__img" src={image} />}
        {isText && <view class="at-avatar__text">{letter}</view>}
      </view>
    )
  },
}
