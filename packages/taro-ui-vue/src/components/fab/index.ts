import classNames from 'classnames'

export default {
  name: 'AtFab',
  props: {
    size: {
      type: String,
      default: 'normal',
      validator: (val) => ['normal', 'small'].includes(val),
    },
    className: {
      type: [Object, String],
      default: '',
    },
    onClick: {
      type: Function,
      default: () => () => {},
    },
  },
  methods: {
    classNames,
    handleTab(event) {
      this.onClick && this.onClick(event)
    },
  },
}
