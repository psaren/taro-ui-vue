import classNames from 'classnames'
import dayjs from 'dayjs'
import mixins from '../mixins'

export default {
  mixins: [mixins],
  props: {
    validDates: {
      type: Array,
      default: () => [],
    },
    marks: {
      type: Array,
      default: () => [],
    },
    selectedDates: {
      type: Array,
      default: () => [],
    },
    isSwiper: {
      type: Boolean,
      default: true,
    },
    hideArrow: {
      type: Boolean,
      default: false,
    },
    isVertical: {
      type: Boolean,
      default: false,
    },
    isMultiSelect: {
      type: Boolean,
      default: false,
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD',
    },
    currentDate: {
      type: [Number, String],
      default: Date.now(),
    },
    monthFormat: {
      type: String,
      default: 'YYYY年MM月',
    },
    onMonthChange: {
      type: Function,
      default: () => () => {},
    },
    onClickPreMonth: {
      type: Function,
      default: () => () => {},
    },
    onClickNextMonth: {
      type: Function,
      default: () => () => {},
    },
    onDayClick: {
      type: Function,
      default: () => () => {},
    },
    onSelectDate: {
      type: Function,
      default: () => () => {},
    },
    onDayLongClick: {
      type: Function,
      default: () => () => {},
    },
    minDate: {
      type: [String, Number, Date],
      default: () => '',
    },
    maxDate: {
      type: [String, Number, Date],
      default: '',
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
  },
  data() {
    return {
      state: {},
    }
  },
  computed: {
    nextProps() {
      const { currentDate, isMultiSelect } = this
      return { currentDate, isMultiSelect }
    },
  },
  watch: {
    nextProps(val, oldVal) {
      const { currentDate, isMultiSelect } = val
      if (!currentDate || currentDate === oldVal.currentDate) return
      if (isMultiSelect && oldVal.isMultiSelect) {
        const { start, end } = currentDate
        const { start: preStart, end: preEnd } = this.currentDate

        if (start === preStart && preEnd === end) {
          return
        }
      }
      const stateValue = this.getInitializeState(currentDate, isMultiSelect)
      this.state = stateValue
    },
  },
  created() {
    const { currentDate, isMultiSelect } = this
    this.state = this.getInitializeState(currentDate, isMultiSelect)
  },
  methods: {
    classNames,
    getInitializeState(currentDate, isMultiSelect) {
      let end
      let start
      let generateDateValue

      if (!currentDate) {
        const dayjsStart = dayjs()
        start = dayjsStart.startOf('day').valueOf()
        generateDateValue = dayjsStart.startOf('month').valueOf()
        return {
          generateDate: generateDateValue,
          selectedDate: {
            start: '',
          },
        }
      }

      if (isMultiSelect) {
        const { start: cStart, end: cEnd } = currentDate

        const dayjsStart = dayjs(cStart)

        start = dayjsStart.startOf('day').valueOf()
        generateDateValue = dayjsStart.startOf('month').valueOf()

        end = cEnd ? dayjs(cEnd).startOf('day').valueOf() : start
      } else {
        const dayjsStart = dayjs(currentDate)

        start = dayjsStart.startOf('day').valueOf()
        generateDateValue = dayjsStart.startOf('month').valueOf()

        end = start
      }

      return {
        generateDate: generateDateValue,
        selectedDate: this.getSelectedDate(start, end),
      }
    },
    getSingleSelectdState(value) {
      const { generateDate } = this.state

      const stateValue = {
        selectedDate: this.getSelectedDate(value.valueOf()),
      }

      const dayjsGenerateDate = value.startOf('month')
      const generateDateValue = dayjsGenerateDate.valueOf()

      if (generateDateValue !== generateDate) {
        this.triggerChangeDate(dayjsGenerateDate)
        stateValue.generateDate = generateDateValue
      }

      return stateValue
    },
    getMultiSelectedState(value) {
      const { selectedDate } = this.state
      const { end, start } = selectedDate

      const valueUnix = value.valueOf()
      const state = {
        selectedDate,
      }

      if (end) {
        state.selectedDate = this.getSelectedDate(valueUnix, 0)
      } else {
        state.selectedDate.end = Math.max(valueUnix, +start)
        state.selectedDate.start = Math.min(valueUnix, +start)
      }

      return state
    },
    getSelectedDate(start, end) {
      const stateValue = {
        start,
        end: start,
      }

      if (typeof end !== 'undefined') {
        stateValue.end = end
      }

      return stateValue
    },
    triggerChangeDate(value) {
      const { format } = this

      if (typeof this.onMonthChange !== 'function') return

      this.onMonthChange(value.format(format))
    },
    setMonth(vectorCount) {
      const { format } = this
      const { generateDate } = this.state

      const _generateDate = dayjs(generateDate).add(vectorCount, 'month')
      this.state.generateDate = _generateDate.valueOf()
      if (vectorCount && typeof this.onMonthChange === 'function') {
        this.onMonthChange(_generateDate.format(format))
      }
    },
    handleClickPreMonth(isMinMonth) {
      if (isMinMonth === true) {
        return
      }

      this.setMonth(-1)

      if (typeof this.onClickPreMonth === 'function') {
        this.onClickPreMonth()
      }
    },
    handleClickNextMonth(isMaxMonth) {
      if (isMaxMonth === true) {
        return
      }

      this.setMonth(1)

      if (typeof this.onClickNextMonth === 'function') {
        this.onClickNextMonth()
      }
    },
    handleSelectDate(e) {
      const { value } = e.detail

      const _generateDate = dayjs(value)
      const _generateDateValue = _generateDate.valueOf()

      if (this.state.generateDate === _generateDateValue) return

      this.triggerChangeDate(_generateDate)
      this.state.generateDate = _generateDateValue
    },
    handleDayClick(item) {
      const { isMultiSelect } = this
      const { isDisabled, value } = item

      if (isDisabled) return

      const dayjsDate = dayjs(value)

      let stateValue = {}

      if (isMultiSelect) {
        stateValue = this.getMultiSelectedState(dayjsDate)
      } else {
        stateValue = this.getSingleSelectdState(dayjsDate)
      }
      this.state = stateValue
      this.$nextTick(() => {
        this.handleSelectedDate()
      })
      if (typeof this.onDayClick === 'function') {
        this.onDayClick({ value: item.value })
      }
    },
    handleSelectedDate() {
      const selectDate = this.state.selectedDate
      if (typeof this.onSelectDate === 'function') {
        const info = {
          start: dayjs(selectDate.start).format(this.format),
        }

        if (selectDate.end) {
          info.end = dayjs(selectDate.end).format(this.format)
        }

        this.onSelectDate({
          value: info,
        })
      }
    },
    handleDayLongClick(item) {
      if (typeof this.onDayLongClick === 'function') {
        this.onDayLongClick({ value: item.value })
      }
    },
  },
}
