import { View } from '@tarojs/components'
import classNames from 'classnames'

export default {
  name: 'AtModalAction',
  props: {
    isSimple: {
      type: Boolean,
      default: false,
    },
    className: {
      type: [Object, String],
      default: () => '',
    },
  },
  render() {
    const rootClass = classNames(
      'at-modal__footer',
      {
        'at-modal__footer--simple': this.isSimple,
      },
      this.className
    )

    return (
      <View class={rootClass}>
        <View class="at-modal__action">{this.$slots.default}</View>
      </View>
    )
  },
}
