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
  methods: {
    classNames,
    fileIconClass(item) {
      const { icon } = item
      const iconClass = classNames({
        'at-icon': true,
        [`at-icon-${icon}`]: icon,
      })
      return iconClass
    },
    itemRootClassName(item) {
      const itemRootClassName = ['at-timeline-item']
      if (item.color) itemRootClassName.push(`at-timeline-item--${item.color}`)
      return classNames(itemRootClassName)
    },
    dotClass(item) {
      const dotClass = []
      if (item.icon) {
        dotClass.push('at-timeline-item__icon')
      } else {
        dotClass.push('at-timeline-item__dot')
      }
      return classNames(dotClass)
    },
  },
  computed: {
    rootClassName() {
      const { pending } = this
      const rootClassName = ['at-timeline']
      if (pending) rootClassName.push('at-timeline--pending')
      return rootClassName
    },
  },
}
