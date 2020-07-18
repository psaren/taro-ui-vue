<template>
  <view class='page'>
    <DocsHeader title='Tabs 标签页'></DocsHeader>

    <view class='doc-body'>
      <!-- 基础用法 -->
      <view class='panel'>
        <view class='panel__title'>等宽标签栏</view>
        <view class='panel__content'>
          <AtTabs
            :swipeable="false"
            :current="current1"
            :tabList="tabList1"
            :onClick="handleClick.bind(this, 'current1')"
          >
            <AtTabsPane :current="current1" :index="0">
              <view class='tab-content'>标签页一的内容</view>
            </AtTabsPane>
            <AtTabsPane :current="current1" :index="1">
              <view class='tab-content'>标签页二的内容</view>
            </AtTabsPane>
            <AtTabsPane :current="current1" :index="2">
              <view class='tab-content'>标签页三的内容</view>
            </AtTabsPane>
          </AtTabs>
        </view>
      </view>
      <view class='panel'>
        <view class='panel__title'>滚动标签栏</view>
        <view class='panel__content'>
          <AtTabs
            :swipeable="false"
            scroll
            :current="current2"
            :tabList="tabList2"
            :onClick="handleClick.bind(this, 'current2')"
          >
            <AtTabsPane :current="current2" :index="0">
              <view class='tab-content'>标签页一的内容</view>
            </AtTabsPane>
            <AtTabsPane :current="current2" :index="1">
              <view class='tab-content'>标签页二的内容</view>
            </AtTabsPane>
            <AtTabsPane :current="current2" :index="2">
              <view class='tab-content'>标签页三的内容</view>
            </AtTabsPane>
            <AtTabsPane :current="current2" :index="3">
              <view class='tab-content'>标签页四的内容</view>
            </AtTabsPane>
            <AtTabsPane :current="current2" :index="4">
              <view class='tab-content'>标签页五的内容</view>
            </AtTabsPane>
            <AtTabsPane :current="current2" :index="5">
              <view class='tab-content'>标签页六的内容</view>
            </AtTabsPane>
          </AtTabs>
        </view>
      </view>
      <view class='panel'>
        <view class='panel__title'>滑动切换内容</view>
        <view class='panel__content'>
          <AtTabs
            :current="current3"
            :tabList="tabList1"
            :onClick="handleClick.bind(this, 'current3')"
          >
            <AtTabsPane :current="current3" :index="0">
              <view class='tab-content'>标签页一的内容</view>
            </AtTabsPane>
            <AtTabsPane :current="current3" :index="1">
              <view class='tab-content'>标签页二的内容</view>
            </AtTabsPane>
            <AtTabsPane :current="current3" :index="2">
              <view class='tab-content'>标签页三的内容</view>
            </AtTabsPane>
          </AtTabs>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>垂直模式</view>
        <view class='panel__content'>
          <AtTabs
            height='200px'
            scroll
            tabDirection='vertical'
            :current="current4"
            :tabList="tabList2"
            :onClick="handleClick.bind(this, 'current4')"
          >
            <AtTabsPane
              tabDirection='vertical'
              :current="current4"
              :index="0"
            >
              <view class='tab-content--vertical'>标签页一的内容</view>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              :current="current4"
              :index="1"
            >
              <view class='tab-content--vertical'>标签页二的内容</view>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              :current="current4"
              :index="2"
            >
              <view class='tab-content--vertical'>标签页三的内容</view>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              :current="current4"
              :index="3"
            >
              <view class='tab-content--vertical'>标签页四的内容</view>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              :current="current4"
              :index="4"
            >
              <view class='tab-content--vertical'>标签页五的内容</view>
            </AtTabsPane>
            <AtTabsPane
              tabDirection='vertical'
              :current="current4"
              :index="5"
            >
              <view class='tab-content--vertical'>标签页六的内容</view>
            </AtTabsPane>
          </AtTabs>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>禁止内容切换动画</view>
        <view class='panel__content'>
          <AtTabs
            :current="current5"
            :animated="false"
            :tabList="tabList1"
            :onClick="handleClick.bind(this, 'current5')"
          >
            <AtTabsPane :current="current5" :index="0">
              <view class='tab-content'>标签页一的内容</view>
            </AtTabsPane>
            <AtTabsPane :current="current5" :index="1">
              <view class='tab-content'>标签页二的内容</view>
            </AtTabsPane>
            <AtTabsPane :current="current5" :index="2">
              <view class='tab-content'>标签页三的内容</view>
            </AtTabsPane>
            <AtTabsPane :current="current5" :index="3">
              <view class='tab-content'>标签页四的内容</view>
            </AtTabsPane>
          </AtTabs>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import './index.scss'
export default {
  name: 'TabsPage',
  data() {
    return {
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      current5: 0,
      tabList1: [
        { title: '标签页1' },
        { title: '标签页2' },
        { title: '标签页3' }
      ],
      tabList2: [
        { title: '标签页1' },
        { title: '标签页2' },
        { title: '标签页3' },
        { title: '标签页4' },
        { title: '标签页5' },
        { title: '标签页6' }
      ]
    }
  },
  methods: {
    handleClick(stateName, value) {
      this[stateName] = value
    }
  }
}
</script>