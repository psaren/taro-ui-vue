<template>
  <view class="page">
    <view class="panel-header">
      <view class="panel-header__icon">
        <image
          v-if="icon"
          :src="icon"
          class="img"
          mode="widthFix"
        />
        <text
          v-else
          class="at-icon at-icon-list"
        />
      </view>
      <view class="panel-header__title">
        {{ title }}
      </view>
    </view>
    <view class="panel-body">
      <view class="component-list">
        <view
          v-for="(item, index) in itemList"
          :key="index"
          class="component-list__item"
          @tap="gotoComponent(item.id, currentId)"
        >
          <text class="name">
            {{ `${item.id} ${item.name}` }}
          </text>
          <text class="at-icon at-icon-chevron-right" />
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import './index.scss'
import { list, panelNames } from './listConfig.ts'

export default {
	data() {
		return {
			list,
			currentId: '',
			title: '',
			icon: '',
			itemList: []
		}
	},
	mounted() {
		const { id } = this.$taro.getCurrentInstance().router.params
		const currentId = id
		this.itemList = list[currentId] || []
		this.title = (panelNames[currentId] && panelNames[currentId].name) || ''
		this.icon = (panelNames[currentId] && panelNames[currentId].icon) || ''
		this.currentId = currentId
	},
	methods: {
		gotoComponent(id, parent) {
			this.$taro.navigateTo({
				url: `/pages/${parent.toLowerCase()}/${id.toLowerCase()}/index`
			})
		}
	}
}
</script>
