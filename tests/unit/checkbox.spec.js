import { mount } from '@vue/test-utils'
import AtCheckbox from '../components/checkbox'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtCheckbox, {
    slots,
    propsData: { ...values },
  })
}

const checkboxOption = [
  {
    value: 'list1',
    label: 'iPhone X',
    desc:
      '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
  },
  { value: 'list2', label: 'HUAWEI P20' },
  {
    value: 'list3',
    label: 'OPPO Find X',
    desc:
      '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
    disabled: true,
  },
  {
    value: 'list4',
    label: 'vivo NEX',
    desc:
      '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
    disabled: true,
  },
]

describe('AtCheckbox Snap', () => {
  it('render initial AtCheckbox', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCheckbox -- props options', () => {
    const wrapper = factory({ options: checkboxOption })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCheckbox -- props selectedList', () => {
    const wrapper = factory({ options: checkboxOption, selectedList: ['list2'] })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtCheckbox Event', () => {
  it('AtCheckbox onChange', () => {
    const onClick = jest.fn()
    const wrapper = factory({
      options: checkboxOption,
      selectedList: ['list2'],
      onChange: onClick,
    })
    wrapper.find('.at-checkbox .at-checkbox__option').trigger('tap')
    expect(onClick).toBeCalled()
  })

  it('AtCheckbox disabled, onChange not to be called', () => {
    const onClick = jest.fn()
    const wrapper = factory({
      options: checkboxOption,
      selectedList: ['list2'],
      onChange: onClick,
    })
    wrapper.find('.at-checkbox .at-checkbox__option:nth-child(3)').trigger('tap')
    expect(onClick).not.toBeCalled()
  })
})
