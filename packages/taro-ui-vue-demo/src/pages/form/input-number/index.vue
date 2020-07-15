<template>
  <view class='page'>
    <!-- S Header -->
    <DocsHeader title='Input Number 数字输入框'></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class='doc-body'>
      <!-- 基础用法 -->
      <view class='panel'>
        <view class='panel__title'>基础用法</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view class='example-item__desc'>
              min=0, max=10, step=1
            </view>
            <AtInputNumber
              :min="0"
              :max="10"
              :step="1"
              :value="state.number1"
              :onChange="handleNumberChange.bind(this, 'number1')"
            />
          </view>
        </view>
      </view>

      <!-- 小数 -->
      <view class='panel'>
        <view class='panel__title'>小数</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view class='example-item__desc'>
              min=0, max=10, step=0.1
            </view>
            <AtInputNumber
              type='digit'
              :min="0"
              :max="10"
              :step="0.1"
              :value="state.number2"
              :onChange="handleNumberChange.bind(this, 'number2')"
            />
          </view>
        </view>
      </view>

      <!-- 禁用状态 -->
      <view class='panel'>
        <view class='panel__title'>禁用状态</view>
        <view class='panel__content'>
          <view class='example-item'>
            <AtInputNumber
              disabled
              :min="0"
              :max="10"
              :step="1"
              :value="state.number3"
              :onChange="handleNumberChange.bind(this, 'number3')"
            />
          </view>
        </view>
      </view>
      <!-- 禁用输入状态 -->
      <view class='panel'>
        <view class='panel__title'>禁用输入状态</view>
        <view class='panel__content'>
          <view class='example-item'>
            <AtInputNumber
              disabledInput
              :min="0"
              :max="10"
              :step="1"
              :value="state.number6"
              :onChange="handleNumberChange.bind(this, 'number6')"
            />
          </view>
        </view>
      </view>

      <!-- 自定义宽度 -->
      <view class='panel'>
        <view class='panel__title'>自定义宽度</view>
        <view class='panel__content'>
          <view class='example-item'>
            <AtInputNumber
              :width="200"
              :min="0"
              :max="10"
              :step="1"
              :value="state.number4"
              :onChange="handleNumberChange.bind(this, 'number4')"
            />
          </view>
        </view>
      </view>

      <!-- 大尺寸 -->
      <view class='panel'>
        <view class='panel__title'>大尺寸</view>
        <view class='panel__content'>
          <view class='example-item'>
            <AtInputNumber
              size='large'
              :min="0"
              :max="10"
              :step="1"
              :value="state.number5"
              :onChange="handleNumberChange.bind(this, 'number5')"
            />
          </view>
        </view>
      </view>
    </view>
    <!-- E Body -->
  </view>
</template>

<script>
import setStateMixin from '../../../mixins/setStateMixin'
import './index.scss'

export default {
  name: 'InputNumberPage',
  mixins: [setStateMixin],
  data() {
    return {
      state: {
        number1: 1,
        number2: 1,
        number3: 1,
        number4: 1,
        number5: 1,
        number6: 1
      }
    }
  },
  methods: {
    handleNumberChange(stateName, value, e) {
      this.setState({
        [stateName]: value
      })
      /* eslint-disable-next-line no-console */
      console.log('Event:', e)
    }
  }
}
</script>