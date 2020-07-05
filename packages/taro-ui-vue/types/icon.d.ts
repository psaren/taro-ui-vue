
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent, { AtIconBaseProps } from './base'

export interface AtIconProps extends AtComponent, AtIconBaseProps {
  onClick?: CommonEventFunction
}

