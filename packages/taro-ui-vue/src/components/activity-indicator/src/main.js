import classNames from 'classnames'
import AtLoading from '../../loading/index.vue'

export default {
  name: 'AtActivityIndicator',
  components: { AtLoading },
  props: {
    size: {
      type: Number,
      default: 0,
    },
    mode: {
      type: String,
      default: 'normal',
    },
    color: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
    isOpened: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    rootClass() {
      const { mode, isOpened, className } = this
      return classNames(
        'at-activity-indicator',
        {
          'at-activity-indicator--center': mode === 'center',
          'at-activity-indicator--isopened': isOpened,
        },
        className
      )
    },
  },
}
