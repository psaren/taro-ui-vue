<template>
   <form
    :class="rootCls"
    :style="customStyle"
    @submit="handleSubmit"
    :reportSubmit="reportSubmit"
    @reset="handleReset">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import classNames from 'classnames'
export default {
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
  computed: {
    rootCls() {
      return classNames('at-form', this.className)
    }
  },
  methods: {
    handleSubmit(): void {
      this.onSubmit && this.onSubmit(arguments)
    },

    handleReset(): void {
      this.onReset && this.onReset(arguments)
    },
  },
}
</script>