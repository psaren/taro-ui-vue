import { CommonEvent } from '@tarojs/components/types/common'
import classNames from 'classnames'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
}

const TYPE_CLASS = {
  primary: 'primary',
}

const AtTag = {
  name: 'AtTag',
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
    onClick: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
  },
  computed: {
    rootCls() {
      const {
        size = 'normal',
        type = '',
        circle = false,
        disabled = false,
        active = false,
      } = this
      const rootClassName = ['at-tag']
      const classObject = {
        [`at-tag--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
        [`at-tag--${type}`]: TYPE_CLASS[type],
        'at-tag--disabled': disabled,
        'at-tag--active': active,
        'at-tag--circle': circle,
      }
      return classNames(rootClassName, classObject, this.className)
    },
  },
  methods: {
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
    },
  },
}

export default AtTag
