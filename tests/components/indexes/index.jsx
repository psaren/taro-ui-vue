import classNames from 'classnames'
import Taro from '@tarojs/taro'
import mixins from '../mixins'
import { delayQuerySelector, isTest, uuid, pxTransform } from '../../utils/common'
import AtList from '../list/index'
import AtListItem from '../list/item/index'
import AtToast from '../toast/index'

const ENV = Taro.getEnv()

export default {
  name: 'AtIndexes',
  mixins: [mixins],
  props: {
    customStyle: {
      type: [Object, String],
      default: '',
    },
    className: {
      type: [Array, String],
      default: '',
    },
    animation: {
      type: Boolean,
      default: false,
    },
    isVibrate: {
      type: Boolean,
      default: true,
    },
    isShowToast: {
      type: Boolean,
      default: true,
    },
    list: {
      type: Array,
      default: () => [],
    },
    topKey: {
      type: String,
      default: 'Top',
    },
    onClick: {
      type: Function,
      default: () => () => {},
    },
    onScrollIntoView: {
      type: Function,
      default: () => () => {},
    },
  },
  data() {
    return {
      // 右侧导航高度
      menuHeight: 0,
      // 右侧导航距离顶部高度
      startTop: 0,
      // 右侧导航元素高度
      itemHeight: 0,
      // scroll-view 列表项目的高度数组
      scrollItemHeights: [],
      // 当前索引
      currentIndex: -1,
      listId: isTest() ? 'indexes-list-AOTU2018' : `list-${uuid()}`,
      timeoutTimerL: null,
      state: {
        _scrollIntoView: '',
        _scrollTop: 0,
        _tipText: '',
        _isShowToast: false,
        isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
      },
    }
  },
  computed: {
    listLen() {
      return this.list.length
    },
  },

  watch: {
    listLen() {
      this.initData()
    },
  },
  beforeMount() {
    this.onScrollIntoView && this.onScrollIntoView(this.__jumpTarget.bind(this))
  },
  mounted() {
    if (ENV === Taro.ENV_TYPE.WEB) {
      this.listRef = document.getElementById(this.listId)
    }
    this.initData()
  },
  methods: {
    handleClick(item) {
      this.onClick && this.onClick(item)
    },
    handleTouchMove(event) {
      event.stopPropagation()
      event.preventDefault()

      const { list } = this
      const pageY = event.touches[0].pageY
      const index = Math.floor((pageY - this.startTop) / this.itemHeight)

      if (index >= 0 && index <= list.length && this.currentIndex !== index) {
        this.currentIndex = index
        const key = index > 0 ? list[index - 1].key : 'top'
        const touchView = `at-indexes__list-${key}`
        this.jumpTarget(touchView, index)
      }
    },
    handleTouchEnd() {
      this.currentIndex = -1
    },
    /**
     *
     * @param {string} _scrollIntoView
     * @param {number} idx
     */
    jumpTarget(_scrollIntoView, idx) {
      const { topKey, list } = this
      const _tipText = idx === 0 ? topKey : list[idx - 1].key

      if (ENV === Taro.ENV_TYPE.WEB) {
        delayQuerySelector(this, '.at-indexes', 0).then((rect) => {
          const targetOffsetTop = this.listRef.childNodes[idx].offsetTop
          const _scrollTop = targetOffsetTop - rect[0].top
          this.updateState({
            _scrollTop,
            _scrollIntoView,
            _tipText,
          })
        })
        return
      }

      this.updateState({
        _scrollTop: this.scrollItemHeights[idx],
        _scrollIntoView,
        _tipText,
      })
    },
    /**
     *
     * @param {string} key
     */
    __jumpTarget(key) {
      const { list } = this
      // const index = _findIndex(list, ['key', key])
      const index = list.findIndex((item) => item.key === key)
      const targetView = `at-indexes__list-${key}`
      this.jumpTarget(targetView, index + 1)
    },
    updateState(state) {
      const { isShowToast, isVibrate } = this
      const { _scrollIntoView, _tipText, _scrollTop } = state
      // TODO: Fix dirty hack
      this.setState(
        {
          _scrollIntoView: _scrollIntoView,
          _tipText: _tipText,
          _scrollTop: _scrollTop,
          _isShowToast: isShowToast,
        },
        () => {
          clearTimeout(this.timeoutTimer)
          this.timeoutTimer = setTimeout(() => {
            this.setState({
              _tipText: '',
              _isShowToast: false,
            })
          }, 3000)
        }
      )

      if (isVibrate) {
        Taro.vibrateShort()
      }
    },
    async getItemHeight () {
      await delayQuerySelector(this, '.at-indexes__menu').then((rect) => {
        const arr = [...rect, { top: 0, height: 0 }]
        const len = this.list.length
        this.menuHeight = rect[0].height
        this.startTop = rect[0].top
        this.itemHeight = Math.floor(this.menuHeight / (len + 1))
      })

      if (this.list.length > 0) {
        await this._getScrollListItemHeights(this.list).then(res => {
          this.scrollItemHeights = [...res]
        })
      }
    },
<<<<<<< HEAD:tests/components/indexes/index.jsx
=======
    initData() {
      if (this.isWeb) {
        this.getItemHeight()
      } else {
        setTimeout(() => {
          this.getItemHeight()
        }, 100)
      }
    },
    _getHeight(selector: string, delay?: number) {
      return new Promise<number>(resolve => {
        delayQuerySelector(this, selector, delay).then(rect => {
          // @ts-ignore
          if(rect && rect[0]) {
            // @ts-ignore
            resolve(rect[0].height)
          }
        })
      })
    },
    /**
     *
     * @param {Array<ListItem>} list
     */
    _getScrollListItemHeights(list) {
      return new Promise<number[]>(resolve => {
        if (list.length > 0) {
          let rawHeights: Promise<number>[] = []
          let itemHeights: number[] = []

          // 获取 #at-indexes__top 的高度              
          rawHeights.push(this._getHeight(`#at-indexes__top`))

          // 获取 #at-indexes——list-${key} 的高度
          list.forEach((item) => {
            rawHeights.push(this._getHeight(`#at-indexes__list-${item.key}`))
          })

          Promise.all(rawHeights).then(res => {
            let height = 0
            itemHeights.push(height)

            for (let i = 0; i < res.length; i++) {
              height += res[i]
              itemHeights.push(height)
            }

            resolve(itemHeights)
          })
        }
      })
    },
>>>>>>> 98ecf55... fix(AtIndexes): 修复 #49 onClick 以及 onScrollIntoView 事件不生效:packages/taro-ui-vue/src/components/indexes/index.ts
    handleScroll(e) {
      if (e && e.detail) {
        this.setState({
          // _scrollTop: e.detail.scrollTop,
          _scrollIntoView: ''
        })
      }
    },
  },
  render() {
    const { className, customStyle, animation, topKey, list } = this
    const { _scrollTop, _scrollIntoView, _tipText, _isShowToast, isWEB } = this.state

    const toastStyle = { minWidth: pxTransform(100) }
    const rootCls = classNames('at-indexes', className)

    const menuList = list.map((dataList, i) => {
      const { key } = dataList
      const targetView = `at-indexes__list-${key}`
      return (
        <view
          class="at-indexes__menu-item"
          key={key}
          onTap={this.jumpTarget.bind(this, targetView, i + 1)}>
          {key}
        </view>
      )
    })

    const indexesList = list.map((dataList) => (
      <view id={`at-indexes__list-${dataList.key}`} class="at-indexes__list" key={dataList.key}>
        <view class="at-indexes__list-title">{dataList.title}</view>
        <AtList>
          {dataList.items &&
            dataList.items.map((item) => (
              <AtListItem
                key={item.name}
                title={item.name}
                onTap={this.handleClick.bind(this, item)}
              />
            ))}
        </AtList>
      </view>
    ))

    return (
      <view class={rootCls} style={customStyle}>
        <AtToast customStyle={toastStyle} isOpened={_isShowToast} text={_tipText} duration={2000} />
        <view
          class="at-indexes__menu"
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}>
          <view
            class="at-indexes__menu-item"
            onTap={this.jumpTarget.bind(this, 'at-indexes__top', 0)}>
            {topKey}
          </view>
          {menuList}
        </view>
        <scroll-view
          class="at-indexes__body"
          id={this.listId}
          scrollY
          scrollWithAnimation={animation}
          scrollTop={isWEB ? _scrollTop : undefined}
          scrollIntoView={!isWEB ? _scrollIntoView : ''}
          onScroll={this.handleScroll.bind(this)}>
          <view class="at-indexes__content" id="at-indexes__top">
            {this.$slots.default}
          </view>
          {indexesList}
        </scroll-view>
      </view>
    )
  },
}
