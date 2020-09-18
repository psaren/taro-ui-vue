import assign from 'lodash/assign'
export default {
  methods: {
    setState(state) {
      assign(this.state, state)
    }
  }
}