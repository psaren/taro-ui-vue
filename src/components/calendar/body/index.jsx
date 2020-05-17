import Vue from 'vue'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { Swiper, SwiperItem, View } from '@tarojs/components'
import { delayQuerySelector } from '../../../utils/common'
import generateCalendarGroup from '../common/helper'
import AtCalendarDateList from '../ui/date-list/index'
import AtCalendarDayList from '../ui/day-list/index'

const ANIMTE_DURATION = 300

const AtCalendarBody = Vue.extend({
  name: 'AtCalendarBody',
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
      type: Object,
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
  },
  data() {
    return {
      options: { addGlobalClass: true },
      state: {
        listGroup: [],
        offsetSize: 0,
        isAnimate: false,
      },
    }
  },
  created() {
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

    this.generateFunc = generateCalendarGroup({
      validDates,
      format,
      minDate,
      maxDate,
      marks,
      selectedDates,
    })
    this.listGroup = this.getGroups(generateDate, selectedDate)
  },
  mounted() {
    delayQuerySelector(this, '.at-calendar-slider__main').then((res) => {
      this.maxWidth = res[0].width
    })
  },
  methods: {
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
  render() {
    const { isSwiper } = this
    const { isAnimate, offsetSize, listGroup } = this.state

    if (!isSwiper) {
      return (
        <View
          className={classNames(
            'main',
            'at-calendar-slider__main',
            `at-calendar-slider__main--${process.env.TARO_ENV}`
          )}>
          <AtCalendarDayList />
          <View className="main__body body">
            <View className="body__slider body__slider--now">
              <AtCalendarDateList
                list={listGroup[1].list}
                onClick={this.onDayClick}
                onLongClick={this.onLongClick}
              />
            </View>
          </View>
        </View>
      )
    }

    /* 需要 Taro 组件库维护 Swiper 使 小程序 和 H5 的表现保持一致  */
    if (process.env.TARO_ENV === 'h5') {
      return (
        <View
          className={classNames(
            'main',
            'at-calendar-slider__main',
            `at-calendar-slider__main--${process.env.TARO_ENV}`
          )}
          onTouchEnd={this.handleTouchEnd}
          onTouchMove={this.handleTouchMove}
          onTouchStart={this.handleTouchStart}>
          <AtCalendarDayList />
          <View
            className={classNames('main__body  body', {
              'main__body--slider': isSwiper,
              'main__body--animate': isAnimate,
            })}
            style={{
              transform: isSwiper ? `translateX(-100%) translate3d(${offsetSize},0,0)` : '',
              WebkitTransform: isSwiper ? `translateX(-100%) translate3d(${offsetSize}px,0,0)` : '',
            }}>
            <View className="body__slider body__slider--pre">
              <AtCalendarDateList list={listGroup[0].list} />
            </View>
            <View className="body__slider body__slider--now">
              <AtCalendarDateList
                list={listGroup[1].list}
                onClick={this.onDayClick}
                onLongClick={this.onLongClick}
              />
            </View>
            <View className="body__slider body__slider--next">
              <AtCalendarDateList list={listGroup[2].list} />
            </View>
          </View>
        </View>
      )
    }

    return (
      <View
        className={classNames(
          'main',
          'at-calendar-slider__main',
          `at-calendar-slider__main--${process.env.TARO_ENV}`
        )}>
        <AtCalendarDayList />
        <Swiper
          circular
          current={1}
          skipHiddenItemLayout
          className={classNames('main__body')}
          onChange={this.handleChange}
          vertical={this.isVertical}
          onAnimationFinish={this.handleAnimateFinish}
          onTouchEnd={this.handleSwipeTouchEnd}
          onTouchStart={this.handleSwipeTouchStart}>
          {listGroup.map((item, key) => (
            <SwiperItem key={item.value} itemId={key.toString()}>
              <AtCalendarDateList
                list={item.list}
                onClick={this.onDayClick}
                onLongClick={this.onLongClick}
              />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    )
  },
})

export default AtCalendarBody
