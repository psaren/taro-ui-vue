<!--
 * @Author: pengyue
 * @Date: 2020-07-05 16:36:32
 * @LastEditTime: 2020-07-11 14:59:18
 * @LastEditors: pengyue
 * @Description: 
 * @FilePath: /taro-ui-vue/packages/taro-ui-vue-demo/src/pages/basic/typo/index.vue
--> 
<template>
  <view>
    <DocsHeader title="Typography 字体" />
    <view class="doc-body">
      <view class="panel">
        <view class="panel__title">
          示例
        </view>
        <view class="panel__content">
          <view class="table-typo">
            <view class="table-typo__head">
              <view class="thead">
                类型
              </view>
              <view class="thead">
                行高
              </view>
              <view class="thead">
                用途
              </view>
            </view>
            <view class="table-typo__body">
              <view class="table-typo__line">
                <view class="col h0">
                  H0，40PX
                </view>
                <view class="col">
                  60PX
                </view>
                <view class="col">
                  仅用于数字
                </view>
              </view>
              <view class="table-typo__line">
                <view class="col h1">
                  H1，36PX
                </view>
                <view class="col">
                  54PX
                </view>
                <view class="col">
                  大模块标题
                </view>
              </view>
              <view class="table-typo__line">
                <view class="col h2">
                  H2，32PX
                </view>
                <view class="col">
                  48PX
                </view>
                <view class="col">
                  常规标题
                </view>
              </view>
              <view class="table-typo__line">
                <view class="col h3">
                  H3，28PX
                </view>
                <view class="col">
                  42PX
                </view>
                <view class="col">
                  正文
                </view>
              </view>
              <view class="table-typo__line">
                <view class="col h4">
                  H4，24PX
                </view>
                <view class="col">
                  36PX
                </view>
                <view class="col">
                  辅助信息、注释
                </view>
              </view>
              <view class="table-typo__line">
                <view class="col h5">
                  H5，20PX
                </view>
                <view class="col">
                  30PX
                </view>
                <view class="col">
                  标签
                </view>
              </view>
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
	data() {
		return {}
	}
}
</script>
