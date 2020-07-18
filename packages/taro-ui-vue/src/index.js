import AtActionSheet from './components/action-sheet'
import AtActionSheetItem from './components/action-sheet/body/item'
import AtActivityIndicator from './components/activity-indicator'
import AtAvatar from './components/avatar'
import AtBadge from './components/badge'
import AtButton from './components/button/index'
import AtCard from './components/card/index.vue'
import AtCheckbox from './components/checkbox/index.vue'
import AtFloatLayout from './components/float-layout/index.vue'
import AtForm from './components/form/index.vue'
import AtGrid from './components/grid/index.vue'
import AtIcon from './components/icon/index'
import AtInput from './components/input/index.vue'
import AtInputNumber from './components/input-number/index.vue'
import AtList from './components/list/index.vue'
import AtListItem from './components/list/item/index.vue'
import AtModal from './components/modal/index.vue'
import AtModalHeader from './components/modal/header/index.vue'
import AtModalContent from './components/modal/content/index.vue'
import AtModalAction from './components/modal/action/index.vue'
import AtNavBar from './components/nav-bar/index.vue'
import AtNoticebar from './components/noticebar'
import AtPagination from './components/pagination/index.vue'
import AtProgress from './components/progress'
import AtRadio from './components/radio/index.vue'
import AtRate from './components/rate/index.vue'
import AtSegmentedControl from './components/segmented-control/index.vue'
import AtSwitch from './components/switch/index.vue'
import AtTabBar from './components/tab-bar/index.vue'
import AtTabs from './components/tabs/index.vue'
import AtTabsPane from './components/tabs-pane'
import AtTag from './components/tag/index.vue'
import AtTextarea from './components/textarea/index.vue'
import AtTimeline from './components/timeline'
import AtToast from './components/toast/index.vue'
import AtAccordion from './components/accordion'
import AtSlider from './components/slider/index.vue'
import AtSwipeAction from './components/swipe-action/index.vue'
import AtSearchBar from './components/search-bar/index.vue'
import AtLoadMore from './components/load-more'
import AtDivider from './components/divider'
import AtCountdown from './components/countdown'
import AtSteps from './components/steps'
import AtCurtain from './components/curtain'
import AtMessage from './components/message'
import AtImagePicker from './components/image-picker/index.vue'
import AtRange from './components/range/index.vue'
import AtIndexes from './components/indexes'
import AtCalendar from './components/calendar'
import AtFab from './components/fab'
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
