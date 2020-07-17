<template>
  <view class='page'>
    <DocsHeader title='Card 卡片' />

    <view class='doc-body'>
      <view class='panel'>
        <view class='panel__title'>基础卡片</view>
        <view class='panel__content no-padding'>
          <view class='example-item'>
            <AtCard title='这是个标题' :onClick="handleClick">
              这也是内容区 可以随意定义功能
            </AtCard>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>带缩略图的卡片</view>
        <view class='panel__content no-padding'>
          <view class='example-item'>
            <AtCard
              title='这是个标题'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            >
              这也是内容区 可以随意定义功能
            </AtCard>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>带图标的卡片</view>
        <view class='panel__content no-padding'>
          <view class='example-item'>
            <AtCard
              title='这是个标题'
              :icon="{ value: 'tags', color: '#77a1fd' }"
            >
              这也是内容区 可以随意定义功能
            </AtCard>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>自定义图标的卡片</view>
        <view class='panel__content no-padding'>
          <view class='example-item'>
            <AtCard
              title='这是个标题'
            >
              这也是内容区 可以随意定义功能
              <AtIcon
                slot="renderIcon"
                prefixClass='at-icon'
                value='image'
                size='16'
                color='#6190e8'
                :customStyle="{ marginRight: '8px' }"
              ></AtIcon>
            </AtCard>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>带小信息的卡片</view>
        <view class='panel__content no-padding'>
          <view class='example-item'>
            <AtCard
              note='小Tips'
              title='这是个标题'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            >
              这也是内容区 可以随意定义功能
            </AtCard>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>自定义额外信息样式的卡片</view>
        <view class='panel__content no-padding'>
          <view class='example-item'>
            <AtCard
              note='小Tips'
              extra='2019/01/23 22:33:33'
              :extraStyle="{
                fontSize: '12px',
                maxWidth: '200px',
                color: '#6190e8'
              }"
              title='这是个标题'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            >
              这也是内容区 可以随意定义功能
            </AtCard>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>通栏卡片</view>
        <view class='panel__content no-padding'>
          <view class='example-item'>
            <AtCard
              isFull
              note='小Tips'
              extra='额外信息'
              title='这是个标题'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            >
              这也是内容区 可以随意定义功能 这也是内容区 可以随意定义功能
              这也是内容区 可以随意定义功能
            </AtCard>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'

export default {
  name: 'CardPage',
  methods: {
    handleClick()  {
      Taro.showToast({
        title: 'Card handleClick',
        icon: 'none'
      })
    }
  }
}
</script>