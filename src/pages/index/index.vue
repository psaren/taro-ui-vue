<template>
  <view 
    class="index"
  >
    <FloatLayout
      title="这是个标题"
    >
      这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
      随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
    </FloatLayout>
    <Card
      note="小Tips"
      extra="额外信息"
      title="这是个标题"
      thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
    >
      <Icon
        slot="renderIcon"
        value="bell"
      />
      这也是内容区 可以随意定义功能
    </Card>
    <List>
      <ListItem
        title="标题文字"
        arrow="right"
        thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
      />
      <ListItem
        title="标题文字"
        extra-text="详细信息"
      />
      <ListItem
        title="禁用状态"
        disabled
        extra-text="详细信息"
      />
    </List>
    <Grid
      mode="square"
      :data="gridData"
    />
    <view class="at-row">
      <view class="at-col at-col-3">
        A
      </view>
      <view class="at-col at-col-6">
        B
      </view>
      <view class="at-col at-col-2">
        C
      </view>
      <view class="at-col at-col-1">
        D
      </view>
    </view>
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
    </card>
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
import { Grid, List, ListItem, Card, FloatLayout } from '../../components/index'

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
    Grid,
    List,
    ListItem,
    Card,
    FloatLayout,
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
      ],
      gridData: [
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      value: '领取中心'
    },
    {
      image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
      value: '找折扣'
    },
    {
      image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
      value: '领会员'
    },
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
      value: '新品首发'
    },
    {
      image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
      value: '领京豆'
    },
    {
      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
      value: '手机馆'
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
  /* text-align: center; */
  color: #2c3e50;
}
</style>
