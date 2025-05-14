import { FC, useState, ReactNode } from 'react'
import { Badge, BadgeProps } from './ui/badge'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ChipProps extends Omit<BadgeProps, 'onClick'> {
  onAction?: () => void
  selected?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  dismissible?: boolean
  onDismiss?: () => void
}

const Chip: FC<ChipProps> = ({
  children,
  selected = false,
  onAction,
  leftIcon,
  rightIcon,
  dismissible = false,
  onDismiss,
  ...props
}) => {
  const [isSelected, setIsSelected] = useState(selected)
  const [visible, setVisible] = useState(true)

  const handleClick = () => {
    if (onAction) {
      setIsSelected(!isSelected)
      onAction?.()
    }
  }

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation()
    setVisible(false)
    if (onDismiss) {
      onDismiss()
    }
  }

  if (!visible) {
    return null
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
      {dismissible && (
        <span
          className="ml-1 inline-flex cursor-pointer rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10"
          onClick={handleDismiss}
          aria-label="Dismiss"
        >
          <X size={14} />
        </span>
      )}
      {!dismissible && rightIcon && <span className="inline-flex">{rightIcon}</span>}
    </Badge>
  )
}

export default Chip
