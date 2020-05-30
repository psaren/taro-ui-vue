import { mount, createLocalVue } from '@vue/test-utils'
import AtBadge from '../../src/components/avatar'
import AtButton from '../../src/components/button'
import AtLoading from '../../src/components/loading'

const localVue = createLocalVue()
localVue.component('AtButton', AtButton)
const factory = (values = {}, slots = { default: ['<AtButton loading>按钮文字</AtButton>'] }) => {
  return mount(AtBadge, {
    components: {
      AtButton,
      AtLoading,
    },
    slots,
    propsData: { ...values },
  })
}

describe('AtBadge Snap', () => {
  it('render AtBadge -- props value', () => {
    const wrapper = factory({ value: '3' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtBadge -- props dot', () => {
    const wrapper = factory({ dot: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtBadge -- props maxValue', () => {
    const wrapper = factory({ value: '10', maxValue: 9 })
    expect(wrapper.element).toMatchSnapshot()
  })
})
