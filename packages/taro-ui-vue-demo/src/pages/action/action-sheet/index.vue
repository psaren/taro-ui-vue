<template>
  <view class="page">
    <!-- S Header -->
    <DocsHeader title="ActionSheet 动作面板" />
    <!-- S Header -->

    <!-- S Body -->
    <view class="doc-body">
      <!-- 无 Title -->
      <view class="panel">
        <view class="panel__title">无标题</view>
        <view class="panel__content">
          <view class="example-item">
            <AtButton :on-click="handleClick.bind(this, 1)">
              打开 ActionSheet
            </AtButton>
          </view>
        </view>
      </view>

      <!-- 含标题 -->
      <view class="panel">
        <view class="panel__title">含标题</view>
        <view class="panel__content">
          <view class="example-item">
            <AtButton :on-click="handleClick.bind(this, 2)">
              打开 ActionSheet
            </AtButton>
          </view>
        </view>
      </view>

      <!-- 自定义选项 -->
      <view class="panel">
        <view class="panel__title">自定义选项</view>
        <view class="panel__content">
          <view class="example-item">
            <AtButton :on-click="handleClick.bind(this, 3)">
              打开 ActionSheet
            </AtButton>
          </view>
        </view>
      </view>
    </view>

    <AtActionSheet
      cancelText="取消"
      :isOpened="state.isOpened1"
      :on-close="handleClose.bind(this, 1)"
    >
      <AtActionSheetItem :on-click="showToast.bind(this, '点击了按钮一')">
        按钮一
      </AtActionSheetItem>
      <AtActionSheetItem :on-click="showToast.bind(this, '点击了按钮二')">
        按钮二
      </AtActionSheetItem>
    </AtActionSheet>

    <AtActionSheet
      cancelText="取消"
      :isOpened="state.isOpened2"
      :on-close="handleClose.bind(this, 2)"
      title="清除位置信息后， 别人将不能查看到你"
    >
      <AtActionSheetItem :on-click="showToast.bind(this, '点击了按钮一')">
        按钮一
      </AtActionSheetItem>
      <AtActionSheetItem :on-click="showToast.bind(this, '点击了按钮二')">
        按钮二
      </AtActionSheetItem>
    </AtActionSheet>

    <AtActionSheet
      cancelText="取消"
      :isOpened="state.isOpened3"
      :on-cancel="handleCancel"
      :on-close="handleClose.bind(this, 3)"
      title="清除位置信息后， 别人将不能查看到你"
    >
      <AtActionSheetItem :on-click="showToast.bind(this, '点击了按钮一')">
        按钮一
      </AtActionSheetItem>
      <AtActionSheetItem :on-click="showToast.bind(this, '点击了按钮二')">
        按钮二
      </AtActionSheetItem>
      <AtActionSheetItem :on-click="showToast.bind(this, '成功清除位置')">
        <text class="danger">清除位置信息并退出</text>
      </AtActionSheetItem>
    </AtActionSheet>
  </view>
</template>

<script lang="ts">
import { AtActionSheet, AtActionSheetItem, AtButton } from 'taro-ui-vue'
import setStateMixin from '../../../mixins/setStateMixin'
import Taro from '@tarojs/taro'

export default {
  name: 'ActionSheetPage',
  mixins: [setStateMixin],
  components: {
    AtActionSheet,
    AtActionSheetItem,
    AtButton,
  },
  data() {
    return {
      state: {
        isOpened1: false,
        isOpened2: false,
        isOpened3: false,
      },
    }
  },
  methods: {
    handleClick(type) {
      this.setState({
        [`isOpened${type}`]: true,
      })
    },
    handleClose(name) {
      this.setState({
        [`isOpened${name}`]: false,
      })
      Taro.showToast({
        title: `第 ${name} 个Action Sheet已经关闭`,
        icon: 'none',
      })
    },
    handleCancel() {
      this.showToast('点击了取消按钮')
    },
    showToast(name) {
      Taro.showToast({
        icon: 'none',
        title: name,
      })
    },
  },
}
</script>
