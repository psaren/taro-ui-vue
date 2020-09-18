import { mount } from '@vue/test-utils'
import { AtRadio } from '../dist/index.esm'

const options = [
  { label: '单选项一', value: 'option1' },
  { label: '单选项二', value: 'option2', desc: '单选项描述二' },
  { label: '单选项三', value: 'option3', desc: '单选项描述三', disabled: true },
]

describe('AtRadio Snap', () => {
  it('render AtRadio', () => {
    const wrapper = mount({
      render() {
        return <AtRadio options={options} />
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtRadio Event', () => {
  it('AtRadio onClick', () => {
    const onItemClick = jest.fn()
    const wrapper = mount({
      render() {
        return <AtRadio value="option2" options={options} props={{ onClick: onItemClick }} />
      },
    })
    wrapper.find('.at-radio .at-radio__option').trigger('tap')
    expect(onItemClick).toBeCalled()
    expect(onItemClick.mock.calls[0][0]).toBe('option1')
  })

  it('AtRadio onClick disabled, onClick not to be called', () => {
    const onItemClick = jest.fn()
    const wrapper = mount({
      render() {
        return <AtRadio value="option2" options={options} props={{ onClick: onItemClick }} />
      },
    })
    wrapper.find('.at-radio .at-radio__option:nth-child(3)').trigger('tap')
    expect(onItemClick).not.toBeCalled()
  })
})
