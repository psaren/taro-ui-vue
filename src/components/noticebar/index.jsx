import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { getEnvs } from '../../utils/common'
import mixins from '../mixins'

export default {
  name: 'Noticebar',
  mixins: [mixins],
  props: {
    close: {
      type: Boolean,
      default: false,
    },
    single: {
      type: Boolean,
      default: false,
    },
    marquee: {
      type: Boolean,
      default: false,
    },
    speed: {
      type: Number,
      default: 100,
    },
    moreText: {
      type: String,
      default: '查看详情',
    },
    showMore: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    customStyle: {
      type: [Object, String],
      default: () => {},
    },
    onClose: {
      type: Function,
      default: () => () => {},
    },
    onGotoMore: {
      type: Function,
      default: () => () => {},
    },
  },
  data() {
    const animElemId = `J_${Math.ceil(Math.random() * 10e5).toString(36)}`
    return {
      timeout: null,
      interval: null,
      state: {
        ...getEnvs(),
        show: true,
        animElemId,
        animationData: [{}],
        dura: 15,
      },
    }
  },
  mounted() {
    if (!this.marquee) return
    this.initAnimation()
  },
  methods: {
    handleClose(event) {
      this.setState({
        show: false,
      })
      this.onClose && this.onClose(event)
    },
    handleGotoMore(event) {
      this.onGotoMore && this.onGotoMore(event)
    },
    initAnimation() {
      const { isWEAPP, isALIPAY } = this.state
      this.timeout = setTimeout(() => {
        this.timeout = null
        if (this.state.isWEB) {
          const elem = document.querySelector(`.${this.state.animElemId}`)
          if (!elem) return
          const width = elem.getBoundingClientRect().width
          const dura = width / +this.speed
          this.setState({ dura })
        } else if (isWEAPP || isALIPAY) {
          const query = isALIPAY
            ? Taro.createSelectorQuery()
            : Taro.createSelectorQuery().in(this.$scope)
          query
            .select(`.${this.state.animElemId}`)
            .boundingClientRect()
            .exec((res) => {
              const queryRes = res[0]
              if (!queryRes) return
              const { width } = queryRes
              const dura = width / +this.speed
              const animation = Taro.createAnimation({
                duration: dura * 1000,
                timingFunction: 'linear',
              })
              const resetAnimation = Taro.createAnimation({
                duration: 0,
                timingFunction: 'linear',
              })
              const resetOpacityAnimation = Taro.createAnimation({
                duration: 0,
                timingFunction: 'linear',
              })
              const animBody = () => {
                resetOpacityAnimation.opacity(0).step()
                this.setState({ animationData: resetOpacityAnimation.export() })

                setTimeout(() => {
                  resetAnimation.translateX(0).step()
                  this.setState({ animationData: resetAnimation.export() })
                }, 300)

                setTimeout(() => {
                  resetOpacityAnimation.opacity(1).step()
                  this.setState({ animationData: resetOpacityAnimation.export() })
                }, 600)

                setTimeout(() => {
                  animation.translateX(-width).step()
                  this.setState({ animationData: animation.export() })
                }, 900)
              }
              animBody()
              this.interval = setInterval(animBody, dura * 1000 + 1000)
            })
        }
      }, 100)
    },
  },
  render() {
    const { single, icon, marquee, customStyle, className } = this
    let { showMore, close } = this
    const { dura } = this.state
    const rootClassName = ['at-noticebar']
    let _moreText = this.moreText

    if (!single) showMore = false

    if (!_moreText) _moreText = '查看详情'

    const style = {}
    const innerClassName = ['at-noticebar__content-inner']
    if (marquee) {
      close = false
      style['animation-duration'] = `${dura}s`
      innerClassName.push(this.state.animElemId)
    }

    const classObject = {
      'at-noticebar--marquee': marquee,
      'at-noticebar--weapp': marquee && (this.state.isWEAPP || this.state.isALIPAY),
      'at-noticebar--single': !marquee && single,
    }

    const iconClass = ['at-icon']
    if (icon) iconClass.push(`at-icon-${icon}`)

    return (
      this.state.show && (
        <view class={classNames(rootClassName, classObject, className)} style={customStyle}>
          {close && (
            <view class="at-noticebar__close" onClick={this.handlClose}>
              <view class="at-icon at-icon-close"></view>
            </view>
          )}
          <view class="at-noticebar__content">
            {icon && (
              <view class="at-noticebar__content-icon">
                {/* start hack 百度小程序 */}
                <view class={classNames(iconClass, iconClass)}></view>
              </view>
            )}
            <view class="at-noticebar__content-text">
              <view
                // @ts-ignore
                animation={this.state.animationData}
                class={classNames(innerClassName)}
                style={style}>
                {this.$slots.default}
              </view>
            </view>
          </view>
          {showMore && (
            <view class="at-noticebar__more" onClick={this.handleGotoMore}>
              <view class="text">{_moreText}</view>
              <view class="at-noticebar__more-icon">
                <view class="at-icon at-icon-chevron-right"></view>
              </view>
            </view>
          )}
        </view>
      )
    )
  },
}
