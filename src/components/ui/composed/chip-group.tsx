import { FC, ReactNode, useState } from 'react'
import Chip from './chip'
import { cn } from '@/lib/utils'

export interface ChipOption {
  id: string
  label: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  disabled?: boolean
  value?: string
}

export interface ChipGroupProps {
  options: ChipOption[]
  defaultSelected?: string
  onChange?: (selectedId: string) => void
  className?: string
  chipClassName?: string
  disabled?: boolean
  variant?: 'default' | 'active-brand' | 'active-dev' | 'success' | 'warning' | 'danger'
}

const ChipGroup: FC<ChipGroupProps> = ({
  options,
  defaultSelected,
  onChange,
  className,
  chipClassName,
  disabled = false,
  variant = 'default',
}) => {
  const [selectedId, setSelectedId] = useState<string | undefined>(defaultSelected)

  const handleChipClick = (id: string) => {
    if (disabled) return
    if (selectedId === id) return
    console.log('id :>> ', id)
    setSelectedId(id)
    onChange?.(id)
  }

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {options.map((option) => (
        <Chip
          key={option.id}
          selected={selectedId === option.id}
          onAction={() => handleChipClick(option.id)}
          leftIcon={option.leftIcon}
          rightIcon={option.rightIcon}
          disabled={disabled || option.disabled}
          className={chipClassName}
          variant={variant}
        >
          {option.label}
        </Chip>
      ))}
    </div>
  )
}

export default ChipGroup
