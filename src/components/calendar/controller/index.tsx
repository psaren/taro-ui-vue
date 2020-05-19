import Vue, { VNode } from 'vue'
import classnames from 'classnames'
import dayjs, { Dayjs } from 'dayjs'

const AtCalendarController = Vue.extend({
  name: 'AtCalendarController',
  props: {
    minDate: {
      type: [String, Number, Date],
      default: '',
    },
    maxDate: {
      type: [String, Number, Date],
      default: '',
    },
    onSelectDate: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
    onPreMonth: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
    onNextMonth: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
    monthFormat: {
      type: String,
      default: 'YYYY年MM月',
    },
    generateDate: {
      type: [Number, String],
      default: Date.now(),
    },
    hideArrow: {
      type: Boolean,
      default: false,
    },
  },
  render(): VNode {
    const { generateDate, minDate, maxDate, monthFormat, hideArrow } = this

    const dayjsDate: Dayjs = dayjs(generateDate)
    const dayjsMinDate: Dayjs | boolean = !!minDate && dayjs(minDate)
    const dayjsMaxDate: Dayjs | boolean = !!maxDate && dayjs(maxDate)

    const isMinMonth: boolean = dayjsMinDate && dayjsMinDate.startOf('month').isSame(dayjsDate)

    const isMaxMonth: boolean = dayjsMaxDate && dayjsMaxDate.startOf('month').isSame(dayjsDate)

    const minDateValue: string = dayjsMinDate ? dayjsMinDate.format('YYYY-MM') : ''
    const maxDateValue: string = dayjsMaxDate ? dayjsMaxDate.format('YYYY-MM') : ''

    return (
      <view class="at-calendar__controller controller">
        {hideArrow ? null : (
          <view
            class={classnames('controller__arrow controller__arrow--left', {
              'controller__arrow--disabled': isMinMonth,
            })}
            onTap={this.onPreMonth.bind(this, isMinMonth)}
          />
        )}
        <picker
          mode="date"
          fields="month"
          end={maxDateValue}
          start={minDateValue}
          onChange={this.onSelectDate}
          value={dayjsDate.format('YYYY-MM')}>
          <text class="controller__info">{dayjsDate.format(monthFormat)}</text>
        </picker>
        {hideArrow ? null : (
          <view
            class={classnames('controller__arrow controller__arrow--right', {
              'controller__arrow--disabled': isMaxMonth,
            })}
            onTap={this.onNextMonth.bind(this, isMaxMonth)}
          />
        )}
      </view>
    )
  },
})

export default AtCalendarController
