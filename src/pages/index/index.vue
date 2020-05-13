<template>
  <view 
    class="index"
  >
    <Message />
    <button @tap="showMessage">
      show Message
    </button>
    <button @tap="showMessage('success')">
      show success Message
    </button>
    <SwipeAction
      :options="SAOptions"
    >
      <view class-name="normal">
        AtSwipeAction 一般使用场景
      </view>
    </SwipeAction>
    <Toast
      is-opened
      text="{text}"
      icon="clock"
    />
    <Modal>
      <ModalHeader>标题</ModalHeader>
      <ModalContent>
        这里是正文内容，欢迎加入京东凹凸实验室
        这里是正文内容，欢迎加入京东凹凸实验室
        这里是正文内容，欢迎加入京东凹凸实验室
      </ModalContent>
      <ModalAction> <button>取消</button> <button>确定</button> </ModalAction>
    </Modal>
    <Modal
      title="标题"
      cancel-text="取消"
      confirm-text="确认"
      :on-close="onClick"
      :on-cancel="onClick"
      :on-confirm="onClick"
      content="欢迎加入京东凹凸实验室\n\r欢迎加入京东凹凸实验室"
    />
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
import Taro from '@tarojs/taro'
// import Button from '../../components/button/index.jsx'
import Badge from '../../components/badge/index'
import Icon from '../../components/icon/index'
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
import Modal from '../../components/modal/index.jsx'
import ModalHeader from '../../components/modal/header/index.jsx'
import ModalContent from '../../components/modal/content/index.jsx'
import ModalAction  from '../../components/modal/action/index.jsx'
import Toast from '../../components/toast/index.jsx'
import SwipeAction from '../../components/swipe-action/index.jsx'
import Message from '../../components/message/index.jsx'

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
    Modal,
    ModalHeader,
    ModalContent,
    ModalAction,
    Toast,
    SwipeAction,
    Message,
  },
  data() {
    return {
      show: false,
      activeTag: false,
      SAOptions: [
        {
          text: '取消',
          style: {
            backgroundColor: '#6190E8'
          }
        },
        {
          text: '确认',
          style: {
            backgroundColor: '#FF4949'
          }
        }
      ]
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
    },
    showMessage(type) {
      Taro.atMessage({
        'message': '消息通知',
        'type': type,
      })
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
