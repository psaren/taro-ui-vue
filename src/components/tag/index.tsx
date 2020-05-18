import Vue, { VNode } from 'vue'
import Component from 'vue-class-component'
import { CommonEvent } from '@tarojs/components/types/common'
import classNames from 'classnames'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
}

const TYPE_CLASS = {
  primary: 'primary',
}

const AtTagProps = Vue.extend({
  props: {
    size: {
      type: String,
      default: 'normal',
      validator: (val) => ['normal', 'small'].includes(val),
    },
    type: {
      type: String,
      default: '',
      validator: (val) => ['', 'primary'].includes(val),
    },
    name: {
      type: String,
      default: '',
    },
    circle: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    customStyle: {
      type: [Object, String],
      default: () => {},
    },
    className: {
      type: [Object, String],
      default: () => {},
    },
    onClick: {
      type: Function,
      default: () => () => {},
    },
  },
})

@Component
export default class AtTag extends AtTagProps {
  handleClick(event: CommonEvent): void {
    if (!this.disabled) {
      this.onClick &&
        this.onClick(
          {
            name: this.name,
            active: this.active,
          },
          event
        )
    }
  }
  render(): VNode {
    const {
      size = 'normal',
      type = '',
      circle = false,
      disabled = false,
      active = false,
      customStyle,
    } = this
    const rootClassName = ['at-tag']

    const classObject = {
      [`at-tag--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
      [`at-tag--${type}`]: TYPE_CLASS[type],
      'at-tag--disabled': disabled,
      'at-tag--active': active,
      'at-tag--circle': circle,
    }

    return (
      <view
        class={classNames(rootClassName, classObject, this.className)}
        style={customStyle}
        onTap={this.handleClick.bind(this)}>
        {this.$slots.default}
      </view>
    )
  }
}
