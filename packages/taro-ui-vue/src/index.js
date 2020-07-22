import AtActionSheet from './components/action-sheet/index.vue'
import AtActionSheetItem from './components/action-sheet/components/item.vue'
import AtActivityIndicator from './components/activity-indicator/index.vue'
import AtAvatar from './components/avatar/index.vue'
import AtBadge from './components/badge/index.vue'
import AtButton from './components/button/index.vue'
import AtCard from './components/card/index.vue'
import AtCheckbox from './components/checkbox/index.vue'
import AtFloatLayout from './components/float-layout/index.vue'
import AtForm from './components/form/index.vue'
import AtGrid from './components/grid/index.vue'
import AtIcon from './components/icon/index.vue'
import AtInput from './components/input/index.vue'
import AtInputNumber from './components/input-number/index.vue'
import AtList from './components/list/index.vue'
import AtListItem from './components/list/item/index.vue'
import AtModal from './components/modal/index.vue'
import AtModalHeader from './components/modal/header/index.vue'
import AtModalContent from './components/modal/content/index.vue'
import AtModalAction from './components/modal/action/index.vue'
import AtNavBar from './components/nav-bar/index.vue'
import AtNoticebar from './components/noticebar/index.vue'
import AtPagination from './components/pagination/index.vue'
import AtProgress from './components/progress/index.vue'
import AtRadio from './components/radio/index.vue'
import AtRate from './components/rate/index.vue'
import AtSegmentedControl from './components/segmented-control/index.vue'
import AtSwitch from './components/switch/index.vue'
import AtTabBar from './components/tab-bar/index.vue'
import AtTabs from './components/tabs/index.vue'
import AtTabsPane from './components/tabs-pane/index.vue'
import AtTag from './components/tag/index.vue'
import AtTextarea from './components/textarea/index.vue'
import AtTimeline from './components/timeline/index.vue'
import AtToast from './components/toast/index.vue'
import AtAccordion from './components/accordion/index.vue'
import AtSlider from './components/slider/index.vue'
import AtSwipeAction from './components/swipe-action/index.vue'
import AtSearchBar from './components/search-bar/index.vue'
import AtLoadMore from './components/load-more/index.vue'
import AtDivider from './components/divider/index.vue'
import AtCountdown from './components/countdown/index.vue'
import AtSteps from './components/steps/index.vue'
import AtCurtain from './components/curtain/index.vue'
import AtMessage from './components/message/index.vue'
import AtImagePicker from './components/image-picker/index.vue'
import AtRange from './components/range/index.vue'
import AtIndexes from './components/indexes/index.vue'
import AtCalendar from './components/calendar/index'
import AtFab from './components/fab/index.vue'
import AtDrawer from './components/drawer/index.vue'

/* 私有的组件  */
import AtLoading from './components/loading/index.vue'

export {
  AtActionSheet,
  AtActionSheetItem,
  AtActivityIndicator,
  AtAvatar,
  AtBadge,
  AtButton,
  AtCard,
  AtCheckbox,
  AtFloatLayout,
  AtForm,
  AtGrid,
  AtIcon,
  AtInput,
  AtInputNumber,
  AtList,
  AtListItem,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
  AtNavBar,
  AtNoticebar,
  AtPagination,
  AtProgress,
  AtRadio,
  AtRate,
  AtSegmentedControl,
  AtSwitch,
  AtTabBar,
  AtTabs,
  AtTabsPane,
  AtTag,
  AtTextarea,
  AtTimeline,
  AtToast,
  AtAccordion,
  AtSlider,
  AtSwipeAction,
  AtSearchBar,
  AtLoadMore,
  AtDivider,
  AtCountdown,
  AtSteps,
  AtCurtain,
  AtMessage,
  AtImagePicker,
  AtRange,
  AtIndexes,
  AtCalendar,
  AtFab,
  AtLoading,
  AtDrawer,
}

const components = [
  AtActionSheet,
  AtActionSheetItem,
  AtActivityIndicator,
  AtAvatar,
  AtBadge,
  AtButton,
  AtCard,
  AtCheckbox,
  AtFloatLayout,
  AtForm,
  AtGrid,
  AtIcon,
  AtInput,
  AtInputNumber,
  AtList,
  AtListItem,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
  AtNavBar,
  AtNoticebar,
  AtPagination,
  AtProgress,
  AtRadio,
  AtRate,
  AtSegmentedControl,
  AtSwitch,
  AtTabBar,
  AtTabs,
  AtTabsPane,
  AtTag,
  AtTextarea,
  AtTimeline,
  AtToast,
  AtAccordion,
  AtSlider,
  AtSwipeAction,
  AtSearchBar,
  AtLoadMore,
  AtDivider,
  AtCountdown,
  AtSteps,
  AtCurtain,
  AtMessage,
  AtImagePicker,
  AtRange,
  AtIndexes,
  AtCalendar,
  AtFab,
  AtLoading,
  AtDrawer,
]

const install = function (Vue) {
  components.forEach((comp) => {
    if (comp.extendOptions) {
      // 压缩后 vue-class-component 组件的 options.name 会改变需要找回正确的组件名
      let options = comp.options || {}
      const name = comp.extendOptions.name
      // 压缩后 vue-class-component 组件的 options.name 会是小写字母开头的
      if (/^[a-z]/.test(name)) {
        options.name = comp.options ? comp.options.components[name].superOptions.name : name
      }
      Vue.component(options.name, options)
    } else {
      Vue.component(comp.name, comp)
    }
  })
}

export default install
