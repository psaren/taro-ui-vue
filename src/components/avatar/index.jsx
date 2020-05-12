import classNames from 'classnames'

const SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small',
}

export default {
  name: 'Avatar',
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
      default: () => {},
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

  render() {
    const { size, circle, image, text, openData, customStyle, className } = this
    const rootClassName = ['at-avatar']
    const iconSize = SIZE_CLASS[size || 'normal']
    const classObject = {
      [`at-avatar--${iconSize}`]: iconSize,
      'at-avatar--circle': circle,
    }

    let letter = ''
    if (text) letter = text[0]

    let elem
    if (openData && openData.type === 'userAvatarUrl' && this.$isWEAPP()) {
      // TODO OpenData Component
      elem = <OpenData type={openData.type}></OpenData>
    } else if (image) {
      elem = <image class="at-avatar__img" src={image} />
    } else {
      elem = <text class="at-avatar__text">{letter}</text>
    }

    return (
      <view class={classNames(rootClassName, classObject, className)} style={customStyle}>
        {elem}
      </view>
    )
  },
}
