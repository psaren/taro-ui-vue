import classNames from 'classnames'

const AtCheckbox = {
  name: 'AtCheckbox',
  props: {
    customStyle: {
      type: [Object, String],
      default: function () {
        return {}
      },
    },
    className: {
      type: [Object, String],
      default: function () {
        return {}
      },
    },
    options: {
      type: Array,
      default: function () {
        return []
      },
    },
    selectedList: {
      type: Array,
      default: function () {
        return []
      },
    },
    onChange: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
  },
  computed: {
    rootCls() {
      return classNames('at-checkbox', this.className)
    },
  },
  methods: {
    handleClick(idx: number): void {
      const { selectedList, options } = this
      const option = options[idx]
      const { disabled, value } = option
      if (disabled) return

      const selectedSet = new Set(selectedList)
      if (!selectedSet.has(value)) {
        selectedSet.add(value)
      } else {
        selectedSet.delete(value)
      }
      this.onChange([...selectedSet])
    },
    getOptionCls(option) {
      const { disabled, value } = option
      return classNames('at-checkbox__option', {
        'at-checkbox__option--disabled': disabled,
        'at-checkbox__option--selected': this.selectedList.includes(value),
      })
    },
  },
}

export default AtCheckbox
