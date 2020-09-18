<template>
  <view class="page">
    <DocsHeader title="Timeline 时间轴"></DocsHeader>

    <view class="doc-body">
      <!-- 基础用法 -->
      <view class="panel">
        <view class="panel__title">基础用法</view>
        <view class="panel__content">
          <view class="example-item">
            <AtTimeline
              :items="[
                { title: '刷牙洗脸' },
                { title: '吃早餐' },
                { title: '上班' },
                { title: '睡觉' },
              ]"
            ></AtTimeline>
          </view>
        </view>
      </view>

      <!-- 自定义颜色 -->
      <view class="panel">
        <view class="panel__title">自定义颜色</view>
        <view class="panel__content">
          <view class="example-item">
            <AtTimeline
              :items="[
                { title: '刷牙洗脸' },
                { title: '吃早餐', color: 'green' },
                { title: '上班', color: 'red' },
                { title: '睡觉', color: 'yellow' },
              ]"
            ></AtTimeline>
          </view>
        </view>
      </view>

      <!-- 自定义图标 -->
      <view class="panel">
        <view class="panel__title">自定义图标</view>
        <view class="panel__content">
          <view class="example-item">
            <AtTimeline
              :items="[
                { title: '刷牙洗脸', icon: 'check-circle' },
                { title: '吃早餐', icon: 'clock' },
                { title: '上班', icon: 'clock' },
                { title: '睡觉', icon: 'clock' },
              ]"
            ></AtTimeline>
          </view>
        </view>
      </view>

      <!-- 幽灵节点 -->
      <view class="panel">
        <view class="panel__title">幽灵节点</view>
        <view class="panel__content">
          <view class="example-item">
            <AtTimeline
              pending
              :items="[
                { title: '刷牙洗脸' },
                { title: '吃早餐' },
                { title: '上班' },
                { title: '睡觉' },
              ]"
            ></AtTimeline>
          </view>
        </view>
      </view>

      <!-- 丰富内容 -->
      <view class="panel">
        <view class="panel__title">丰富内容</view>
        <view class="panel__content">
          <view class="example-item">
            <AtTimeline
              pending
              :items="[
                {
                  title: '刷牙洗脸',
                  content: ['大概8:00'],
                  icon: 'check-circle',
                },
                {
                  title: '吃早餐',
                  content: ['牛奶+面包', '餐后记得吃药'],
                  icon: 'clock',
                },
                {
                  title: '上班',
                  content: ['查看邮件', '写PPT', '发送PPT给领导'],
                  icon: 'clock',
                },
                { title: '睡觉', content: ['不超过23:00'], icon: 'clock' },
              ]"
            ></AtTimeline>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'TimelinePage',
}
</script>
