import { View } from '@tarojs/components'
import classNames from 'classnames'

export default {
  name: 'AtActionSheetHeader',
  props: {
    className: {
      type: [Array, String],
      default: () => '',
    },
  },
  render() {
    const rootClass = classNames('at-action-sheet__header', this.className)

    return <View class={rootClass}>{this.$slots.default}</View>
  },
}
