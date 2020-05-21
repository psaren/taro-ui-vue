import { shallowMount } from '@vue/test-utils'
import AtTag from '../demo/AtTag.jsx'

describe('AtTag.jsx', () => {
  it('snapshot test', () => {
    const wrapper = shallowMount(AtTag)
    expect(wrapper.element).toMatchSnapshot()
  })
})
