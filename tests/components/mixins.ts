interface StateInterFace {
  [id: string]: any;
}

export default {
  methods: {
    setState(newState: StateInterFace, fn: Function) {
      const ks = Object.keys(newState)
      if (Array.isArray(ks)) {
        ks.forEach((k) => {
          if (k in this.state) {
            this.state[k] = newState[k]
          }
        })
      }
      this.$nextTick(() => {
        typeof fn === 'function' && fn.call(this)
      })
    },
  },
}
