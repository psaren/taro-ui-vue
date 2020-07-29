import classnames from 'classnames'
import dayjs from 'dayjs'
import { delayQuerySelector } from '../../../utils/common'
import generateCalendarGroup from '../common/helper'
import mixins from '../../mixins'

const ANIMTE_DURATION = 300

const AtCalendarBody = {
  mixins: [mixins],
  props: {
    marks: {
      type: Array,
      default: () => [],
    },
    selectedDate: {
      type: Object,
      default: () => ({
        end: Date.now(),
        start: Date.now(),
      }),
    },
    selectedDates: {
      type: Array,
      default: () => [],
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD',
    },
    generateDate: {
      type: [Number, String],
      default: Date.now(),
    },
    validDates: {
      type: Array,
      default: () => [],
    },
    minDate: {
      type: [String, Number, Date],
      default: '',
    },
    maxDate: {
      type: [String, Number, Date],
      default: '',
    },
    isVertical: {
      type: Boolean,
      default: false,
    },
    isSwiper: {
      type: Boolean,
      default: true,
    },
    onDayClick: {
      type: Function,
      default: function() {
        return () => {}
      },
    },
    onLongClick: {
      type: Function,
      default: function() {
        return () => {}
      },
    },
    onSwipeMonth: {
      type: Function,
      default: function() {
        return () => {}
      }
    }
  },
  data() {
    const { validDates, marks, format, minDate, maxDate, selectedDates } = this
    this.generateFunc = generateCalendarGroup({
      validDates,
      format,
      minDate,
      maxDate,
      marks,
      selectedDates,
    })
    return {
      changeCount: 0,
      currentSwiperIndex: 1,
      startX: 0,
      swipeStartPoint: 0,
      isPreMonth: false,
      maxWidth: 0,
      isTouching: false,
      options: { addGlobalClass: true },
      state: {
        listGroup: [],
        offsetSize: 0,
        isAnimate: false,
      },
      isH5: process.env.TARO_ENV === 'h5',
    }
  },
  computed: {
    nextProps() {
      const {
        validDates,
        marks,
        format,
        minDate,
        maxDate,
        generateDate,
        selectedDate,
        selectedDates,
      } = this
      return {
        validDates,
        marks,
        format,
        minDate,
        maxDate,
        generateDate,
        selectedDate,
        selectedDates,
      }
    },
    h5CalendarBody() {
      return classnames(
        'main',
        'at-calendar-slider__main',
        `at-calendar-slider__main--${process.env.TARO_ENV}`
      )
    },
    h5CalendarMainBodyCls() {
      const { isSwiper, isAnimate } = this
      return classnames('main__body  body', {
        'main__body--slider': isSwiper,
        'main__body--animate': isAnimate
      })
    },
    h5CalendarMainBodyStyle() {
      const { isSwiper } = this
      const { offsetSize } = this.state
      return {
        transform: isSwiper
          ? `translateX(-100%) translate3d(${offsetSize},0,0)`
          : '',
        WebkitTransform: isSwiper
          ? `translateX(-100%) translate3d(${offsetSize}px,0,0)`
          : ''
      }
    },
    wrapCls() {
      return classnames(
        'main',
        'at-calendar-slider__main',
        `at-calendar-slider__main--${process.env.TARO_ENV}`
      )
    },
  },
  watch: {
    nextProps(val) {
      const {
        validDates,
        marks,
        format,
        minDate,
        maxDate,
        generateDate,
        selectedDate,
        selectedDates,
      } = val
      this.generateFunc = generateCalendarGroup({
        validDates,
        format,
        minDate,
        maxDate,
        marks,
        selectedDates,
      })
      const listGroup = this.getGroups(generateDate, selectedDate)

      this.setState({
        offsetSize: 0,
        listGroup,
      })
    },
  },
  created() {
    const { generateDate, selectedDate } = this
    this.setState({
      listGroup: this.getGroups(generateDate, selectedDate),
    })
  },
  mounted() {
    delayQuerySelector(this, '.at-calendar-slider__main').then((res) => {
      if (res[0]) {
        this.maxWidth = res[0].width
      }
    })
  },
  methods: {
    getRootCls() {
      return classnames(
        'main',
        'at-calendar-slider__main',
        `at-calendar-slider__main--${process.env.TARO_ENV}`
      )
    },
    getGroups(generateDate, selectedDate) {
      const dayjsDate = dayjs(generateDate)
      const arr = []
      const preList = this.generateFunc(dayjsDate.subtract(1, 'month').valueOf(), selectedDate)

      const nowList = this.generateFunc(generateDate, selectedDate, true)

      const nextList = this.generateFunc(dayjsDate.add(1, 'month').valueOf(), selectedDate)

      const preListIndex = this.currentSwiperIndex === 0 ? 2 : this.currentSwiperIndex - 1
      const nextListIndex = this.currentSwiperIndex === 2 ? 0 : this.currentSwiperIndex + 1
      arr[preListIndex] = preList
      arr[nextListIndex] = nextList
      arr[this.currentSwiperIndex] = nowList

      return arr
    },
    handleTouchStart(e) {
      if (!this.isSwiper) {
        return
      }
      this.isTouching = true
      this.startX = e.touches[0].clientX
    },
    handleTouchMove(e) {
      if (!this.isSwiper) {
        return
      }
      if (!this.isTouching) return

      const { clientX } = e.touches[0]
      const offsetSize = clientX - this.startX

      this.setState({
        offsetSize,
      })
    },
    animateMoveSlide(offset, callback) {
      this.setState(
        {
          isAnimate: true,
        },
        () => {
          this.setState({
            offsetSize: offset,
          })
          setTimeout(() => {
            this.setState(
              {
                isAnimate: false,
              },
              () => {
                callback && callback()
              }
            )
          }, ANIMTE_DURATION)
        }
      )
    },
    handleTouchEnd() {
      if (!this.isSwiper) {
        return
      }

      const { offsetSize } = this.state

      this.isTouching = false
      const isRight = offsetSize > 0

      const breakpoint = this.maxWidth / 2
      const absOffsetSize = Math.abs(offsetSize)

      if (absOffsetSize > breakpoint) {
        const res = isRight ? this.maxWidth : -this.maxWidth
        return this.animateMoveSlide(res, () => {
          this.onSwipeMonth(isRight ? -1 : 1)
        })
      }
      this.animateMoveSlide(0)
    },
    handleChange(e) {
      const { current, source } = e.detail

      if (source === 'touch') {
        this.currentSwiperIndex = current
        this.changeCount += 1
      }
    },
    handleAnimateFinish() {
      if (this.changeCount > 0) {
        this.onSwipeMonth(this.isPreMonth ? -this.changeCount : this.changeCount)
        this.changeCount = 0
      }
    },
    handleSwipeTouchStart(e) {
      const { clientY, clientX } = e.changedTouches[0]
      this.swipeStartPoint = this.isVertical ? clientY : clientX
    },
    handleSwipeTouchEnd(e) {
      const { clientY, clientX } = e.changedTouches[0]
      this.isPreMonth = this.isVertical
        ? clientY - this.swipeStartPoint > 0
        : clientX - this.swipeStartPoint > 0
    },
  },
}

export default AtCalendarBody
