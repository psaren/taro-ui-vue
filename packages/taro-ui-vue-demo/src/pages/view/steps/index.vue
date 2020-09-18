<template>
  <view class="page">
    <DocsHeader title="Steps 步骤条"></DocsHeader>

    <view class="doc-body">
      <!-- 基础用法 -->
      <view class="panel">
        <view class="panel__title">基础用法</view>
        <view class="panel__content">
          <view class="example-item">
            <AtSteps
              :items="items1"
              :current="current1"
              :onChange="onChange.bind(this, 'current1')"
            />
            <AtSteps
              :items="items2"
              :current="current2"
              :onChange="onChange.bind(this, 'current2')"
            />
          </view>
        </view>
      </view>

      <!-- 带附加信息 -->
      <view class="panel">
        <view class="panel__title">带附加信息</view>
        <view class="panel__content">
          <view class="example-item">
            <AtSteps
              :items="items3"
              :current="current3"
              :onChange="onChange.bind(this, 'current3')"
            />
          </view>
        </view>
      </view>

      <!-- 自定义图标 -->
      <view class="panel">
        <view class="panel__title">自定义图标</view>
        <view class="panel__content">
          <view class="example-item">
            <AtSteps
              :items="items4"
              :current="current4"
              :onChange="onChange.bind(this, 'current4')"
            />
          </view>
        </view>
      </view>

      <!-- 状态步骤条 -->
      <view class="panel">
        <view class="panel__title">状态步骤条</view>
        <view class="panel__content">
          <view class="example-item">
            <AtSteps
              :items="items5"
              :current="current5"
              :onChange="onChange.bind(this, 'current5')"
            />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
const items1 = [{ title: '步骤一' }, { title: '步骤二' }]

const items2 = [{ title: '步骤一' }, { title: '步骤二' }, { title: '步骤三' }]

const items3 = [
  { title: '步骤一', desc: '这里是额外的信息，最多两行' },
  { title: '步骤二', desc: '这里是额外的信息，最多两行' },
  { title: '步骤三', desc: '这里是额外的信息，最多两行' },
]

const items4 = [
  {
    title: '步骤一',
    desc: '这里是额外的信息，最多两行',
    icon: {
      value: 'sound',
      activeColor: '#fff',
      inactiveColor: '#78A4FA',
      size: '14',
    },
  },
  {
    title: '步骤二',
    desc: '这里是额外的信息，最多两行',
    icon: {
      value: 'shopping-cart',
      activeColor: '#fff',
      inactiveColor: '#78A4FA',
      size: '14',
    },
  },
  {
    title: '步骤三',
    desc: '这里是额外的信息，最多两行',
    icon: {
      value: 'camera',
      activeColor: '#fff',
      inactiveColor: '#78A4FA',
      size: '14',
    },
  },
]

const items5 = [
  {
    title: '步骤一',
    desc: '这里是额外的信息，最多两行',
    status: 'success',
  },
  {
    title: '步骤二',
    desc: '这里是额外的信息，最多两行',
  },
  {
    title: '步骤三',
    desc: '这里是额外的信息，最多两行',
    status: 'error',
  },
]
export default {
  name: 'StepsPage',
  data() {
    return {
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      current5: 1,
      items1,
      items2,
      items3,
      items4,
      items5,
    }
  },
  methods: {
    onChange(stateName, current) {
      this[stateName] = current
    },
  },
}
</script>
