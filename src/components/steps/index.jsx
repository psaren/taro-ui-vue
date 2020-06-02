import { View } from '@tarojs/components'
import classNames from 'classnames'

export default {
  name: 'AtSteps',
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
      <View class={classNames('at-steps', className)} style={customStyle}>
        {!!items &&
          items.map((item, i) => (
            <View
              key={item.title}
              class={classNames({
                'at-steps__item': true,
                'at-steps__item--active': i === current,
                'at-steps__item--inactive': i !== current,
              })}
              onClick={this.handleClick.bind(this, i)}>
              <View class="at-steps__circular-wrap">
                {i !== 0 && <View class="at-steps__left-line"></View>}
                {item.status ? (
                  <View
                    class={classNames({
                      'at-icon': true,
                      'at-icon-check-circle': item.status === 'success',
                      'at-icon-close-circle': item.status === 'error',
                      'at-steps__single-icon': true,
                      'at-steps__single-icon--success': item.status === 'success',
                      'at-steps__single-icon--error': item.status === 'error',
                    })}></View>
                ) : (
                  <View class="at-steps__circular">
                    {item.icon ? (
                      <View
                        class={classNames('at-icon', {
                          [`at-icon-${item.icon.value}`]: item.icon.value,
                          'at-steps__circle-icon': true,
                        })}></View>
                    ) : (
                      <View class="at-steps__num">{i + 1}</View>
                    )}
                  </View>
                )}
                {i !== items.length - 1 && <View class="at-steps__right-line"></View>}
              </View>
              <View class="at-steps__title">{item.title}</View>
              <View class="at-steps__desc">{item.desc}</View>
            </View>
          ))}
      </View>
    )
  },
}
