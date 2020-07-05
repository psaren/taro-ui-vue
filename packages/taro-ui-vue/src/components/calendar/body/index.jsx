import Vue from 'vue'
import classnames from 'classnames'
import dayjs from 'dayjs'
import { delayQuerySelector } from '../../../utils/common'
import generateCalendarGroup from '../common/helper'
import AtCalendarDateList from '../ui/date-list/index'
import AtCalendarDayList from '../ui/day-list/index'
import mixins from '../../mixins'

const ANIMTE_DURATION = 300

const AtCalendarBody = Vue.extend({
  name: 'AtCalendarBody',
  components: {
    AtCalendarDateList,
    AtCalendarDayList,
  },
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
    onDayClick: {
      type: Function,
      default: () => () => {},
    },
    onLongClick: {
      type: Function,
      default: () => () => {},
    },
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
      this.maxWidth = res[0].width
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
          this.atSwipeMonth(isRight ? -1 : 1)
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
        this.atSwipeMonth(this.isPreMonth ? -this.changeCount : this.changeCount)
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
  render() {
    const { isSwiper } = this
    const { listGroup } = this.state

    if (!isSwiper) {
      return (
        <view
          class={classnames(
            'main',
            'at-calendar-slider__main',
            `at-calendar-slider__main--${process.env.TARO_ENV}`
          )}>
          <AtCalendarDayList />
          <view class="main__body body">
            <view class="body__slider body__slider--now">
              <AtCalendarDateList
                list={listGroup[1].list}
                props={{
                  onClick: this.onDayClick,
                  onLongClick: this.onLongClick,
                }}
              />
            </view>
          </view>
        </view>
      )
    }

    return (
      <view
        class={classnames(
          'main',
          'at-calendar-slider__main',
          `at-calendar-slider__main--${process.env.TARO_ENV}`
        )}>
        <AtCalendarDayList />
        <Swiper
          circular
          current={1}
          skipHiddenItemLayout
          class={classnames('main__body')}
          vertical={this.isVertical}
          props={{
            onChange: this.handleChange,
            onAnimationFinish: this.handleAnimateFinish,
            onTouchEnd: this.handleSwipeTouchEnd,
            onTouchStart: this.handleSwipeTouchStart,
          }}>
          {listGroup.map((item, key) => (
            <SwiperItem key={item.value} itemId={key.toString()}>
              <AtCalendarDateList
                list={item.list}
                props={{
                  onClick: this.onDayClick.bind(this),
                  onLongClick: this.onLongClick,
                }}
              />
            </SwiperItem>
          ))}
        </Swiper>
      </view>
    )
  },
})

export default AtCalendarBody
