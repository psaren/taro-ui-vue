
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtFloatButtonProps extends AtComponent {
    size?: number

    icon?: string

    onClick?: CommonEventFunction

    onTouchStart?: CommonEventFunction

    onTouchEnd?: CommonEventFunction

    backgroundColor?: string

    touchedBackgroundColor?: string

    borderColor?: string
}
