import { View, Image, Switch } from '@tarojs/components'
import classNames from 'classnames'
import { mergeStyle } from '../../../utils/common'

export default {
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
      default: () => () => {},
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
      default: () => ({ value: '' }),
    },
    onSwitchChange: {
      type: Function,
      default: () => () => {},
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
    handleSwitchClick(event) {
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
  render() {
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
      <View class={rootClass} onTap={this.handleClick}>
        <View class="at-list__item-container">
          {thumb && (
            <View class="at-list__item-thumb item-thumb">
              <Image class="item-thumb__info" mode="scaleToFill" src={thumb} />
            </View>
          )}
          {iconInfo.value && (
            <View class="at-list__item-icon item-icon">
              <View
                class={iconClass}
                style={mergeStyle(
                  {
                    color: iconInfo.color || '',
                    fontSize: `${iconInfo.size || 24}px`,
                  },
                  iconInfo.customStyle
                )}></View>
            </View>
          )}
          <View class="at-list__item-content item-content">
            <View class="item-content__info">
              <View class="item-content__info-title">{title}</View>
              {note && <View class="item-content__info-note">{note}</View>}
            </View>
          </View>
          <View class="at-list__item-extra item-extra">
            {extraText && <View class="item-extra__info">{extraText}</View>}

            {extraThumb && !extraText && (
              <View class="item-extra__image">
                <Image class="item-extra__image-info" mode="aspectFit" src={extraThumb} />
              </View>
            )}

            {isSwitch && !extraThumb && !extraText && (
              <View class="item-extra__switch" onTap={this.handleSwitchClick}>
                <Switch
                  color={switchColor}
                  disabled={disabled}
                  checked={switchIsCheck}
                  onChange={this.handleSwitchChange}
                />
              </View>
            )}

            {arrow ? (
              <View class="item-extra__icon">
                <View class={`at-icon item-extra__icon-arrow at-icon-chevron-${arrow}`} />
              </View>
            ) : null}
          </View>
        </View>
      </View>
    )
  },
}
