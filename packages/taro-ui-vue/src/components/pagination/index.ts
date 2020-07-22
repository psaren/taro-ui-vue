import classNames from 'classnames'
import mixins from '../mixins'

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
  const range = new Array(max).fill(0).map((_, index) => index + 1)
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
  computed: {
    rootCls() {
      const rootClassName = ['at-pagination']
      const classObject = {
        'at-pagination--icon': this.icon,
      }
      return classNames(rootClassName, classObject, this.className)
    },
    prevDisabled() {
      const { maxPage, currentPage } = this.state
      return maxPage === MIN_MAXPAGE || currentPage === 1
    },
    nextDisabled() {
      const { maxPage, currentPage } = this.state
      return maxPage === MIN_MAXPAGE || currentPage === maxPage
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
  watch: {
    total() {
      const { pageSize, total } = this
      this.state.maxPage = getMaxPage(Math.ceil(total / pageSize))
    },
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
}
