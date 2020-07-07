import merge from 'lodash/merge'
export default {
  methods: {
    setState(state) {
      merge(this.state, state)
    }
  }
}