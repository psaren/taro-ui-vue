import classNames from 'classnames'
import Vue from 'vue'
import mixins from '../mixins'
import AtList from '../list/index'
import AtListItem from '../list/item/index'

const setState = mixins.methods.setState

const AtDrawer = Vue.extend({
  name: 'AtDrawer',
  components: {
    AtList, 
    AtListItem
  },
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
  mounted(): void {
    const { _show } = this.state
    if (_show) this.animShow()
  },
  computed: {
    maskStyle() {
      const { animShow, mask } = this
      return {
        display: mask ? 'block' : 'none',
        opacity: animShow ? 1 : 0,
      }
    },
    classObject() {
      const { animShow, right } = this
      return {
        'at-drawer--show': animShow,
        'at-drawer--right': right,
        'at-drawer--left': !right,
      }
    },
    listStyle() {
      const { animShow, width } = this
      return {
        width,
        transition: animShow
          ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)'
          : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)',
      }
    }
  },
  methods: {
    setState,
    handleItemClick(index: number): void {
      this.onItemClick && this.onItemClick(index)
      this.animHide()
    },
  
    onHide(): void {
      this.setState({ _show: false }, () => {
        this.onClose && this.onClose()
      })
    },
  
    animHide(): void {
      this.setState({
        animShow: false,
      })
      setTimeout(() => {
        this.onHide()
      }, 300)
    },
  
    animShow(): void {
      this.setState({ _show: true })
      setTimeout(() => {
        this.setState({
          animShow: true,
        })
      }, 200)
    },
  
    onMaskClick(): void {
      this.animHide()
    },
  
    getCls() {
      const rootClassName = ['at-drawer']
      return classNames(rootClassName, this.classObject, this.className)
    }
  }
})

export default AtDrawer
