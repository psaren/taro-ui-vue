import classNames from 'classnames'

export default {
  name: 'AtCard',
  props: {
    note: {
      type: String,
      default: '',
    },
    isFull: {
      type: Boolean,
      default: false,
    },
    thumb: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    extra: {
      type: String,
      default: '',
    },
    icon: {
      type: Object,
      default: () => {},
    },
    onClick: {
      type: Function,
      default: () => () => {},
    },
    renderIcon: {
      type: String,
      default: '',
    },
    extraStyle: {
      type: Object,
      default: () => {},
    },
    className: {
      type: [String, Array],
      default: '',
    },
  },
  computed: {
    rootClass() {
      return classNames(
        'at-card',
        {
          'at-card--full': this.isFull,
        },
        this.className
      )
    },
    iconClass() {
      const { icon } = this
      return classNames({
        'at-icon': true,
        [`at-icon-${icon && icon.value}`]: icon && icon.value,
        'at-card__header-icon': true,
      })
    },
    iconStyle() {
      const { icon } = this
      return {
        color: (icon && icon.color) || '',
        fontSize: (icon && `${icon.size}px`) || '',
      }
    },
  },
  methods: {
    handleClick(args) {
      if (typeof this.onClick === 'function') {
        this.onClick(args)
      }
    },
  },
}
