<template>
  <view class='page'>
    <DocsHeader title='Drawer 抽屉'></DocsHeader>

    <view class='doc-body'>
      <view class='panel'>
        <view class='panel__title'>左边滑出</view>
        <view class='panel__content no-padding'>
          <view class='example'>
            <AtButton :onClick="leftDrawerClick">
              显示 Drawer
            </AtButton>
            <AtDrawer
              :show="leftDrawerShow"
              mask
              :onItemClick="onItemClick"
              :onClose="onClose"
              :items="['菜单1', '菜单2']"
            ></AtDrawer>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>右边滑出</view>
        <view class='panel__content no-padding'>
          <view class='example'>
            <AtButton :onClick="rightDrawerClick">
              显示 Drawer
            </AtButton>
            <AtDrawer
              :show="rightDrawerShow"
              right
              mask
              :onItemClick="onItemClick"
              :onClose="onClose"
              :items="['菜单1', '菜单2']"
            ></AtDrawer>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>自定义内容</view>
        <view class='panel__content no-padding'>
          <view class='example'>
            <AtButton :onClick="childrenDrawerClick">
              显示 Drawer
            </AtButton>
            <AtDrawer
              :show="childrenDrawerShow"
              mask
              :onItemClick="onItemClick"
              :onClose="onClose"
            >
                <view
                  v-for="(item, index) in childrenItem"
                  :class="classNames('drawer-item', {
                    'drawer-item--sub': index === 1 || index === 2
                  })"
                  :onClick="onItemClick.bind(this, index)"
                  :key="`drawer-item-${index}`"
                >
                  {{ item }}
                  <AtIcon v-if="index !== 3 && icons[index]" value={icons[index]} size='20' />
                  <AtBadge value='3' v-if="index === 3 && icons[index]">
                    <AtIcon value={icons[index]} size='20' />
                  </AtBadge>
                </view>
            </AtDrawer>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import classNames from 'classnames'
import Taro from '@tarojs/taro'
import './index.scss'
export default {
  name: 'DrawerPage',
  data() {
    return {
      leftDrawerShow: false,
      rightDrawerShow: false,
      childrenDrawerShow: false,
      childrenItem: ['首页', '可自定义结构', '或自定义样式', '消息', '个人'],
      icons: ['home', '', '', 'message', 'user']
    }
  },
  methods: {
    classNames,
    leftDrawerClick() {
      console.log('leftDrawerClick')
      this.leftDrawerShow = !this.leftDrawerShow
    },

    rightDrawerClick() {
      this.rightDrawerShow = !this.rightDrawerShow
    },

    childrenDrawerClick() {
      this.childrenDrawerShow = !this.childrenDrawerShow
    },

    onItemClick(index) {
      const ENV = Taro.getEnv()
      let content
      if (typeof index !== 'number') {
        content = ''
      } else {
        content = `你点击了第 ${+index + 1} 个项目`
      }
      if (ENV !== 'WEB') content && Taro.showModal({ content, showCancel: false })
      else content && alert(content)
    },

    onClose() {
      this.leftDrawerShow = false
      this.rightDrawerShow = false
      this.childrenDrawerShow = false
    }
  }
}
</script>