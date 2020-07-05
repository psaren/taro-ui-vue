import classNames from 'classnames'
import Vue from 'vue'
import Component from 'vue-class-component'
import mixins from '../mixins'
import AtList from '../list/index'
import AtListItem from '../list/item/index'

const setState = mixins.methods.setState

const AtDrawerProps = Vue.extend({
  name: 'AtDrawer',
  mixins: [mixins],
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: true,
    },
    right: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: '',
    },
    items: {
      type: Array,
      default: function () {
        return []
      },
    },
    className: {
      type: [Object, String],
      default: function () {
        return {}
      },
    },
    onClose: {
      type: Function,
      default: function () {
        return () => {}
      },
    },
    onItemClick: {
      type: Function,
      default: function () {
        return () => {}
      },
    },
  },
})

@Component
export default class AtDrawer extends AtDrawerProps {
  state
  constructor() {
    super()
    this.state = {
      animShow: false,
      _show: this.show,
    }
  }

  setState = setState

  mount(): void {
    const { _show } = this.state
    if (_show) this.animShow()
  }

  handleItemClick(index: number): void {
    this.onItemClick && this.onItemClick(index)
    this.animHide()
  }

  onHide(): void {
    this.setState({ _show: false }, () => {
      this.onClose && this.onClose()
    })
  }

  animHide(): void {
    this.setState({
      animShow: false,
    })
    setTimeout(() => {
      this.onHide()
    }, 300)
  }

  animShow(): void {
    this.setState({ _show: true })
    setTimeout(() => {
      this.setState({
        animShow: true,
      })
    }, 200)
  }

  onMaskClick(): void {
    this.animHide()
  }

  render(h) {
    const { mask, width, right, items } = this
    const { animShow, _show } = this.state
    const rootClassName = ['at-drawer']

    const maskStyle = {
      display: mask ? 'block' : 'none',
      opacity: animShow ? 1 : 0,
    }
    const listStyle = {
      width,
      transition: animShow
        ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)'
        : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)',
    }

    const classObject = {
      'at-drawer--show': animShow,
      'at-drawer--right': right,
      'at-drawer--left': !right,
    }

    return _show ? (
      <view class={classNames(rootClassName, classObject, this.className)}>
        <view 
          class="at-drawer__mask" 
          style={maskStyle} 
          onTap={this.onMaskClick.bind(this)}
          onClick={this.onMaskClick.bind(this)}
        ></view>

        <view class="at-drawer__content" style={listStyle}>
          {!!items && items.length ? (
            <AtList>
              {items.map((name, index) => (
                <AtListItem
                  key={`${name}-${index}`}
                  data-index={index}
                  props={{ onClick: this.handleItemClick.bind(this, index) }}
                  title={name}
                  arrow="right"></AtListItem>
              ))}
            </AtList>
          ) : (
            this.$slots.default
          )}
        </view>
      </view>
    ) : (
      <view></view>
    )
  }
}
