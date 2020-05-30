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
// const factory = (values = {}) => {
//   const propsDataStr = Object.keys(values)
//     .map((k) => {
//       return (typeof values[k] == 'string' ? '' : ':') + `${k}="${values[k]}"`
//     })
//     .join(' ')
//   console.log(propsDataStr)
//   return mount({
//     localVue,
//     components: {
//       AtBadge,
//       AtButton,
//       AtLoading,
//     },
//     template: `
//       <AtBadge ${propsDataStr}>
//         按钮文字
//       </AtBadge>
//     `,
//   })
// }

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
