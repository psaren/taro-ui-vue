import classNames from 'classnames'

export default {
  name: 'AtSteps',
  props: {
    customStyle: {
      type: [Object, String],
      default: () => '',
    },
    className: {
      type: [Object, String],
      default: () => '',
    },
    current: {
      type: Number,
      default: 0,
    },
    items: {
      type: Array,
      default: () => [],
    },
    onChange: {
      type: Function,
      default: () => () => {},
    },
  },
  methods: {
    classNames,
    handleClick(event) {
      this.onClick && this.onClick(event)
    },
  },
}
