import classNames from 'classnames'

export default {
  name: 'AtActionSheetFooter',
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
  methds: {
    handleClick(e) {
      this.onClick && this.onClick(e)
    },
  },
  render() {
    const rootClass = classNames('at-action-sheet__footer', this.className)

    return (
      <view onTap={this.handleClick} class={rootClass}>
        {this.$slots.default}
      </view>
    )
  },
}
