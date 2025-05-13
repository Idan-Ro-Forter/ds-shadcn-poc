import { FC, useState } from 'react'
import { Badge, BadgeProps } from './ui/badge'
import { cn } from '@/lib/utils'

interface ChipProps extends Omit<BadgeProps, 'onClick'> {
  onAction?: () => void
  selected?: boolean
}

const Chip: FC<ChipProps> = ({ children, selected = false, onAction, ...props }) => {
  const [isSelected, setIsSelected] = useState(selected)

  const handleClick = () => {
    if (onAction) {
      setIsSelected(!isSelected)
      onAction?.()
    }
  }

  return (
    <Badge
      className={cn({ 'border-border-brand border': isSelected })}
      onClick={onAction ? handleClick : undefined}
      data-selected={isSelected}
      {...props}
    >
      {children}
    </Badge>
  )
}

export default Chip
