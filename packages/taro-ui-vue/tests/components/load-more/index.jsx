import classNames from 'classnames'
import AtButton from '../button/index'
import AtActivityIndicator from '../activity-indicator/index'

export default {
  name: 'AtLoadMore',
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
  methods: {},
  render() {
    const {
      className,
      customStyle,
      loadingText,
      moreText,
      status,
      moreBtnStyle,
      noMoreTextStyle,
      noMoreText,
    } = this

    let component
    if (status === 'loading') {
      component = <AtActivityIndicator mode="center" content={loadingText} />
    } else if (status === 'more') {
      component = (
        <view class="at-load-more__cnt">
          <AtButton 
            full 
            onTap={this.onClick.bind(this)} 
            onClick={this.onClick.bind(this)} 
            customStyle={moreBtnStyle}
          >
            {moreText}
          </AtButton>
        </view>
      )
    } else {
      component = (
        <view class="at-load-more__tip" style={noMoreTextStyle}>
          {noMoreText}
        </view>
      )
    }

    return (
      <view class={classNames('at-load-more', className)} style={customStyle}>
        {component}
      </view>
    )
  },
}
