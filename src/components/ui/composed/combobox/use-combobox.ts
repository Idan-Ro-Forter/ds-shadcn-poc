import { useCallback, useRef, useState, KeyboardEvent } from 'react'
import { Option } from './types'

interface UseComboboxProps {
  options: Option[]
  value?: Option | Option[]
  onValueChange?: (value: Option | Option[]) => void
  multiselect?: boolean
}

export const useCombobox = ({
  options,
  value,
  onValueChange,
  multiselect = false,
}: UseComboboxProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isOpen, setOpen] = useState(false)

  const [selectedItems, setSelectedItems] = useState<Option[]>(
    multiselect ? (Array.isArray(value) ? value : value ? [value as Option] : []) : []
  )

  const [selected, setSelected] = useState<Option | null>(
    !multiselect && value && !Array.isArray(value) ? value : null
  )

  const [inputValue, setInputValue] = useState<string>(
    !multiselect && value && !Array.isArray(value) ? value.label : ''
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (!input) return

      // Keep the options displayed when the user is typing
      if (!isOpen) setOpen(true)

      // Handle Enter key
      if (event.key === 'Enter' && input.value !== '') {
        const optionToSelect = options.find((option) => option.label === input.value)
        if (optionToSelect) {
          if (multiselect) {
            const newSelectedItems = selectedItems.find(
              (item) => item.value === optionToSelect.value
            )
              ? selectedItems.filter((item) => item.value !== optionToSelect.value)
              : [...selectedItems, optionToSelect]

            setSelectedItems(newSelectedItems)
            onValueChange?.(newSelectedItems)
            setInputValue('')
          } else {
            setSelected(optionToSelect)
            onValueChange?.(optionToSelect)
          }
        }
      }

      if (event.key === 'Escape') {
        input.blur()
      }
    },
    [isOpen, options, onValueChange, multiselect, selectedItems]
  )

  const handleBlur = useCallback(() => {
    setOpen(false)
    if (!multiselect) {
      setInputValue(selected?.label || '')
    } else {
      setInputValue('')
    }
  }, [selected, multiselect])

  const handleSelectOption = useCallback(
    (selectedOption: Option) => {
      if (multiselect) {
        const isSelected = selectedItems.some((item) => item.value === selectedOption.value)
        const newSelectedItems = isSelected
          ? selectedItems.filter((item) => item.value !== selectedOption.value)
          : [...selectedItems, selectedOption]

        setSelectedItems(newSelectedItems)
        onValueChange?.(newSelectedItems)
        setInputValue('')
      } else {
        setInputValue(selectedOption.label)
        setSelected(selectedOption)
        onValueChange?.(selectedOption)

        // Only blur in single select mode
        setTimeout(() => {
          inputRef?.current?.blur()
        }, 0)
      }
    },
    [onValueChange, multiselect, selectedItems]
  )

  const handleChevronClick = useCallback(() => {
    if (inputRef.current) {
      if (document.activeElement === inputRef.current) {
        inputRef.current.blur()
      } else {
        inputRef.current.focus()
      }
    }
  }, [])

  const handleItemRemove = useCallback(
    (itemValue: string) => {
      const newSelectedItems = selectedItems.filter((item) => item.value !== itemValue)
      setSelectedItems(newSelectedItems)
      onValueChange?.(newSelectedItems)
    },
    [selectedItems, onValueChange]
  )

  return {
    inputRef,
    isOpen,
    setOpen,
    selected,
    selectedItems,
    inputValue,
    setInputValue,
    handleKeyDown,
    handleBlur,
    handleSelectOption,
    handleChevronClick,
    handleItemRemove,
  }
}
