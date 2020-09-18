import { mount } from '@vue/test-utils'
import AtPagination from '../components/pagination'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtPagination, {
    components: {},
    slots,
    propsData: { ...values },
  })
}

describe('AtPagination Snap', () => {
  it('render AtPagination -- props current', () => {
    const wrapper = factory({ current: 2 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtPagination -- props total', () => {
    const wrapper = factory({ total: 100 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtPagination -- props pageSize', () => {
    const wrapper = factory({ pageSize: 40 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtPagination -- props icon', () => {
    const wrapper = factory({ icon: true })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtPagination Event', () => {
  it('AtPagination onPageChange - prev', () => {
    const onPageChange = jest.fn()
    const wrapper = factory({
      total: 100,
      current: 2,
      onPageChange,
    })
    expect(wrapper.element).toMatchSnapshot()
    wrapper.find('.at-pagination .at-pagination__btn-prev .at-button').trigger('tap')
    expect(onPageChange).toBeCalled()
    expect(wrapper.vm.state.currentPage).toBe(1)
  })

  it('AtPagination onPageChange - next', () => {
    const onPageChange = jest.fn()
    const wrapper = factory({
      total: 100,
      current: 2,
      onPageChange,
    })
    expect(wrapper.element).toMatchSnapshot()
    wrapper.find('.at-pagination .at-pagination__btn-next .at-button').trigger('tap')
    expect(onPageChange).toBeCalled()
    expect(wrapper.vm.state.currentPage).toBe(3)
  })

  it('AtPagination onPageChange not to be called(disabled prev or next)', () => {
    const onPageChange = jest.fn()
    const wrapper = factory({
      total: 20,
      onPageChange,
    })
    expect(wrapper.element).toMatchSnapshot()
    wrapper.find('.at-pagination .at-pagination__btn-prev .at-button').trigger('tap')
    wrapper.find('.at-pagination .at-pagination__btn-next .at-button').trigger('tap')
    expect(onPageChange).not.toBeCalled()
  })

  it('AtPagination onPageChange params {type, current} - prev', () => {
    const onPageChange = jest.fn()
    const wrapper = factory({
      current: 2,
      total: 100,
      onPageChange,
    })
    wrapper.find('.at-pagination .at-pagination__btn-prev .at-button').trigger('tap')
    expect(onPageChange.mock.calls[0][0].type).toEqual('prev')
    expect(onPageChange.mock.calls[0][0].current).toEqual(1)
  })

  it('AtPagination onPageChange params {type, current} - next', () => {
    const onPageChange = jest.fn()
    const wrapper = factory({
      total: 100,
      onPageChange,
    })
    wrapper.find('.at-pagination .at-pagination__btn-next .at-button').trigger('tap')
    expect(onPageChange.mock.calls[0][0].type).toEqual('next')
    expect(onPageChange.mock.calls[0][0].current).toEqual(2)
  })
})
