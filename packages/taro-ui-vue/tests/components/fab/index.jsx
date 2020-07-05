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
    handleTab(event) {
      this.onClick && this.onClick(event)
    },
  },
  render() {
    const { size, className } = this
    const rootClass = classNames('at-fab', className, {
      [`at-fab--${size}`]: size,
    })
    return (
      <view 
        class={rootClass} 
        onTap={this.handleTab.bind(this)}
        onClick={this.handleTab.bind(this)}
      >
        {this.$slots.default}
      </view>
    )
  },
}
