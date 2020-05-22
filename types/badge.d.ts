
import AtComponent from './base'

export interface AtBadgeProps extends AtComponent {
  /**
   * 角标红点
   * @default false
   */
  dot?: boolean
  /**
   * 角标内容
   */
  value?: string | number
  /**
   * 角标最大值
   * @default 99
   */
  maxValue?: number
}
