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
      type: String,
      default: '',
    },
    handleClick: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    handleTab(event) {
      this.handleClick && this.handleClick(event)
    },
  },
  render() {
    const { size, className } = this
    const rootClass = classNames('at-fab', className, {
      [`at-fab--${size}`]: size,
    })
    return (
      <view class={rootClass} onTab={this.handleTab}>
        {this.$slots.default}
      </view>
    )
  },
}
