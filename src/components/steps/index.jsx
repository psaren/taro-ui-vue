import classNames from 'classnames'

export default {
  name: 'Steps',
  props: {
    customStyle: {
      type: [Object, String],
      default: () => '',
    },
    className: {
      type: [Object, String],
      default: () => '',
    },
    current: {
      type: Number,
      default: 0,
    },
    items: {
      type: Array,
      default: () => [],
      validator: (ary) => ary.every((item) => Array.isArray(item) || typeof item === 'string'),
    },
    onChange: {
      type: Function,
      default: () => () => {},
    },
  },
  methods: {
    handleClick(event) {
      this.onClick && this.onClick(event)
    },
  },
  render() {
    const { customStyle, className, items, current } = this

    return (
      <view class={classNames('at-steps', className)} style={customStyle}>
        {!!items &&
          items.map((item, i) => (
            <view
              key={item.title}
              class={classNames({
                'at-steps__item': true,
                'at-steps__item--active': i === current,
                'at-steps__item--inactive': i !== current,
              })}
              onClick={this.handleClick.bind(this, i)}>
              <view class="at-steps__circular-wrap">
                {i !== 0 && <view class="at-steps__left-line"></view>}
                {item.status ? (
                  <view
                    class={classNames({
                      'at-icon': true,
                      'at-icon-check-circle': item.status === 'success',
                      'at-icon-close-circle': item.status === 'error',
                      'at-steps__single-icon': true,
                      'at-steps__single-icon--success': item.status === 'success',
                      'at-steps__single-icon--error': item.status === 'error',
                    })}></view>
                ) : (
                  <view class="at-steps__circular">
                    {item.icon ? (
                      <view
                        class={classNames('at-icon', {
                          [`at-icon-${item.icon.value}`]: item.icon.value,
                          'at-steps__circle-icon': true,
                        })}></view>
                    ) : (
                      <view class="at-steps__num">{i + 1}</view>
                    )}
                  </view>
                )}
                {i !== items.length - 1 && <view class="at-steps__right-line"></view>}
              </view>
              <view class="at-steps__title">{item.title}</view>
              <view class="at-steps__desc">{item.desc}</view>
            </view>
          ))}
      </view>
    )
  },
}
