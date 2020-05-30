import { mount } from '@vue/test-utils'
import AtCountdown from '../../src/components/countdown'
import { sleep } from '../utils'

const factory = async (values = {}, slots = { default: [] }) => {
  const component = mount(AtCountdown, {
    slots,
    propsData: { ...values },
  })
  await sleep(0)
  return component
}

describe('AtCountdown Snap', async () => {
  it('render initial AtCountdown', async () => {
    const wrapper = await factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCountdown -- props className', async () => {
    const wrapper = await factory({ className: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCountdown -- props customStyle', async () => {
    const wrapper = await factory({ customStyle: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCountdown -- props isCard', async () => {
    const wrapper = await factory({ isCard: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCountdown -- props format', async () => {
    const wrapper = await factory({ format: { hours: ':', minutes: ':', seconds: '' } })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCountdown -- props day', async () => {
    const wrapper = await factory({ day: 1 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCountdown -- props hours', async () => {
    const wrapper = await factory({ hours: 1 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCountdown -- props minutes', async () => {
    const wrapper = await factory({ minutes: 1 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCountdown -- props seconds', async () => {
    const wrapper = await factory({ seconds: 1 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCountdown -- props isShowDay', async () => {
    const wrapper = await factory({ isShowDay: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCountdown -- hours > 24 and show day', async () => {
    const wrapper = await factory({
      isShowDay: true,
      hours: 25,
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtCountdown -- hours > 24 and not show day', async () => {
    const wrapper = await factory({
      isShowDay: false,
      hours: 25,
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
