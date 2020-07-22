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
      <view class={rootClass} onTap={this.handleClick.bind(this)} onClick={this.handleClick.bind(this)}>
        {this.$slots.default}
      </view>
    )
  },
}
