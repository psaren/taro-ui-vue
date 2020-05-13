<template>
  <view 
    class="index"
  >
    <view style="height:100vh">
      <AtIndexes
        :list="list"
        :on-click="clickIndex"
      >
        <view>自定义内容</view>
      </AtIndexes>
    </view>
    <AtPagination 
      :total="50" 
      :page-size="10"
      :current="1"
    />
    <SegmentedControl
      :on-click="segmentedClick"
      selected-color="#FF4949"
      font-size="30"
      :current="segmentedIndex"
      :values="segmentedList"
    />
    <TabBar
      :tab-list="tabBarList"
      :on-click="onTabClick"
      :current="tabIndex"
    />
    <NavBar
      :on-click-rg-icon-st="onClick"
      :on-click-rg-icon-nd="onClick"
      :on-click-left-icon="onClick"
      color="#000"
      title="NavBar 导航栏示例"
      left-text="返回"
      right-first-icon-type="bullet-list"
      right-second-icon-type="user"
    />
    <Accordion
      title="标题三"
      :icon="accordionIcon"
      :open="openAccordion"
      :on-click="handleAccordionOpen"
    >
      <List :has-border="false">
        <ListItem
          title="标题文字"
          arrow="right"
          thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
        />
        <ListItem
          title="标题文字"
          note="描述信息"
          arrow="right"
          thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
        />
        <ListItem
          title="标题文字"
          note="描述信息"
          extra-text="详细信息"
          arrow="right"
          thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
        />
      </List>
    </Accordion>
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
    <AtTabs
      :current="currentTab"
      :tab-list="tabList"
      :on-click="changeCurrentTab"
      style="height: 200px"
    >
      <AtTabsPane
        :current="currentTab"
        :index="0"
      >
        <view style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
          标签页一的内容
        </view>
      </AtTabsPane>
      <AtTabsPane
        :current="currentTab"
        :index="1"
      >
        <view style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
          标签页二的内容
        </view>
      </AtTabsPane>
      <AtTabsPane
        :current="currentTab"
        :index="2"
      >
        <view style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
          标签页三的内容
        </view>
      </AtTabsPane>
    </AtTabs>
    </atpagination>
  </view>
</template>

<script>
  import Index from './indexMixins'
  export default Index
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
