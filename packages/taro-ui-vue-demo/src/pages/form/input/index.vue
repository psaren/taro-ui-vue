<template>
  <view class='page'>
    <!-- S Header -->
    <DocsHeader title='Input 输入框'></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class='doc-body'>
      <!-- 基础用法 -->
      <view class='panel'>
        <view class='panel__title'>基础用法</view>
        <view class='panel__content no-padding'>
          <view class='component-item'>
            <AtForm>
              <AtInput
                name='value1'
                title='标准五个字'
                type='text'
                placeholder='标准五个字'
                :value="state.value1"
                :onChange="handleInput.bind(this, 'value1')"
              />
              <AtInput
                name='value2'
                title='标题实在特别长就换行'
                placeholder='其他列保持正常间距'
                :value="state.value2"
                :onChange="handleInput.bind(this, 'value2')"
              />
              <AtInput
                name='value3'
                :border="false"
                placeholder='无标题'
                :value="state.value3"
                :onChange="handleInput.bind(this, 'value3')"
              />
            </AtForm>
          </view>
        </view>
      </view>

      <!-- 输入框类型 -->
      <view class='panel'>
        <view class='panel__title'>输入框类型</view>
        <view class='panel__content no-padding'>
          <view class='component-item'>
            <AtForm>
              <AtInput
                name='value4'
                title='文本'
                type='text'
                placeholder='单行文本'
                :value="state.value4"
                :onChange="handleInput.bind(this, 'value4')"
              />
              <AtInput
                name='value5'
                title='数字'
                type='number'
                placeholder='请输入数字'
                :value="state.value5"
                :onChange="handleInput.bind(this, 'value5')"
              />
              <AtInput
                name='value6'
                title='密码'
                type='password'
                placeholder='密码不能少于10位数'
                :value="state.value6"
                :onChange="handleInput.bind(this, 'value6')"
              />
              <AtInput
                name='value7'
                title='身份证'
                type='idcard'
                placeholder='身份证号码'
                :value="state.value7"
                :onChange="handleInput.bind(this, 'value7')"
              />
              <AtInput
                name='value8'
                title='小数'
                type='digit'
                placeholder='请输入小数'
                :value="state.value8"
                :onChange="handleInput.bind(this, 'value8')"
              />
              <AtInput
                name='value9'
                :border="false"
                title='手机号码'
                type='phone'
                placeholder='手机号码'
                :value="state.value9"
                :onChange="handleInput.bind(this, 'value9')"
              />
            </AtForm>
          </view>
        </view>
      </view>

      <!-- 状态 -->
      <view class='panel'>
        <view class='panel__title'>状态</view>
        <view class='panel__content no-padding'>
          <view class='component-item'>
            <AtForm>
              <AtInput
                name='value10'
                disabled
                title='禁用'
                type='text'
                placeholder='禁止输入'
                :value="state.value10"
                :onChange="handleInput.bind(this, 'value10')"
              />
              <AtInput
                name='value11'
                error
                title='出现错误'
                type='text'
                placeholder='点击按钮触发回调'
                :value="state.value11"
                :onChange="handleInput.bind(this, 'value11')"
                :onErrorClick="onClickErrorIcon"
              />
              <AtInput
                name='value12'
                :editable="false"
                title='不可编辑'
                type='text'
                placeholder='不可编辑'
                value='不可编辑的内容'
              />
              <AtInput
                name='value13'
                :border="false"
                clear
                title='清除按钮'
                type='text'
                placeholder='点击清除按钮清空内容'
                :value="state.value13"
                :onChange="handleInput.bind(this, 'value13')"
              />
              <AtInput
                name='value16'
                :border="false"
                required
                title='必填项'
                type='text'
                placeholder='必填项'
                :value="state.value16"
                :onChange="handleInput.bind(this, 'value16')"
              />
              <AtInput
                name='value17'
                :border="false"
                title='监听事件'
                type='text'
                placeholder='监听键盘高度事件'
                :value="state.value17"
                :onChange="handleInput.bind(this, 'value17')"
                :onKeyboardHeightChange="handleKeyboardHeightChange"
              />
            </AtForm>
          </view>
        </view>
      </view>

      <!-- 自定义右边栏 -->
      <view class='panel'>
        <view class='panel__title'>自定义右边栏</view>
        <view class='panel__content no-padding'>
          <view class='component-item'>
            <AtForm>
              <AtInput
                name='value14'
                title='验证码'
                type='text'
                :maxLength="4"
                clear
                placeholder='验证码'
                :value="state.value14"
                :onChange="handleInput.bind(this, 'value14')"
              >
                <img v-if="env === 'WEB'" :src="verification_code" />
                <image v-else :src="verification_code" />
              </AtInput>
              <AtInput
                name='value15'
                :border="false"
                type='phone'
                clear
                placeholder='请输入手机号码'
                :value="state.value15"
                :onChange="handleInput.bind(this, 'value15')"
              >
                <view
                  :style="{
                    color: state.disabled ? '#FF4949' : '',
                    fontSize: '12px',
                    width: '90px'
                  }"
                  :onClick="sendCode"
                >
                  {{showTipText()}}
                </view>
              </AtInput>
            </AtForm>
          </view>
        </view>
      </view>
    </view>
    <!-- E Body -->
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import setStateMixin from '../../../mixins/setStateMixin'
import './index.scss'
import verification_code from '../../../assets/images/verification_code.png'

export default {
  name: 'InputPage',
  mixins: [setStateMixin],
  data() {
    return {
      env: Taro.getEnv(),
      verification_code,
      state: {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value13: '',
        value14: '',
        value15: '',
        value16: '',
        value17: '',
        disabled: false,
        second: 60
      }
    }
  },
  methods: {
    showTipText() {
      return this.state.disabled ? `${this.state.second}s后重试` : '发送验证码'
    },

    sendCode() {
      if (this.state.disabled) return
      this.setState({
        disabled: true
      })
      // 倒计时
      const timer = setInterval(() => {
        if (this.state.second > 0) {
          this.setState({
            second: this.state.second - 1
          })
        } else {
          this.setState({
            second: 60,
            disabled: false
          })
          clearInterval(timer)
        }
      }, 1000)
    },

    handleInput(stateName, value) {
      this.setState({
        [stateName]: value
      })
    },

    onClickErrorIcon() {
      console.log(this.$taro)
      Taro.showToast({
        title: '请输入数字',
        icon: 'success',
        duration: 2000
      })
    },

    handleKeyboardHeightChange(event) {
      Taro.showToast({
        title: `高度 ${event.detail.height}`,
        icon: 'success',
        duration: 2000
      })
    }
  }
}
</script>