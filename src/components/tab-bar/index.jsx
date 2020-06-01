import { View, Image } from '@tarojs/components'
import classNames from 'classnames'
import Badge from '../badge/index'
import { mergeStyle } from '../../utils/common'

export default {
  name: 'AtTabBar',
  props: {
    customStyle: {
      type: [Object, String],
      default: '',
    },
    className: {
      type: [Array, String],
      default: '',
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    current: {
      type: Number,
      default: 0,
    },
    iconSize: {
      type: [Number, String],
      default: '',
    },
    fontSize: {
      type: [Number, String],
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    selectedColor: {
      type: String,
      default: '',
    },
    tabList: {
      type: Array,
      default: () => [],
    },
    onClick: {
      type: Function,
      default: () => () => {},
    },
  },
  methods: {
    /**
     *
     * @param {number} index
     * @param {event} event
     */
    handleClick(index, event) {
      this.onClick && this.onClick(index, event)
    },
  },
  render() {
    const {
      customStyle,
      className,
      fixed,
      backgroundColor,
      tabList,
      current,
      color,
      iconSize,
      fontSize,
      selectedColor,
    } = this
    // const { isIPhoneX } = this.state
    const defaultStyle = {
      color: color || '',
    }
    const selectedStyle = {
      color: selectedColor || '',
    }
    const titleStyle = {
      fontSize: fontSize ? `${fontSize}px` : '',
    }
    const rootStyle = {
      backgroundColor: backgroundColor || '',
    }
    const imgStyle = {
      width: `${iconSize}px`,
      height: `${iconSize}px`,
    }

    return (
      <View
        class={classNames(
          {
            'at-tab-bar': true,
            'at-tab-bar--fixed': fixed,
            // 'at-tab-bar--ipx': isIPhoneX
          },
          className
        )}
        style={mergeStyle(rootStyle, customStyle)}>
        {tabList.map((item, i) => (
          <View
            class={classNames('at-tab-bar__item', {
              'at-tab-bar__item--active': current === i,
            })}
            style={current === i ? selectedStyle : defaultStyle}
            key={item.title}
            onTap={this.handleClick.bind(this, i)}>
            {item.iconType ? (
              <Badge dot={!!item.dot} value={item.text} maxValue={Number(item.max)}>
                <View class="at-tab-bar__icon">
                  <View
                    class={classNames(`${item.iconPrefixClass || 'at-icon'}`, {
                      [`${item.iconPrefixClass || 'at-icon'}-${item.selectedIconType}`]:
                        current === i && item.selectedIconType,
                      [`${item.iconPrefixClass || 'at-icon'}-${item.iconType}`]: !(
                        current === i && item.selectedIconType
                      ),
                    })}
                    style={{
                      color: current === i ? selectedColor : color,
                      fontSize: iconSize ? `${iconSize}px` : '',
                    }}></View>
                </View>
              </Badge>
            ) : null}

            {item.image ? (
              <Badge dot={!!item.dot} value={item.text} maxValue={Number(item.max)}>
                <View class="at-tab-bar__icon">
                  <Image
                    class={classNames('at-tab-bar__inner-img', {
                      'at-tab-bar__inner-img--inactive': current !== i,
                    })}
                    mode="widthFix"
                    src={item.selectedImage || item.image}
                    style={imgStyle}></Image>
                  <Image
                    class={classNames('at-tab-bar__inner-img', {
                      'at-tab-bar__inner-img--inactive': current === i,
                    })}
                    mode="widthFix"
                    src={item.image}
                    style={imgStyle}></Image>
                </View>
              </Badge>
            ) : null}

            <View>
              <Badge
                dot={item.iconType || item.image ? false : !!item.dot}
                value={item.iconType || item.image ? '' : item.text}
                maxValue={item.iconType || item.image ? 0 : Number(item.max)}>
                <View class="at-tab-bar__title" style={titleStyle}>
                  {item.title}
                </View>
              </Badge>
            </View>
          </View>
        ))}
      </View>
    )
  },
}
