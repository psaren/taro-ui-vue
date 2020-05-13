<template>
  <view 
    class="index"
  >
    <Progress :percent="80" />
    <ActionSheet>
      <ActionSheetItem>
        按钮一
      </ActionSheetItem>
      <ActionSheetItem>
        按钮二
      </ActionSheetItem>
    </ActionSheet>
    <Badge dot>
      <Icon
        class-name="at-icon at-icon-settings"
        size="30"
        color="#F00"
      />
    </Badge>
    <!-- <Button 
      loading 
      type="primary"
      :on-click="onClick"
    >
      hello
    </Button> -->
    <Fab>fab</Fab>
    <Avatar text="111" />
    <Curtain 
      :is-opened="show"
      :on-close="changeShow"
    >
      <image src="https://taro-ui.jd.com/h5/static/images/curtain.png" />
    </Curtain>
    <button @tap="changeShow">
      changeShow
    </button>
    <!-- <LoadMore status="loading" /> -->
    <Noticebar icon="volume-plus">
      这是 NoticeBar 通告栏
    </Noticebar>
    <Tag>标签</Tag>
    <Tag
      type="primary"
      circle
      :active="activeTag"
      :on-click="changeTagActive"
    >
      标签
    </Tag>
    <Tag size="small">
      标签
    </Tag>
    <Timeline 
      :items="[
        { title: '刷牙洗脸' }, 
        { title: '吃早餐', color: 'green' }, 
        { title: '上班', color: 'red' }, 
        { title: '睡觉', color: 'yellow' }
      ]"
    />
    <swiper
      class-name="test-h"
      indicator-color="#999"
      indicator-active-color="#333"
      vertical
      circular
      indicator-dots
      autoplay
    >
      <swiper-item>
        <view class-name="demo-text-1">
          1
        </view>
      </swiper-item>
      <swiper-item>
        <view class-name="demo-text-2">
          2
        </view>
      </swiper-item>
      <swiper-item>
        <view class-name="demo-text-3">
          3
        </view>
      </swiper-item>
    </swiper>
    <Divider
      content="没有更多了"
      font-color="#ed3f14"
      line-color="#ed3f14"
    />
    <Divider
      content="没有更多了"
      font-color="#ff9900"
      line-color="#ff9900"
    />
    <Divider
      content="没有更多了"
      font-color="#2d8cf0"
      line-color="#2d8cf0"
    />
  </view>
</template>

<script>
// import Button from '../../components/button/index.jsx'
import Badge from '../../components/badge/index'
import Icon from '../../components/icon/Icon.vue'
import Fab from '../../components/fab/Fab.jsx'
import Avatar from '../../components/avatar/index.jsx'
// import Countdown from '../../components/countdown/index.jsx'
import Curtain from '../../components/curtain/index.jsx'
// import LoadMore from '../../components/load-more/index.jsx'
import Noticebar from '../../components/noticebar/index.jsx'
import Tag from '../../components/tag/index.jsx'
import Timeline from '../../components/timeline/index.jsx'
import Divider from '../../components/divider/index.jsx'
import ActionSheet from '../../components/action-sheet/index.jsx'
import ActionSheetItem from '../../components/action-sheet/body/item/index.jsx'
import Progress from '../../components/progress/index.jsx'

export default {
  name: 'Index',
  components: {
    // Button,
    Icon,
    Fab,
    Avatar,
    Badge,
    // Countdown,
    Curtain,
    // LoadMore,
    Noticebar,
    Tag,
    Timeline,
    Divider,
    ActionSheet,
    ActionSheetItem,
    Progress,
  },
  data() {
    return {
      show: false,
      activeTag: false,
    }
  },
  methods: {
    changeShow () {
      this.show = !this.show
    },
    changeTagActive () {
      this.activeTag = !this.activeTag
    },
    onClick(e) {
      console.log(e)
    }
  },
}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
