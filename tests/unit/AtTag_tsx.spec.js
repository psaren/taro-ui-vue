import { shallowMount } from '@vue/test-utils'
import AtTag from '../../src/components/tag/index.tsx'

describe('AtTag.tsx', () => {
  it('snapshot test', () => {
    const wrapper = shallowMount(AtTag)
    expect(wrapper.element).toMatchSnapshot()
  })
})
