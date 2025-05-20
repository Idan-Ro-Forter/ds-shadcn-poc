import { ReactNode } from 'react'
import { BadgeProps } from '../base/badge'

export interface ChipProps extends Omit<BadgeProps, 'onClick'> {
  onAction?: () => void
  selected?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  dismissible?: boolean
  onDismiss?: (e: React.MouseEvent) => void
  disabled?: boolean
}
