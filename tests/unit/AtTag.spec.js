import { shallowMount } from '@vue/test-utils'
import AtTag from '../demo/AtTag.vue'

describe('AtTag.vue', () => {
  it('snapshot test', () => {
    const wrapper = shallowMount(AtTag)
    expect(wrapper.element).toMatchSnapshot()
  })
})
