import { FC, useState, ReactNode } from 'react'
import { Badge, BadgeProps } from '../base/badge'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ChipProps extends Omit<BadgeProps, 'onClick'> {
  onAction?: () => void
  selected?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  dismissible?: boolean
  onDismiss?: (e: React.MouseEvent) => void
  disabled?: boolean
}

const Chip: FC<ChipProps> = ({
  children,
  selected = false,
  onAction,
  leftIcon,
  rightIcon,
  dismissible = false,
  onDismiss,
  disabled = false,
  className,
  ...props
}) => {
  const [isSelected, setIsSelected] = useState(selected)
  const [visible, setVisible] = useState(true)

  const handleClick = () => {
    if (onAction && !disabled) {
      setIsSelected(!isSelected)
      onAction?.()
    }
  }

  const handleDismiss = (e: React.MouseEvent) => {
    if (disabled) return

    e.stopPropagation()
    setVisible(false)
    if (onDismiss) {
      onDismiss(e)
    }
  }

  if (!visible) {
    return null
  }

  return (
    <Badge
      className={cn(
        {
          'border border-border-brand': isSelected && !disabled,
          'cursor-pointer': onAction && !disabled,
          'cursor-not-allowed opacity-50': disabled,
        },
        className
      )}
      onClick={!disabled && onAction ? handleClick : undefined}
      data-selected={isSelected}
      data-disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="inline-flex">{leftIcon}</span>}
      {children}
      {dismissible && (
        <span
          className={cn('ml-1 inline-flex  rounded-full p-0.5', {
            'cursor-pointer hover:bg-black/10': !disabled,
          })}
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
