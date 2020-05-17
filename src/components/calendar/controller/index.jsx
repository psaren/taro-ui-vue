import Vue from 'vue'
import classnames from 'classnames'
import dayjs from 'dayjs'

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
    atSelectDate: {
      type: Function,
      default: () => () => {},
    },
    atPreMonth: {
      type: Function,
      default: () => () => {},
    },
    atNextMonth: {
      type: Function,
      default: () => () => {},
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
  data() {
    return {
      options: { addGlobalClass: true },
    }
  },
  render() {
    const { generateDate, minDate, maxDate, monthFormat, hideArrow } = this

    const dayjsDate = dayjs(generateDate)
    console.log('dayjsDate', dayjsDate)
    const dayjsMinDate = !!minDate && dayjs(minDate)
    const dayjsMaxDate = !!maxDate && dayjs(maxDate)

    const isMinMonth = dayjsMinDate && dayjsMinDate.startOf('month').isSame(dayjsDate)

    const isMaxMonth = dayjsMaxDate && dayjsMaxDate.startOf('month').isSame(dayjsDate)

    const minDateValue = dayjsMinDate ? dayjsMinDate.format('YYYY-MM') : ''
    const maxDateValue = dayjsMaxDate ? dayjsMaxDate.format('YYYY-MM') : ''

    return (
      <view class="at-calendar__controller controller">
        {hideArrow ? null : (
          <view
            class={classnames('controller__arrow controller__arrow--left', {
              'controller__arrow--disabled': isMinMonth,
            })}
            onTap={this.atPreMonth.bind(this, isMinMonth)}
          />
        )}
        <picker
          mode="date"
          fields="month"
          end={maxDateValue}
          start={minDateValue}
          onChange={this.atSelectDate}
          value={dayjsDate.format('YYYY-MM')}>
          <text class="controller__info">{dayjsDate.format(monthFormat)}</text>
        </picker>
        {hideArrow ? null : (
          <view
            class={classnames('controller__arrow controller__arrow--right', {
              'controller__arrow--disabled': isMaxMonth,
            })}
            onTap={this.atNextMonth.bind(this, isMaxMonth)}
          />
        )}
      </view>
    )
  },
})

export default AtCalendarController
