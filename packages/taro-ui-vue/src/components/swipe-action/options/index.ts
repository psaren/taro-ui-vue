import classNames from 'classnames'
import { delayQuerySelector } from '../../../utils/common'

export default {
  name: 'AtSwipeActionOptions',
  props: {
    componentId: {
      type: String,
      default: '',
    },
    onQueryedDom: {
      type: Function,
      default: () => () => {},
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    setTimeout(() => {
      this.triggerOptionsDomUpadte()
    }, 16)
  },
  watch: {
    options() {
      this.triggerOptionsDomUpadte()
    },
  },
  computed: {
    rootClass() {
      return classNames('at-swipe-action__options', this.className)
    },
  },
  methods: {
    triggerOptionsDomUpadte() {
      delayQuerySelector(this, `#swipeActionOptions-${this.componentId}`).then(
        (res) => {
          const arr = [...res]
          this.onQueryedDom(arr[0])
        }
      )
    },
  },
}
