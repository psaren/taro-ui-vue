import { View } from '@tarojs/components'
import classNames from 'classnames'

export default {
  name: 'AtTimeline',
  props: {
    pending: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
      validator: (val) => val.every((item) => typeof item === 'object'),
    },
    customStyle: {
      type: [Object, String],
      default: () => '',
    },
    className: {
      type: [Object, String],
      default: () => '',
    },
  },
  render() {
    const { pending, items, customStyle, className } = this

    const rootClassName = ['at-timeline']
    if (pending) rootClassName.push('at-timeline--pending')

    const rootClassObject = {
      'at-timeline--pending': pending,
    }

    const itemElems = items.map((item, index) => {
      const { title = '', color, icon, content = [] } = item

      const iconClass = classNames({
        'at-icon': true,
        [`at-icon-${icon}`]: icon,
      })

      const itemRootClassName = ['at-timeline-item']
      if (color) itemRootClassName.push(`at-timeline-item--${color}`)

      const dotClass = []
      if (icon) {
        dotClass.push('at-timeline-item__icon')
      } else {
        dotClass.push('at-timeline-item__dot')
      }

      return (
        <View class={classNames(itemRootClassName)} key={`at-timeline-item-${index}`}>
          <View class="at-timeline-item__tail"></View>
          <View class={classNames(dotClass)}>{icon && <View class={iconClass}></View>}</View>
          <View class="at-timeline-item__content">
            <View class="at-timeline-item__content-item">{title}</View>
            {content.map((sub, subIndex) => (
              <View
                class="at-timeline-item__content-item at-timeline-item__content--sub"
                key={subIndex}>
                {sub}
              </View>
            ))}
          </View>
        </View>
      )
    })
    return (
      <View class={classNames(rootClassName, rootClassObject, className)} style={customStyle}>
        {itemElems}
      </View>
    )
  },
}
