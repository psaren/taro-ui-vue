import classNames from 'classnames'

export default {
  name: 'Progress',
  props: {
    color: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: 'progress',
      validator: (val) => ['progress', 'error', 'success'].includes(val),
    },
    percent: {
      type: Number,
      default: 0,
    },
    strokeWidth: {
      type: Number,
      default: 0,
    },
    isHidePercent: {
      type: Boolean,
      default: false,
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
  },
  render() {
    const { color } = this
    let { percent } = this
    const { strokeWidth, status, isHidePercent } = this

    if (typeof percent !== 'number') {
      percent = 0
    }

    if (percent < 0) {
      percent = 0
    } else if (percent > 100) {
      percent = 100
    }

    const rootClass = classNames(
      'at-progress',
      {
        [`at-progress--${status}`]: !!status,
      },
      this.className
    )
    const iconClass = classNames('at-icon', {
      'at-icon-close-circle': status === 'error',
      'at-icon-check-circle': status === 'success',
    })

    const progressStyle = {
      width: percent && `${+percent}%`,
      height: strokeWidth && `${+strokeWidth}px`,
      backgroundColor: color,
    }

    return (
      <view class={rootClass}>
        <view class="at-progress__outer">
          <view class="at-progress__outer-inner">
            <view class="at-progress__outer-inner-background" style={progressStyle} />
          </view>
        </view>
        {!isHidePercent && (
          <view class="at-progress__content">
            {!status || status === 'progress' ? `${percent}%` : <view class={iconClass}></view>}
          </view>
        )}
      </view>
    )
  },
}
