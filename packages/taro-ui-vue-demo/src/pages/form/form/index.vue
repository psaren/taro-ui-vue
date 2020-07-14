<template>
  <view class='page'>
    <DocsHeader title='Form 表单'></DocsHeader>
    <view class='doc-body'>
      <!-- 表单提交与重置 -->
      <view class='panel'>
        <view class='panel__title'>表单提交与重置</view>
        <view class='panel__content no-padding'>
          <view class='component-item'>
            <AtForm
              @submit="handleSubmit"
              @reset="handleReset"
            >
              <AtInput
                required
                name='value1'
                title='文本'
                type='text'
                placeholder='单行文本'
                :value="state.value1"
                :onChange="handleChange.bind(this, 'value1')"
              />
              <AtInput
                required
                name='value2'
                title='密码'
                type='password'
                placeholder='请输入密码'
                :value="state.value2"
                :onChange="handleChange.bind(this, 'value2')"
              />
              <AtCheckbox
                :options="[
                  { label: 'iPhone X', value: 'iPhone X' },
                  { label: 'HUAWEI P20', value: 'HUAWEI P20' }
                ]"
                :selectedList="state.value3"
                :onChange="handleChange.bind(this, 'value3')"
              />
              <view class='component-item__btn-group'>
                <view class='component-item__btn-group__btn-item'>
                  <AtButton type='primary' formType='submit'>
                    提交
                  </AtButton>
                </view>
                <view class='component-item__btn-group__btn-item'>
                  <AtButton formType='reset'>重置</AtButton>
                </view>
              </view>
            </AtForm>
          </view>
        </view>
      </view>
    </view>
    <AtToast
      :text="state.text"
      :isOpened="state.isOpened"
    ></AtToast>
  </view>
</template>

<script>
import setStateMixin from '../../../mixins/setStateMixin'
import './index.scss'
export default {
  name: 'FormPage',
  mixins: [setStateMixin],
  data() {
    return {
      state: {
        value1: '',
        value2: '',
        value3: [],
        text: '',
        isOpened: false
      }
    }
  },
  methods: {
    handleChange(stateName, value) {
      this.setState({
        [stateName]: value
      })
    },

    handleSubmit() {
      const { value1, value2, value3 } = this.state
      if (!value1 || !value2) {
        this.setState({
          isOpened: true,
          text: `表单必填项未填写完整`
        })
      } else {
        this.setState({
          isOpened: true,
          text:
            value3 && value3.length > 0
              ? `${value1} / ${value2} / ${value3.join(',')}`
              : `${value1} / ${value2}`
        })
      }
      this.closeToast()
    },

    closeToast() {
      setTimeout(() => {
        this.setState({
          isOpened: false
        })
      }, 2000)
    },

    handleReset() {
      this.setState({
        isOpened: true,
        text: `表单已被重置`,
        value1: '',
        value2: '',
        value3: []
      })
      this.closeToast()
    }
  }
}
</script>