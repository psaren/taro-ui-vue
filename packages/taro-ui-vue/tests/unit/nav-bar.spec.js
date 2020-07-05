import { mount } from '@vue/test-utils'
import AtNavBar from '../components/nav-bar'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtNavBar, {
    components: {},
    slots,
    propsData: { ...values },
  })
}

describe('AtNavBar Snap', () => {
  it('render initial AtNavBar', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNavBar -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNavBar -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNavBar -- props fixed', () => {
    const wrapper = factory({ fixed: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNavBar -- props color', () => {
    const wrapper = factory({ color: '#fff' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNavBar -- props leftIconType', () => {
    const wrapper = factory({ leftIconType: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNavBar -- props leftIconType', () => {
    const wrapper = factory({ leftIconType: { value: 'test', color: 'red', size: 36 } })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNavBar -- props leftText', () => {
    const wrapper = factory({ leftText: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNavBar -- props title', () => {
    const wrapper = mount({
      render() {
        return (
          <AtNavBar>
            <text>test</text>
          </AtNavBar>
        )
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNavBar -- props rightFirstIconType', () => {
    const wrapper = factory({ rightFirstIconType: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNavBar -- props rightFirstIconType', () => {
    const wrapper = factory({ rightFirstIconType: 'test', color: 'red', size: 36 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNavBar -- props rightSecondIconType', () => {
    const wrapper = factory({ rightSecondIconType: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtNavBar -- props rightSecondIconType', () => {
    const wrapper = factory({ rightSecondIconType: 'test', color: 'red', size: 36 })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtNavBar Behavior ', () => {
  it('AtNavBar onClickLeftIcon', () => {
    const onClickLeftIcon = jest.fn()
    const wrapper = factory({
      leftIconType: 'test',
      onClickLeftIcon,
    })
    wrapper.find('.at-nav-bar__left-view view').trigger('tap')
    expect(wrapper.element).toMatchSnapshot()
  })

  it('AtNavBar onClickRgIconNd', () => {
    const onClickRgIconNd = jest.fn()
    const wrapper = factory({
      leftIconType: 'test',
      onClickRgIconNd,
    })
    wrapper.find('.at-nav-bar__right-view view:first-child').trigger('tap')
    expect(wrapper.element).toMatchSnapshot()
  })

  it('AtNavBar onClickRgIconSt', () => {
    const onClickRgIconSt = jest.fn()
    const wrapper = factory({
      leftIconType: 'test',
      onClickRgIconSt,
    })
    wrapper.find('.at-nav-bar__right-view view:last-child').trigger('tap')
    expect(wrapper.element).toMatchSnapshot()
  })
})
