import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { getEnvs } from '../../utils/common'
import mixins from '../mixins'

export default {
  name: 'AtNoticebar',
  mixins: [mixins],
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
    className: {
      type: String,
      default: '',
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
  mounted() {
    if (!this.marquee) return
    this.initAnimation()
  },
  // TODO fix notable
  computed: {
    classObject() {
      return {
        'at-noticebar--marquee': this.marquee,
        'at-noticebar--weapp': this.marquee && (this.state.isWEAPP || this.state.isALIPAY),
        'at-noticebar--single': !this.marquee && this.single,
      }
    },
    iconClass() {
      const iconClass = ['at-icon']
      if (this.icon) iconClass.push(`at-icon-${this.icon}`)
      return iconClass
    },
    innerClassName() {
      const innerClassName = ['at-noticebar__content-inner']
      if (this.marquee) {
        innerClassName.push(this.state.animElemId)
      }
      return innerClassName
    },
    style() {
      const style = {}
      if (this.marquee) {
        style['animation-duration'] = `${this.state.dura}s`
      }
      return style
    },
  },
  methods: {
    classNames,
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
          this.state.dura = dura
        } else if (isWEAPP || isALIPAY) {
          const query = Taro.createSelectorQuery()
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
                this.state.animationData = resetOpacityAnimation.export()
                setTimeout(() => {
                  resetAnimation.translateX(0).step()
                  this.state.animationData = resetAnimation.export()
                }, 300)

                setTimeout(() => {
                  resetOpacityAnimation.opacity(1).step()
                  this.state.animationData = resetOpacityAnimation.export()
                }, 600)

                setTimeout(() => {
                  animation.translateX(-width).step()
                  this.state.animationData = animation.export()
                }, 900)
              }
              animBody()
              this.interval = setInterval(animBody, dura * 1000 + 1000)
            })
        }
      }, 100)
    },
  },
}
