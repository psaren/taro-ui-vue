export default {
  name: 'AtLoading',
  props: {
    size: {
      type: [String, Number],
      default: 0,
    },
    color: {
      type: [String, Number],
      default: '',
    },
  },
  render() {
    const { color, size } = this
    const loadingSize = typeof size === 'string' ? size : String(size)
    const sizeStyle = {
      width: size ? `${Taro.pxTransform(parseInt(loadingSize))}` : '',
      height: size ? `${Taro.pxTransform(parseInt(loadingSize))}` : '',
    }
    const colorStyle = {
      border: color ? `1px solid ${color}` : '',
      'border-color': color ? `${color} transparent transparent transparent` : '',
    }
    const ringStyle = Object.assign({}, colorStyle, sizeStyle)

    return (
      <view class="at-loading" style={sizeStyle}>
        <view class="at-loading__ring" style={ringStyle}></view>
        <view class="at-loading__ring" style={ringStyle}></view>
        <view class="at-loading__ring" style={ringStyle}></view>
      </view>
    )
  },
}
