import classNames from 'classnames'
import _chunk from 'lodash/chunk'
import { mergeStyle } from '../../utils/common'

export default {
  name: 'AtGrid',
  props: {
    mode: {
      type: String,
      default: 'square',
      validator: (val) => ['rect', 'square'].includes(val),
    },
    hasBorder: {
      type: Boolean,
      default: true,
    },
    onClick: {
      type: Function,
      default: () => () => {},
    },
    columnNum: {
      type: Number,
      default: 3,
    },
    data: {
      type: Array,
      default: () => [],
    },
    className: {
      type: [Object, String],
      default: '',
    },
  },
  computed: {
    rootClass() {
      return classNames('at-grid', this.className)
    },
    bodyClass() {
      const { mode, hasBorder } = this
      return classNames(['at-grid__flex-item', 'at-grid-item', `at-grid-item--${mode}`], {
        'at-grid-item--no-border': !hasBorder,
      })
    },
    gridGroup() {
      const { data, columnNum } = this
      return _chunk(data, columnNum)
    },
  },
  methods: {
    /**
     *
     * @param {AtGridItem} item
     * @param {number} index
     * @param {number} row
     * @param {event} event
     */
    handleClick(item, index, row, event) {
      const { onClick, columnNum } = this
      if (typeof onClick === 'function') {
        const clickIndex = row * columnNum + index
        onClick(item, clickIndex, event)
      }
    },
    classNames,
    mergeStyle,
  },
}
