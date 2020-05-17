import Vue from 'vue'
import classnames from 'classnames'
import { Calendar } from 'types/calendar'
// import { Text, View } from '@tarojs/components'
import * as constant from '../../common/constant'

const MAP: { [key: number]: string } = {
  [constant.TYPE_PRE_MONTH]: 'pre',
  [constant.TYPE_NOW_MONTH]: 'now',
  [constant.TYPE_NEXT_MONTH]: 'next'
}

const AtCalendarList = Vue.extend({
  name: 'AtCalendarList',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    onClick: {
      type: Function,
      default: () => () => {},
    },
    onLongClick: {
      type: Function,
      default: () => () => {},
    },
  },
  data() {
    return {
      options: { addGlobalClass: true }
    }
  },
  methods: {
    handleClick(item) {
      console.log('handleClick :>> ', this.onClick);
      if (typeof this.onClick === 'function') {
        this.onClick(item)
      }
    },
    handleLongClick(item) {
      if (typeof this.onLongClick === 'function') {
        this.onLongClick(item)
      }
    }
  },
  render() {
    const { list } = this
    if (!list || list.length === 0) return null

    return (
      <view class='at-calendar__list flex'>
        {list.map((item: Calendar.Item, index: number) => (
          <view
            key={`list-item-${item.value}-${index}`}
            onTap={this.handleClick.bind(this, item)}
            onLongPress={this.handleLongClick.bind(this, item)}
            class={classnames(
              'flex__item',
              `flex__item--${MAP[item.type]}`,
              {
                'flex__item--today': item.isToday,
                'flex__item--active': item.isActive,
                'flex__item--selected': item.isSelected,
                'flex__item--selected-head': item.isSelectedHead,
                'flex__item--selected-tail': item.isSelectedTail,
                'flex__item--blur':
                  item.isDisabled ||
                  item.type === constant.TYPE_PRE_MONTH ||
                  item.type === constant.TYPE_NEXT_MONTH
              }
            )}
          >
            <view class='flex__item-container'>
              <view class='container-text'>{item.text}</view>
            </view>
            <view class='flex__item-extra extra'>
              {item.marks && item.marks.length > 0 ? (
                <view class='extra-marks'>
                  {item.marks.map((mark, key) => (
                    <text key={key} class='mark'>
                      {mark}
                    </text>
                  ))}
                </view>
              ) : null}
            </view>
          </view>
        ))}
      </view>
    )
  }
})

export default AtCalendarList
