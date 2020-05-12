import ActionSheet from '../../components/action-sheet/index'
import ActionSheetItem from '../../components/action-sheet/body/item/index'
export default {
  name: 'Demo',
  components: {
    ActionSheet,
    ActionSheetItem,
  },
  render() {
    return (
      <view>
        index page!
        <ActionSheet isOpened>
          <ActionSheetItem>按钮一</ActionSheetItem>
          <ActionSheetItem>按钮二</ActionSheetItem>
        </ActionSheet>
      </view>
    )
  },
}
