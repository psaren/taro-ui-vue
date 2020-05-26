import Vue, { VNode } from 'vue'
import classNames from 'classnames'

const AtForm = Vue.extend({
  name: 'AtForm',
  props: {
    customStyle: {
      type: [Object, String],
      default: function () {
        return {}
      },
    },
    className: {
      type: [Object, String],
      default: function () {
        return {}
      },
    },
    reportSubmit: {
      type: Boolean,
      default: false,
    },
    onSubmit: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
    onReset: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
  },
  methods: {
    handleSubmit(): void {
      this.onSubmit && this.onSubmit(arguments)
    },

    handleReset(): void {
      this.onReset && this.onReset(arguments)
    },
  },
  render(): VNode {
    const { customStyle, className, reportSubmit } = this
    const rootCls = classNames('at-form', className)

    return (
      <form
        class={rootCls}
        style={customStyle}
        onSubmit={this.handleSubmit.bind(this)}
        reportSubmit={reportSubmit}
        onReset={this.handleReset.bind(this)}>
        {this.$slots.default}
      </form>
    )
  },
})

export default AtForm
