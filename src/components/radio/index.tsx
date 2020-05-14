import Vue, { VNode } from 'vue'
import classNames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'
import { RadioOption } from 'types/radio'

const AtRadio = Vue.extend({
  name: 'AtRadio',
  props: {
    customStyle: {
      type: [Object, String],
      default: () => {},
    },
    className: {
      type: [Object, String],
      default: () => {},
    },
    value: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    onClick: {
      type: Function,
      default: () => () => {},
    },
  },
  methods: {
    handleClick(option: RadioOption<any>, event: CommonEvent) {
      if (option.disabled) return
      this.onClick(option.value, event)
    },
  },
  render(): VNode {
    const { customStyle, className, options, value } = this
    console.log('value :>> ', value)
    return (
      <view class={classNames('at-radio', className)} style={customStyle}>
        {options.map((option) => (
          <view
            key={option.value}
            onTap={this.handleClick.bind(this, option)}
            class={classNames({
              'at-radio__option': true,
              'at-radio__option--disabled': option.disabled,
            })}>
            <view class="at-radio__option-wrap">
              <view class="at-radio__option-container">
                <view class="at-radio__title">{option.label}</view>
                <view
                  class={classNames({
                    'at-radio__icon': true,
                    'at-radio__icon--checked': value === option.value,
                  })}>
                  <view class="at-icon at-icon-check text"></view>
                </view>
              </view>
              {option.desc && <view class="at-radio__desc">{option.desc}</view>}
            </view>
          </view>
        ))}
      </view>
    )
  },
})

export default AtRadio
