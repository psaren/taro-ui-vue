<!--
 * @Author: pengyue
 * @Date: 2020-07-05 16:36:32
 * @LastEditTime: 2020-07-05 17:50:21
 * @LastEditors: pengyue
 * @Description: 
 * @FilePath: /taro-ui-vue/src/pages/basic/icon/index.vue
--> 
<template>
  <view>
    <DocsHeader title="ICON 图标" />
    <view class="doc-body">
      <view
        v-for="(item, index) in types"
        :key="index"
        class="panel"
      >
        <view class="panel__title">
          {{ item.name }}
        </view>
        <view class="panel__content">
          <view class="icon-list">
            <view
              v-for="(icon, childIndex) in icons[item.type]"
              :key="childIndex"
              class="icon-list__item"
            >
              <view class="icon-list__icon">
                <AtIcon
                  :value="icon"
                  :color="iconColor"
                  :size="iconSize"
                />
              </view>
              <view class="icon-list__name">
                {{ icon }}
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import './index.scss'
import icons from './icons'

export default {
	data() {
		return {
			iconSize: 30,
			icons: icons,
			iconColor: '#999',
			types: [
				{
					type:'main',
					name: "主要"
				},{
					type:'file',
					name: "文件"
				},{
					type:'text',
					name: "文本"
				},{
					type:'arrow',
					name: "箭头"
				},{
					type:'media',
					name: "媒体控制"
				},{
					type:'photo',
					name: "多媒体"
				},{
					type:'logo',
					name: "Logo"
				}
			]
		}
	}
}
</script>

<style>

</style>