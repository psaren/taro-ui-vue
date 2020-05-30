import { mount } from '@vue/test-utils'
import AtCurtain from '../../src/components/curtain'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtCurtain, {
    components: {},
    slots,
    propsData: { ...values },
  })
}

describe('AtCurtain Snap', () => {
  it('render initial AtCurtain', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCurtain -- prop className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCurtain -- prop customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCurtain -- prop isOpened', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCurtain -- prop isOpened', () => {
    const wrapper0 = factory({ isOpened: true })
    expect(wrapper0.element).toMatchSnapshot()
    const wrapper1 = factory({ isOpened: false })
    expect(wrapper1.element).toMatchSnapshot()
  })

  it('render AtCurtain -- prop closeBtnPosition', () => {
    const wrapper0 = factory({ closeBtnPosition: 'top' }, { default: ['test'] })
    expect(wrapper0.element).toMatchSnapshot()
    const wrapper1 = factory({ closeBtnPosition: 'bottom' }, { default: ['test'] })
    expect(wrapper1.element).toMatchSnapshot()
  })
})
