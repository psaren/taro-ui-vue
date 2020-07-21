import classNames from 'classnames'
import AtButton from '../button/index.vue'
import AtActivityIndicator from '../activity-indicator/index.vue'

export default {
  name: 'AtLoadMore',
  components: {
    AtButton,
    AtActivityIndicator,
  },
  props: {
    customStyle: {
      type: [Object, String],
      default: () => {},
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
    noMoreTextStyle: {
      type: [Object, String],
      default: () => {},
    },
    moreBtnStyle: {
      type: [Object, String],
      default: () => {},
    },
    status: {
      type: String,
      default: 'more',
      validator: (val) => ['more', 'loading', 'noMore'].includes(val),
    },
    loadingText: {
      type: String,
      default: '加载中',
    },
    moreText: {
      type: String,
      default: '查看更多',
    },
    noMoreText: {
      type: String,
      default: '没有更多',
    },
    onClick: {
      type: Function,
      default: () => () => {},
    },
  },
  methods: {
    classNames,
  },
}
