import classNames from 'classnames'

export default {
  name: 'AtModalContent',
  props: {
    className: {
      type: [Object, String],
      default: () => '',
    },
  },
  render() {
    const rootClass = classNames('at-modal__content', this.className)
    return (
      <scroll-view scrollY class={rootClass}>
        {this.$slots.default}
      </scroll-view>
    )
  },
}
