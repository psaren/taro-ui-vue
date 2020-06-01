import { View } from '@tarojs/components'
import classNames from 'classnames'
import { delayQuerySelector } from '../../../utils/common'

export default {
  name: 'AtSwipeActionOptions',
  props: {
    componentId: {
      type: String,
      default: '',
    },
    onQueryedDom: {
      type: Function,
      default: () => () => {},
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
  },
  methods: {
    trrigerOptionsDomUpadte() {
      delayQuerySelector(this, `#swipeActionOptions-${this.componentId}`).then((res) => {
        this.onQueryedDom(res[0])
      })
    },
  },
  render() {
    const rootClass = classNames('at-swipe-action__options', this.className)

    return (
      <View id={`swipeActionOptions-${this.componentId}`} class={rootClass}>
        {this.$slots.default}
      </View>
    )
  },
}
