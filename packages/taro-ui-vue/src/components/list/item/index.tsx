import classNames from 'classnames'
import { mergeStyle } from '../../../utils/common'
import Vue from 'vue'

const AtListItem = Vue.extend({
  name: 'AtListItem',
  props: {
    className: {
      type: [Array, String],
      default: '',
    },
    note: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    thumb: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      default: function () {
        return () => {}
      },
    },
    isSwitch: {
      type: Boolean,
      default: false,
    },
    hasBorder: {
      type: Boolean,
      default: true,
    },
    switchColor: {
      type: String,
      default: '#6190E8',
    },
    switchIsCheck: {
      type: Boolean,
      default: false,
    },
    extraText: {
      type: String,
      default: '',
    },
    extraThumb: {
      type: String,
      default: '',
    },
    iconInfo: {
      type: Object,
      default: function () {
        return { value: '' }
      },
    },
    onSwitchChange: {
      type: Function,
      default: function () {
        return () => {}
      },
    },
    arrow: {
      type: String,
      default: '',
      validator: (val) => ['up', 'down', 'right', ''].includes(val),
    },
  },
  methods: {
    /**
     *
     * @param {event} event
     */
    handleClick(event) {
      if (typeof this.onClick === 'function' && !this.disabled) {
        this.onClick(event)
      }
    },
    /**
     *
     * @param {event} event
     */
    handleSwitchClick() {
      // event.stopPropagation()
    },
    /**
     *
     * @param {event} event
     */
    handleSwitchChange(event) {
      if (typeof this.onSwitchChange === 'function' && !this.disabled) {
        this.onSwitchChange(event)
      }
    },
  },
  render(h) {
    const {
      note,
      arrow,
      thumb,
      iconInfo,
      disabled,
      isSwitch,
      hasBorder,
      extraThumb,
      switchColor,
      switchIsCheck,
    } = this

    let { extraText, title } = this

    extraText = String(extraText)
    title = String(title)

    const rootClass = classNames(
      'at-list__item',
      {
        'at-list__item--thumb': thumb,
        'at-list__item--multiple': note,
        'at-list__item--disabled': disabled,
        'at-list__item--no-border': !hasBorder,
      },
      this.className
    )
    const iconClass = classNames(
      iconInfo.prefixClass || 'at-icon',
      {
        [`${iconInfo.prefixClass || 'at-icon'}-${iconInfo.value}`]: iconInfo.value,
      },
      iconInfo.className
    )

    return (
      <view 
        class={rootClass} 
        onTap={this.handleClick.bind(this)}
        onClick={this.handleClick.bind(this)}
      >
        <view class="at-list__item-container">
          {thumb && (
            <view class="at-list__item-thumb item-thumb">
              <image class="item-thumb__info" mode="scaleToFill" src={thumb} />
            </view>
          )}
          {iconInfo.value && (
            <view class="at-list__item-icon item-icon">
              <view
                class={iconClass}
                style={mergeStyle(
                  {
                    color: iconInfo.color || '',
                    fontSize: `${iconInfo.size || 24}px`,
                  },
                  iconInfo.customStyle
                )}></view>
            </view>
          )}
          <view class="at-list__item-content item-content">
            <view class="item-content__info">
              <view class="item-content__info-title">{title}</view>
              {note && <view class="item-content__info-note">{note}</view>}
            </view>
          </view>
          <view class="at-list__item-extra item-extra">
            {extraText && <view class="item-extra__info">{extraText}</view>}

            {extraThumb && !extraText && (
              <view class="item-extra__image">
                <image class="item-extra__image-info" mode="aspectFit" src={extraThumb} />
              </view>
            )}

            {isSwitch && !extraThumb && !extraText && (
              <view 
                class="item-extra__switch" 
                onTap={this.handleSwitchClick.bind(this)}
                onClick={this.handleSwitchClick.bind(this)}
              >
                <switch
                  color={switchColor}
                  disabled={disabled}
                  checked={switchIsCheck}
                  onChange={this.handleSwitchChange}
                />
              </view>
            )}

            {arrow ? (
              <view class="item-extra__icon">
                <view class={`at-icon item-extra__icon-arrow at-icon-chevron-${arrow}`} />
              </view>
            ) : null}
          </view>
        </view>
      </view>
    )
  },
})

export default AtListItem
