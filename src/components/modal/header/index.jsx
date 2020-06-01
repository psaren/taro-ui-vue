import { View } from '@tarojs/components'
import classNames from 'classnames'

export default {
  name: 'AtModalHeader',
  props: {
    className: {
      type: [Object, String],
      default: () => '',
    },
  },
  render() {
    const rootClass = classNames('at-modal__header', this.className)
    return <View class={rootClass}>{this.$slots.default}</View>
  },
}
