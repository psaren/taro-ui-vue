import { mount } from '@vue/test-utils'
import AtTabBar from '../components/tab-bar'

const factory = (values = {}, slots = { default: [''] }) => {
  return mount(AtTabBar, {
    slots,
    propsData: { ...values },
  })
}

describe('AtTabBar Snap', () => {
  const tabList = [
    { title: '待办事项', iconType: 'bullet-list', text: 'new' },
    { title: '拍照', iconType: 'camera' },
    { title: '文件夹', iconType: 'folder', text: '100', max: '99' },
    {
      title: '领取中心',
      image:
        'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      selectedImage:
        'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
      text: 'new',
    },
  ]

  it('render initial AtTabBar', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTabBar -- props customStyle', () => {
    const wrapper = factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTabBar -- props className', () => {
    const wrapper = factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTabBar -- props backgroundColor', () => {
    const wrapper = factory({ fixed: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTabBar -- props tabList', () => {
    const wrapper = factory({ tabList: tabList })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTabBar -- props iconSize', () => {
    const wrapper = factory({ iconSize: '26', tabList: tabList })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTabBar -- props fontSize', () => {
    const wrapper = factory({ fontSize: '26', tabList: tabList })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTabBar -- props color', () => {
    const wrapper = factory({ color: 'red', tabList: tabList })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtTabBar -- props selectedColor', () => {
    const wrapper = factory({ selectedColor: 'red', tabList: tabList })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('render AtTabBar -- props scroll', () => {
    const wrapper = factory({ scroll: true, tabList: tabList })
    expect(wrapper.element).toMatchSnapshot()
  })
})
