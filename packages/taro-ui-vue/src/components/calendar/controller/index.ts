import classnames from 'classnames'
import dayjs, { Dayjs } from 'dayjs'

const AtCalendarController = {
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
  computed: {
    dayjsDate(): Dayjs {
      return dayjs(this.generateDate)
    },
    dayjsMinDate(): Dayjs | boolean {
      const { minDate } = this
      return !!minDate && dayjs(minDate)
    },
    dayjsMaxDate(): Dayjs | boolean {
      const { maxDate } = this
      return !!maxDate && dayjs(maxDate)
    },
    isMinMonth(): boolean {
      const { dayjsMinDate, dayjsDate } = this
      return dayjsMinDate && dayjsMinDate.startOf('month').isSame(dayjsDate)
    },
    isMaxMonth(): boolean {
      const { dayjsMaxDate, dayjsDate } = this
      return dayjsMaxDate && dayjsMaxDate.startOf('month').isSame(dayjsDate)
    },
    minDateValue(): string {
      const { dayjsMinDate } = this
      return dayjsMinDate ? dayjsMinDate.format('YYYY-MM') : ''
    },
    maxDateValue(): string {
      const { dayjsMaxDate } = this
      return dayjsMaxDate ? dayjsMaxDate.format('YYYY-MM') : ''
    },
  },
  methods: {
    getLeftArrowCls(): string {
      return classnames('controller__arrow controller__arrow--left', {
        'controller__arrow--disabled': this.isMinMonth,
      })
    },
    getRightArrowCls(): string {
      return classnames('controller__arrow controller__arrow--right', {
        'controller__arrow--disabled': this.isMaxMonth,
      })
    },
  },
}

export default AtCalendarController
