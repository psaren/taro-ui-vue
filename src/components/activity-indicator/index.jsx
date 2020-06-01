import { View } from '@tarojs/components'
import classNames from 'classnames'
import AtLoading from '../loading/index.jsx'

export default {
  name: 'AtActivityIndicator',
  props: {
    size: {
      type: Number,
      default: 0,
    },
    mode: {
      type: String,
      default: 'normal',
    },
    color: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
    isOpened: {
      type: Boolean,
      default: true,
    },
  },
  render() {
    const { color, size, mode, content, isOpened, className } = this

    const rootClass = classNames(
      'at-activity-indicator',
      {
        'at-activity-indicator--center': mode === 'center',
        'at-activity-indicator--isopened': isOpened,
      },
      className
    )

    return (
      <View class={rootClass}>
        <View class="at-activity-indicator__body">
          <AtLoading size={size} color={color} />
        </View>
        {content && <View class="at-activity-indicator__content">{content}</View>}
      </View>
    )
  },
}
