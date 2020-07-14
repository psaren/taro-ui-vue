<template>
  <view class='page'>
    <!-- S Header -->
    <DocsHeader title='Checkbox 复选框'></DocsHeader>
    <!-- E Header -->

    <!-- S Body -->
    <view class='doc-body'>
      <!-- 基础用法 -->
      <view class='panel'>
        <view class='panel__title'>基础用法</view>
        <view class='panel__content no-padding'>
          <view class='example-item'>
            <view class='checkbox-container'>
              <AtCheckbox
                :options="state.checkboxOption1"
                :selectedList="state.checkedList1"
                :onChange="handleChange"
              />
            </view>
          </view>
        </view>
      </view>

      <!-- 含描述信息 -->
      <view class='panel'>
        <view class='panel__title'>含描述信息</view>
        <view class='panel__content no-padding'>
          <view class='example-item'>
            <view class='checkbox-container'>
              <AtCheckbox
                :options="state.checkboxOption2"
                :selectedList="state.checkedList2"
                :onChange="handleChangeSnd"
              />
            </view>
          </view>
        </view>
      </view>

      <!-- 选项禁用 -->
      <view class='panel'>
        <view class='panel__title'>选项禁用</view>
        <view class='panel__content no-padding'>
          <view class='example-item'>
            <view class='checkbox-container'>
              <AtCheckbox
                :options="state.checkboxOption3"
                :selectedList="state.checkedList3"
                :onChange="handleChangeThd"
              />
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- E Body -->
  </view>
</template>

<script>
import setStateMixin from '../../../mixins/setStateMixin'
import './index.scss'
export default {
  name: 'CheckboxPage',
  mixins: [setStateMixin],
  data() {
    return {
      state: {
        checkedList1: ['list1'],
        checkedList2: ['list1'],
        checkedList3: ['list1', 'list4'],
        checkboxOption1: [
          { value: 'list1', label: 'iPhone X' },
          { value: 'list2', label: 'HUAWEI P20' },
          { value: 'list3', label: 'OPPO Find X' }
        ],
        checkboxOption2: [
          {
            value: 'list1',
            label: 'iPhone X',
            desc:
              '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
          },
          {
            value: 'list2',
            label: 'HUAWEI P20',
            desc:
              '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
          },
          {
            value: 'list3',
            label: 'OPPO Find X',
            desc:
              '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
          }
        ],
        checkboxOption3: [
          {
            value: 'list1',
            label: 'iPhone X',
            desc:
              '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
          },
          { value: 'list2', label: 'HUAWEI P20' },
          {
            value: 'list3',
            label: 'OPPO Find X',
            desc:
              '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
            disabled: true
          },
          {
            value: 'list4',
            label: 'vivo NEX',
            desc:
              '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
            disabled: true
          }
        ]
      }
    }
  },
  methods: {
    handleChange(value) {
      this.setState({
        checkedList1: value
      })
    },

    handleChangeSnd(value) {
      this.setState({
        checkedList2: value
      })
    },

    handleChangeThd(value) {
      this.setState({
        checkedList3: value
      })
    },
  },
}
</script>