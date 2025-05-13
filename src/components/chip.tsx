import { FC, useState, ReactNode } from 'react'
import { Badge, BadgeProps } from './ui/badge'
import { cn } from '@/lib/utils'

interface ChipProps extends Omit<BadgeProps, 'onClick'> {
  onAction?: () => void
  selected?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const Chip: FC<ChipProps> = ({
  children,
  selected = false,
  onAction,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const [isSelected, setIsSelected] = useState(selected)

  const handleClick = () => {
    if (onAction) {
      setIsSelected(!isSelected)
      onAction?.()
    }
  }

  return (
    <Badge
      className={cn({ 'border-border-brand border': isSelected, 'cursor-pointer': onAction })}
      onClick={onAction ? handleClick : undefined}
      data-selected={isSelected}
      {...props}
    >
      {leftIcon && <span className="inline-flex">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="inline-flex">{rightIcon}</span>}
    </Badge>
  )
}

export default Chip
