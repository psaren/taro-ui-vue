<template>
  <view class='page'>
    <!-- S Header -->
    <DocsHeader title='Tag 标签'></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class='doc-body'>
      <!-- 空心标签 -->
      <view class='panel'>
        <view class='panel__title'>空心标签</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view 
              v-for="(item, index) in hollowTagList" 
              class='subitem' 
              :key="`at-tag-${index}`"
            >
              <AtTag
                :name="item.name"
                :active="item.active"
                :circle="index % 2 === 0"
                :onClick="handleHollowClick"
              >
                标签
              </AtTag>
            </view>
          </view>
        </view>
      </view>

      <!-- 实心标签 -->
      <view class='panel'>
        <view class='panel__title'>实心标签</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view 
              v-for="(item, index) in solidTagList"
              class='subitem' 
              :key="`at-tag-${index}`"
            >
              <AtTag
                type='primary'
                :name="item.name"
                :active="item.active"
                :circle="index % 2 === 0"
                :onClick="handleSolidClick"
              >
                标签
              </AtTag>
            </view>
          </view>
        </view>
      </view>

      <!-- 点击事件 -->
      <view class='panel'>
        <view class='panel__title'>点击事件</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view 
              v-for="(item, index) in tagList"
              class='subitem' 
              :key="`at-tag-${index}`"
            >
              <AtTag
                :name="item.name"
                type='primary'
                :active="item.active"
                :circle="index % 2 === 0"
                :onClick="onClick"
              >
                tag-{{ index + 1 }}
              </AtTag>
            </view>
          </view>
        </view>
      </view>

      <!-- 不可点击态 -->
      <view class='panel'>
        <view class='panel__title'>不可点击态</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view class='subitem'>
              <AtTag type='primary' circle disabled>
                标签
              </AtTag>
            </view>
            <view class='subitem'>
              <AtTag type='primary' disabled>
                标签
              </AtTag>
            </view>
          </view>
        </view>
      </view>

      <!-- 空心标签（小） -->
      <view class='panel'>
        <view class='panel__title'>空心标签（小）</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view
              v-for="(item, index) in hollowTagList2"
              class='subitem' 
              :key="`at-tag-${index}`"
            >
              <AtTag
                size='small'
                :name="item.name"
                :active="item.active"
                :circle="index % 2 === 0"
                :onClick="handleHollowSmallClick"
              >
                标签
              </AtTag>
            </view>
          </view>
        </view>
      </view>

      <!-- 实心标签（小） -->
      <view class='panel'>
        <view class='panel__title'>实心标签（小）</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view 
              v-for="(item, index) in solidTagList2"
              class='subitem' 
              :key="`at-tag-${index}`"
            >
              <AtTag
                size='small'
                type='primary'
                :name="item.name"
                :active="item.active"
                :circle="index % 2 === 0"
                :onClick="handleSolidSmallClick"
              >
                标签
              </AtTag>
            </view>
          </view>
        </view>
      </view>

      <!-- 不可点击态（小） -->
      <view class='panel'>
        <view class='panel__title'>不可点击态（小）</view>
        <view class='panel__content'>
          <view class='example-item'>
            <view class='subitem'>
              <AtTag size='small' type='primary' circle disabled>
                标签
              </AtTag>
            </view>
            <view class='subitem'>
              <AtTag size='small' type='primary' disabled>
                标签
              </AtTag>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- E Body -->
  </view>
</template>
<script>
import Taro from '@tarojs/taro'
export default {
  name: 'TagPage',
  data() {
    return {
      tagList: [
        { name: 'tag-1', active: false },
        { name: 'tag-2', active: false },
        { name: 'tag-3', active: true },
        { name: 'tag-4', active: true }
      ],
      hollowTagList: [
        { name: '标签1', active: false },
        { name: '标签2', active: false },
        { name: '标签3', active: true },
        { name: '标签4', active: true }
      ],
      solidTagList: [
        { name: '标签1', active: false },
        { name: '标签2', active: false },
        { name: '标签3', active: true },
        { name: '标签4', active: true }
      ],
      hollowTagList2: [
        { name: '标签1', active: false },
        { name: '标签2', active: false },
        { name: '标签3', active: true },
        { name: '标签4', active: true }
      ],
      solidTagList2: [
        { name: '标签1', active: false },
        { name: '标签2', active: false },
        { name: '标签3', active: true },
        { name: '标签4', active: true }
      ]
    }
  },
  methods: {
    onClick(data) {
      const { tagList } = this
      const findIndex = tagList.findIndex(item => item.name === data.name)
      const active = !tagList[findIndex].active
      const content = `您点击的 tag 标签名是：${data.name}，点击前是否选中：${data.active}，点击后：${active}`

      tagList[findIndex].active = active
      this.tagList = tagList

      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        alert(content)
      } else {
        Taro.showModal({ content, showCancel: false })
      }
    },

    handleHollowClick(data) {
      const { hollowTagList } = this
      const findIndex = hollowTagList.findIndex(item => item.name === data.name)

      hollowTagList[findIndex].active = !hollowTagList[findIndex].active
      this.hollowTagList = hollowTagList
    },

    handleSolidClick(data) {
      const { solidTagList } = this
      const findIndex = solidTagList.findIndex(item => item.name === data.name)

      solidTagList[findIndex].active = !solidTagList[findIndex].active
      this.solidTagList = solidTagList
    },

    handleHollowSmallClick(data) {
      const { hollowTagList2 } = this
      const findIndex = hollowTagList2.findIndex(item => item.name === data.name)

      hollowTagList2[findIndex].active = !hollowTagList2[findIndex].active
      this.hollowTagList2 = hollowTagList2
    },

    handleSolidSmallClick(data) {
      const { solidTagList2 } = this
      const findIndex = solidTagList2.findIndex(item => item.name === data.name)

      solidTagList2[findIndex].active = !solidTagList2[findIndex].active
      this.solidTagList2 = solidTagList2
    }
  }
}
</script>