<template>
  <view class="page">
    <DocsHeader title="TabBar 标签栏"></DocsHeader>

    <view class="doc-body">
      <view class="panel">
        <view class="panel__title">文本标签栏</view>
        <view class="panel__content no-padding">
          <AtTabBar
            :tabList="tabList1"
            :onClick="handleClick.bind(this, 1)"
            :current="current1"
          />
        </view>
      </view>
      <view class="panel">
        <view class="panel__title">图标文本标签栏</view>
        <view class="panel__content no-padding">
          <AtTabBar
            :tabList="tabList2"
            :onClick="handleClick.bind(this, 2)"
            :current="current2"
          />
        </view>
      </view>
      <view class="panel">
        <view class="panel__title">
          自定义图标颜色、字体颜色、背景颜色
        </view>
        <view class="panel__content no-padding">
          <AtTabBar
            backgroundColor="#FAFBFC"
            color="#ea6bb8"
            selectedColor="#e64340"
            :tabList="tabList2"
            :onClick="handleClick.bind(this, 3)"
            :current="current3"
          />
        </view>
      </view>
      <view class="panel">
        <view class="panel__title">图片icon</view>
        <view class="panel__content no-padding" style="padding-bottom: 24px;">
          <AtTabBar
            :tabList="tabList3"
            :onClick="handleClick.bind(this, 5)"
            :current="current5"
          />
        </view>
      </view>
      <view class="panel">
        <view class="panel__title">固定底部</view>
        <view class="panel__content no-padding" style="padding-bottom: 24px;">
          <AtTabBar
            fixed
            :tabList="tabList2"
            :onClick="handleClick.bind(this, 4)"
            :current="current4"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'TabBarPage',
  data() {
    return {
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      current5: 0,
      tabList1: [
        { title: '待办事项', text: 8 },
        { title: '拍照' },
        { title: '通讯录', dot: true },
      ],
      tabList2: [
        { title: '待办事项', iconType: 'bullet-list', text: 'new' },
        { title: '拍照', iconType: 'camera' },
        { title: '文件夹', iconType: 'folder', text: '100', max: 99 },
      ],
      tabList3: [
        {
          title: '领取中心',
          image:
            'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          selectedImage:
            'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          text: 'new',
        },
        {
          title: '找折扣',
          image:
            'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        },
        {
          title: '领会员',
          image:
            'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
          text: '100',
          max: 99,
        },
      ],
    }
  },
  methods: {
    handleClick(num, value) {
      this[`current${num}`] = value
    },
  },
}
</script>
