import Taro from '@tarojs/taro'

export default {
  name: 'Index',
  data() {
    return {
      show: false,
      activeTag: false,
      SAOptions: [
        {
          text: '取消',
          style: {
            backgroundColor: '#6190E8',
          },
        },
        {
          text: '确认',
          style: {
            backgroundColor: '#FF4949',
          },
        },
      ],
      gridData: [
        {
          image:
            'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          value: '领取中心',
        },
        {
          image:
            'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
          value: '找折扣',
        },
        {
          image:
            'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
          value: '领会员',
        },
        {
          image:
            'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          value: '新品首发',
        },
        {
          image:
            'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          value: '领京豆',
        },
        {
          image:
            'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
          value: '手机馆',
        },
      ],
      accordionIcon: { value: 'chevron-down', color: 'red', size: '15' },
      openAccordion: false,
      tabIndex: 0,
      tabBarList: [
        { title: '待办事项', iconType: 'bullet-list', text: 'new' },
        { title: '拍照', iconType: 'camera' },
        { title: '文件夹', iconType: 'folder', text: '100', max: 99 },
      ],
      segmentedIndex: 0,
      segmentedList: ['标签页1', '标签页2', '标签页3'],
      currentTab: 0,
      tabList: [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }],
      list: [
        {
          title: 'A',
          key: 'A',
          items: [
            {
              name: '阿坝',
              // 此处可加其他业务字段
            },
            {
              name: '阿拉善',
            },
          ],
        },
        {
          title: 'B',
          key: 'B',
          items: [
            {
              name: '北京',
            },
            {
              name: '保定',
            },
          ],
        },
      ],
      inputVal: '',
      radioVal: '',
      radioOptions: [
        { label: '单选项一', value: 'option1', desc: '单选项描述' },
        { label: '单选项二', value: 'option2' },
        { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true },
      ],
      checkedList: ['list1'],
      checkboxOption: [
        {
          value: 'list1',
          label: 'iPhone X',
          desc:
            '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
        },
        {
          value: 'list2',
          label: 'HUAWEI P20',
        },
        {
          value: 'list3',
          label: 'OPPO Find X',
          desc:
            '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
          disabled: true,
        },
        {
          value: 'list4',
          label: 'vivo NEX',
          desc:
            '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
          disabled: true,
        },
      ],
      rateVal: 2,
      textareaVal: '',
      searchVal: '',
      imageFiles: [
        {
          url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
        },
        {
          url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg',
        },
        {
          type: 'btn',
        },
      ],
      rangeVal: [20, 60],
    }
  },
  methods: {
    changeShow() {
      this.show = !this.show
    },
    changeTagActive() {
      this.activeTag = !this.activeTag
    },
    onClick(e) {
      console.log(e)
    },
    showMessage(type) {
      Taro.atMessage({
        message: '消息通知',
        type: type,
      })
    },
    handleAccordionOpen(isOpen, e) {
      this.openAccordion = isOpen
    },
    onTabClick(i, e) {
      this.tabIndex = i
    },
    segmentedClick(i, e) {
      this.segmentedIndex = i
    },
    changeCurrentTab(val) {
      this.currentTab = val
    },
    clickIndex(e) {
      console.log(e)
    },
    inputChange(val) {
      this.inputVal = val
    },
    radioChange(val) {
      this.radioVal = val
    },
    checkboxChange(val) {
      this.checkedList = val
    },
    rateChange(val) {
      this.rateVal = val
    },
    textareaChange(val) {
      this.textareaVal = val
    },
    searchValChange(val) {
      this.searchVal = val
    },
    imageChange(val) {
      this.imageFiles = val
    },
    rangeChange(val) {
      this.rangeVal = val
    },
  },
}
