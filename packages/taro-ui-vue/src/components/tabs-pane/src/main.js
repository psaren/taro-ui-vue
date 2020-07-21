import classNames from 'classnames'

export default {
  name: 'AtTabsPane',
  props: {
    customStyle: {
      type: [Object, String],
      default: () => '',
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
    tabDirection: {
      type: String,
      default: 'horizontal',
      validator: (val) => ['horizontal', 'vertical'].includes(val),
    },
    index: {
      type: Number,
      default: 0,
    },
    current: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    classNames,
  },
}
