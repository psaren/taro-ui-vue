import { View, Image } from '@tarojs/components'
import classNames from 'classnames'
import _chunk from 'lodash/chunk'
import { mergeStyle } from '../../utils/common'

export default {
  name: 'AtGrid',
  props: {
    mode: {
      type: String,
      default: 'square',
      validator: (val) => ['rect', 'square'].includes(val),
    },
    hasBorder: {
      type: Boolean,
      default: true,
    },
    onClick: {
      type: Function,
      default: () => () => {},
    },
    columnNum: {
      type: Number,
      default: 3,
    },
    data: {
      type: Array,
      default: () => [],
    },
    className: {
      type: [Object, String],
      default: '',
    },
  },
  methods: {
    /**
     *
     * @param {AtGridItem} item
     * @param {number} index
     * @param {number} row
     * @param {event} event
     */
    handleClick(item, index, row, event) {
      const { onClick, columnNum } = this
      if (typeof onClick === 'function') {
        const clickIndex = row * columnNum + index
        onClick(item, clickIndex, event)
      }
    },
  },
  render() {
    const { data, mode, columnNum, hasBorder } = this

    if (Array.isArray(data) && data.length === 0) {
      return null
    }

    const gridGroup = _chunk(data, columnNum)

    const bodyClass = classNames(['at-grid__flex-item', 'at-grid-item', `at-grid-item--${mode}`], {
      'at-grid-item--no-border': !hasBorder,
    })

    return (
      <View class={classNames('at-grid', this.className)}>
        {gridGroup.map((item, i) => (
          <View class="at-grid__flex" key={`at-grid-group-${i}`}>
            {item.map((childItem, index) => (
              <View
                key={`at-grid-item-${index}`}
                class={classNames(bodyClass, {
                  'at-grid-item--last': index === columnNum - 1,
                })}
                onTap={this.handleClick.bind(this, childItem, index, i)}
                style={{
                  flex: `0 0 ${100 / columnNum}%`,
                }}>
                <View class="at-grid-item__content">
                  <View class="at-grid-item__content-inner">
                    <View class="content-inner__icon">
                      {childItem.image && (
                        <Image
                          class="content-inner__img"
                          src={childItem.image}
                          mode="scaleToFill"
                        />
                      )}
                      {childItem.iconInfo && !childItem.image && (
                        <View
                          class={classNames(
                            childItem.iconInfo.prefixClass || 'at-icon',
                            {
                              [`${childItem.iconInfo.prefixClass || 'at-icon'}-${
                                childItem.iconInfo.value
                              }`]: childItem.iconInfo.value,
                            },
                            childItem.iconInfo.className
                          )}
                          style={mergeStyle(
                            {
                              color: childItem.iconInfo.color,
                              fontSize: `${childItem.iconInfo.size || 24}px`,
                            },
                            childItem.iconInfo.customStyle
                          )}
                        />
                      )}
                    </View>
                    <View class="content-inner__text">{childItem.value}</View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>
    )
  },
}
