<template>
  <view class="page flex-page">
    <DocsHeader title="Flex 弹性布局" />

    <view class="doc-body">
      <!-- 基本案例 -->
      <view class="panel">
        <view class="panel__title">基本案例</view>
        <view class="panel__content">
          <view class="example-item">
            <view class="at-row">
              <view class="at-col">A</view>
              <view class="at-col">B</view>
              <view class="at-col">C</view>
            </view>
          </view>
        </view>
      </view>

      <!-- 定义长度 -->
      <view class="panel">
        <view class="panel__title">定义长度</view>
        <view class="panel__content">
          <view class="example-item">
            <view class="at-row">
              <view class="at-col at-col-3">A</view>
              <view class="at-col at-col-6">B</view>
              <view class="at-col at-col-2">C</view>
              <view class="at-col at-col-1">D</view>
            </view>
          </view>
        </view>
      </view>

      <!-- 定义偏移 -->
      <view class="panel">
        <view class="panel__title">定义偏移</view>
        <view class="panel__content">
          <view class="example-item">
            <view class="at-row">
              <view class="at-col at-col__offset-2">A</view>
              <view class="at-col at-col__offset-3">B</view>
              <view class="at-col">C</view>
            </view>
          </view>
        </view>
      </view>

      <!-- 超出换行 -->
      <view class="panel">
        <view class="panel__title">超出换行</view>
        <view class="panel__content">
          <view class="example-item">
            <view class="at-row at-row--wrap">
              <view class="at-col at-col-4">A</view>
              <view class="at-col at-col-4">B</view>
              <view class="at-col at-col-4">C</view>
              <view class="at-col at-col-4">D</view>
              <view class="at-col at-col-4">E</view>
            </view>
          </view>
        </view>
      </view>

      <!-- 宽度根据内容撑开 -->
      <view class="panel">
        <view class="panel__title">宽度根据内容撑开</view>
        <view class="panel__content">
          <view class="example-item">
            <view class="at-row">
              <view class="at-col at-col-1 at-col--auto">
                被内容撑开
              </view>
              <view class="at-col">B</view>
            </view>
          </view>
        </view>
      </view>

      <!-- 内容自动换行 -->
      <view class="panel">
        <view class="panel__title">内容自动换行</view>
        <view class="panel__content">
          <view class="example-item">
            <view class="at-row">
              <view class="at-col at-col-1 at-col--wrap">
                内容自动换行
              </view>
              <view class="at-col">B</view>
            </view>
          </view>
        </view>
      </view>

      <view class="panel">
        <view class="panel__title">侧轴方向的对齐方式</view>
        <view class="panel__content">
          <view class="example-item">
            <view class="at-row">
              <view style="height: 100px;" class="at-col">
                A
              </view>
              <view class="at-col">默认对齐方式 -- stretch</view>
            </view>
          </view>
          <view class="example-item">
            <view class="at-row at-row__align--start">
              <view style="height: 100px;" class="at-col">
                B
              </view>
              <view class="at-col">顶部对齐 -- start</view>
            </view>
          </view>
          <view class="example-item">
            <view class="at-row at-row__align--center">
              <view style="height: 100px;" class="at-col">
                C
              </view>
              <view class="at-col">居中对齐 -- center</view>
            </view>
          </view>
          <view class="example-item">
            <view class="at-row at-row__align--end">
              <view style="height: 100px;" class="at-col">
                D
              </view>
              <view class="at-col">底部对齐 -- end</view>
            </view>
          </view>
        </view>
      </view>

      <view class="panel">
        <view class="panel__title">主轴方向的排列方式</view>
        <view class="panel__content">
          <view class="example-item">
            <view class="at-row">
              <view class="at-col at-col-5">默认</view>
              <view class="at-col at-col-5">Start</view>
            </view>
          </view>
          <view class="example-item">
            <view class="at-row at-row__justify--end">
              <view class="at-col at-col-5">底部排列</view>
              <view class="at-col at-col-5">End</view>
            </view>
          </view>
          <view class="example-item">
            <view class="at-row at-row__justify--center">
              <view class="at-col at-col-5">居中排列</view>
              <view class="at-col at-col-5">Center</view>
            </view>
          </view>
          <view class="example-item">
            <view class="at-row at-row__justify--between">
              <view class="at-col at-col-5">左右排列</view>
              <view class="at-col at-col-5">Between</view>
            </view>
          </view>
          <view class="example-item">
            <view class="at-row at-row__justify--around">
              <view class="at-col at-col-5">平均排列</view>
              <view class="at-col at-col-5">Around</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import './index.scss'
export default {
  name: 'FlexPage',
}
</script>
