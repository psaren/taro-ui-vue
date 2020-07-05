import classNames from 'classnames'
import mixins from '../mixins'
import AtButton from '../button/index'

const MIN_MAXPAGE = 1
/**
 *
 * @param {number} maxPage
 */
const getMaxPage = (maxPage = 0) => {
  if (maxPage <= 0) return MIN_MAXPAGE
  return maxPage
}
/**
 *
 * @param {number} maxPage
 */
const createPickerRange = (max) => {
  const range = new Array(max).fill(0).map((val, index) => index + 1)
  return range
}

export default {
  name: 'AtPagination',
  mixins: [mixins],
  props: {
    customStyle: {
      type: [Object, String],
      default: () => '',
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 20,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    onPageChange: {
      type: Function,
      default: () => () => {},
    },
  },
  data() {
    const { current, pageSize, total } = this
    const maxPage = getMaxPage(Math.ceil(total / pageSize))
    return {
      state: {
        currentPage: current || 1,
        maxPage,
        pickerRange: createPickerRange(maxPage),
      },
    }
  },
  methods: {
    onPrev() {
      let { currentPage } = this.state
      const originCur = currentPage
      currentPage -= 1
      currentPage = Math.max(1, currentPage)
      if (originCur === currentPage) return
      this.onPageChange && this.onPageChange({ type: 'prev', current: currentPage })
      this.setState({ currentPage })
    },
    onNext() {
      let { currentPage } = this.state
      const originCur = currentPage
      const { maxPage } = this.state
      currentPage += 1
      currentPage = Math.min(maxPage, currentPage)
      if (originCur === currentPage) return
      this.onPageChange && this.onPageChange({ type: 'next', current: currentPage })
      this.setState({ currentPage })
    },
  },
  render() {
    const { icon, customStyle } = this
    const { currentPage, maxPage } = this.state

    const rootClassName = ['at-pagination']

    const prevDisabled = maxPage === MIN_MAXPAGE || currentPage === 1
    const nextDisabled = maxPage === MIN_MAXPAGE || currentPage === maxPage

    const classObject = {
      'at-pagination--icon': icon,
    }

    return (
      <view class={classNames(rootClassName, classObject, this.className)} style={customStyle}>
        <view class="at-pagination__btn-prev">
          {icon && (
            <AtButton props={{ onClick: this.onPrev }} size="small" disabled={prevDisabled}>
              <view class="at-icon at-icon-chevron-left text"></view>
            </AtButton>
          )}
          {!icon && (
            <AtButton props={{ onClick: this.onPrev }} size="small" disabled={prevDisabled}>
              上一页
            </AtButton>
          )}
        </view>
        <view class="at-pagination__number">
          <view class="at-pagination__number-current text">{currentPage}</view>/{maxPage}
        </view>
        <view class="at-pagination__btn-next">
          {icon && (
            <AtButton props={{ onClick: this.onNext }} size="small" disabled={nextDisabled}>
              <view class="at-icon at-icon-chevron-right text"></view>
            </AtButton>
          )}
          {!icon && (
            <AtButton props={{ onClick: this.onNext }} size="small" disabled={nextDisabled}>
              下一页
            </AtButton>
          )}
        </view>
        {/* {pickerSelect && <view class='at-pagination__number'>
          {<Picker mode='selector' range={pickerRange} value={currentPage - 1} onChange={this.onPickerChange.bind(this)}>
            <view class='at-pagination__number-current'>{currentPage}</view>/{ maxPage }
          </Picker>}
        </view>} */}
        {/* {!pickerSelect && <view class='at-pagination__number'>
          <view class='at-pagination__number-current'>{currentPage}</view>/{ maxPage }
        </view>} */}
      </view>
    )
  },
}
