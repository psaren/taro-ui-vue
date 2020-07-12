<template>
  <view class='page swipe-action-page'>
    <!-- S Header -->
    <DocsHeader title='SwipeAction 滑动操作' />
    <!-- E Header -->

    <!-- S Body -->
    <view class='doc-body'>
      <!-- 无 Title -->
      <view class='panel'>
        <view class='panel__title'>一般用法</view>
        <view class='panel__content no-padding'>
          <view class='example-item example-item--border'>
            <AtSwipeAction :onClick="handleClick" :options="OPTIONS">
              <view class='normal'>AtSwipeAction 一般使用场景</view>
            </AtSwipeAction>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>禁止滑动</view>
        <view class='panel__content no-padding'>
          <view class='example-item example-item--border'>
            <AtSwipeAction disabled :options="OPTIONS">
              <view class='normal'>禁止滑动展示</view>
            </AtSwipeAction>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>使用变量控制开关</view>
        <view class='panel__controller' style='margin-bottom: 10px'>
          <AtButton size='small' :on-click="handleStatusClick">
            当前状态: {{ state.isOpened2 ? '开' : '关' }}{{' '}}
          </AtButton>
        </view>

        <view class='panel__content no-padding'>
          <view class='example-item example-item--border'>
            <AtSwipeAction
              :options="OPTIONS"
              :is-opened="state.isOpened2"
              :onClosed="handleStatusClosed"
              :onOpened="handleStatusOpened"
            >
              <view class='normal'>使用变量控制开关</view>
            </AtSwipeAction>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>自动关闭</view>
        <view class='panel__content no-padding'>
          <view class='example-item example-item--border'>
            <AtSwipeAction
              :onClick="handleClick"
              autoClose
              :options="OPTIONS"
            >
              <view class='normal'>点击按钮自动关闭</view>
            </AtSwipeAction>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>传递点击事件</view>
        <view class='panel__content no-padding'>
          <view class='example-item example-item--border'>
            <AtSwipeAction :onClick="handleClick" :options="OPTIONS">
              <view class='normal'>点击事件触发</view>
            </AtSwipeAction>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>开启和关闭事件</view>
        <view class='panel__content no-padding'>
          <view class='example-item example-item--border'>
            <AtSwipeAction
              :options="OPTIONS"
              :onClick="handleClick"
              :onOpened="handleOpened"
              :onClosed="handleClosed"
            >
              <view class='normal'>开启和关闭时触发事件</view>
            </AtSwipeAction>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>与List组件使用</view>
        <view class='panel__content no-padding'>
          <view class='example-item'>
            <AtList>
              <AtSwipeAction :options="OPTIONS">
                <AtListItem title='Item1' />
              </AtSwipeAction>
              <AtSwipeAction :options="OPTIONS">
                <AtListItem title='Item2' />
              </AtSwipeAction>
              <AtSwipeAction
                :options="[
                  {
                    text: '警告',
                    style: {
                      backgroundColor: '#FFC82C'
                    }
                  }
                ]"
              >
                <AtListItem title='Item3123123123123' />
              </AtSwipeAction>
            </AtList>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>控制只显示单个</view>
        <view class='panel__content no-padding'>
          <view class='example-item'>
            <AtList>
              <AtSwipeAction
                v-for="(item, index) in state.list"
                :key="item.title + index"
                :options="item.options"
                :isOpened="item.isOpened"
                :onClick="handleClicked.bind(this, index)"
                :onOpened="handleSingle.bind(this, index)"
              >
                <AtListItem :title="item.title" />
              </AtSwipeAction>
            </AtList>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import setStateMixin from '../../../mixins/setStateMixin'
import { AtButton, AtList, AtListItem, AtSwipeAction } from '@/taro-ui-vue/src/index'
import Taro from '@tarojs/taro'
import './index.scss'

const OPTIONS = [
  {
    text: '删除',
    style: {
      color: '#333',
      backgroundColor: '#F7F7F7'
    }
  },
  {
    text: '确认',
    style: {
      backgroundColor: '#E93B3D'
    }
  }
]

export default {
  name: 'SwipeActionPage',
  mixins: [setStateMixin],
  components: { 
    AtButton, 
    AtList, 
    AtListItem, 
    AtSwipeAction 
  },
  data() {
    return {
      OPTIONS,
      state: {
        isOpened2: false,
        list: [
          {
            title: 'item1',
            isOpened: false,
            options: OPTIONS
          },
          {
            title: 'item2',
            isOpened: false,
            options: OPTIONS
          },
          {
            title: 'item3',
            isOpened: false,
            options: OPTIONS
          },
          {
            title: 'item4',
            isOpened: false,
            options: OPTIONS
          },
          {
            title: 'item5',
            isOpened: false,
            options: OPTIONS
          },
          {
            title: 'item0',
            isOpened: false,
            options: OPTIONS
          }
        ]
      }
    }
  },
  methods: {
    handleClick (item, key) {
      this.showToast(`点击了${item.text}按钮，Key: ${key}`)
    },

    handleClicked (index) {
      const list = this.state.list.filter((_item, key) => key !== index)
      console.log(list)
      this.setState({
        list
      })
    },

    handleStatusClick () {
      this.setState({
        isOpened2: !this.state.isOpened2
      })
    },

    handleStatusOpened () {
      this.setState({
        isOpened2: true
      })
    },

    handleStatusClosed () {
      this.setState({
        isOpened2: false
      })
    },

    handleSingle (index) {
      const list = this.state.list.map((item, key) => {
        item.isOpened = key === index
        return item
      })
      this.setState({
        list
      })
    },

    handleOpened () {
      this.showToast('Handle Opened')
    },

    handleClosed () {
      this.showToast('Handle Closed')
    },

    showToast (name) {
        Taro.showToast({
          icon: 'none',
          title: name
        })
    }
  }
}
</script>