import { View } from '@tarojs/components'
import classNames from 'classnames'

export default {
  name: 'AtActionSheetItem',
  props: {
    className: {
      type: [Array, String],
      default: () => '',
    },
    onClick: {
      type: Function,
      default: () => () => {},
    },
  },
  methods: {
    handleClick(e) {
      this.onClick && this.onClick(e)
    },
  },
  render() {
    const rootClass = classNames('at-action-sheet__item', this.className)

    return (
      <View class={rootClass} onTap={this.handleClick}>
        {this.$slots.default}
      </View>
    )
  },
}
