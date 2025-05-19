import { CommandGroup, CommandItem, CommandList, CommandInput } from './command'
import { Command as CommandPrimitive } from 'cmdk'
import { useState, useRef, useCallback, type KeyboardEvent } from 'react'
import { ChevronDown, AlertCircle, Check } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Skeleton } from './skeleton'
import Chip from '../chip'

export type Option = Record<'value' | 'label', string> & Record<string, string>

type AutoCompleteProps = {
  options: Option[]
  emptyMessage: string
  value?: Option | Option[]
  onValueChange?: (value: Option | Option[]) => void
  isLoading?: boolean
  disabled?: boolean
  placeholder?: string
  multiselect?: boolean
  error?: string
}

export const Combobox = ({
  options,
  placeholder,
  emptyMessage = 'No options found',
  value,
  onValueChange,
  disabled,
  isLoading = false,
  error,
  multiselect = false,
}: AutoCompleteProps) => {
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
      if (!input) {
        return
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true)
      }

      // This is not a default behaviour of the <input /> field
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
      }

      // Only blur in single select mode
      if (!multiselect) {
        // This is a hack to prevent the input from being focused after the user selects an option
        // We can call this hack: "The next tick"
        setTimeout(() => {
          inputRef?.current?.blur()
        }, 0)
      }
    },
    [onValueChange, multiselect, selectedItems]
  )

  // No additional handler needed for removing items as it's handled inline

  const handleChevronClick = useCallback(() => {
    if (disabled) return

    if (inputRef.current) {
      if (document.activeElement === inputRef.current) {
        inputRef.current.blur()
      } else {
        inputRef.current.focus()
      }
    }
  }, [disabled])

  return (
    <CommandPrimitive onKeyDown={handleKeyDown}>
      <div
        className={cn(
          'flex max-h-[36px] min-h-[36px] w-[320px] flex-nowrap items-center gap-1 rounded-full border border-border-primary bg-surface-primary px-2 py-[6px] focus-within:border-border-brand hover:bg-surface-secondary focus:border-border-brand',
          error && 'border-red-500 focus-within:border-red-500 focus:border-red-500', // Apply red border when there's an error
          disabled && 'bg-surface-tertiary hover:bg-surface-tertiary'
        )}
      >
        {multiselect && selectedItems.length > 0 && (
          <div className="flex flex-nowrap gap-1 overflow-hidden">
            {selectedItems.length <= 2 ? (
              // Show all items if 2 or fewer
              selectedItems.map((item) => (
                <Chip
                  key={item.value}
                  variant="default"
                  className="flex max-w-[200px] items-center gap-1 px-0.5"
                  dismissible
                  onDismiss={(e) => {
                    e.stopPropagation()
                    const newSelectedItems = selectedItems.filter((i) => i.value !== item.value)
                    setSelectedItems(newSelectedItems)
                    onValueChange?.(newSelectedItems)
                  }}
                >
                  <span className="truncate">{item.label}</span>
                </Chip>
              ))
            ) : (
              // Show first 2 items + count badge for the rest
              <>
                {selectedItems.slice(0, 2).map((item) => (
                  <Chip
                    dismissible
                    onDismiss={(e) => {
                      e.stopPropagation()
                      const newSelectedItems = selectedItems.filter((i) => i.value !== item.value)
                      setSelectedItems(newSelectedItems)
                      onValueChange?.(newSelectedItems)
                    }}
                    key={item.value}
                    variant="default"
                    className="flex max-w-[200px] items-center gap-1 px-0.5"
                  >
                    <span className="truncate">{item.label}</span>
                  </Chip>
                ))}
                <Chip variant="default" className="flex items-center px-1">
                  +{selectedItems.length - 2}
                </Chip>
              </>
            )}
          </div>
        )}
        <div
          className={cn(
            'flex flex-1 items-center',
            multiselect && selectedItems.length > 0 && 'ml-1 w-0 pr-2'
          )}
        >
          <CommandInput
            ref={inputRef}
            value={error ? error : inputValue}
            onValueChange={isLoading ? undefined : setInputValue}
            onBlur={handleBlur}
            onFocus={() => setOpen(true)}
            placeholder={multiselect && selectedItems.length > 0 ? '' : placeholder}
            disabled={disabled}
            className={cn(
              multiselect && selectedItems.length > 0 && 'w-[100px] min-w-[80px] flex-grow'
            )}
          />
          {error ? (
            <AlertCircle className="mb-[1px] h-5 w-5 flex-shrink-0 text-red-500" />
          ) : (
            <ChevronDown
              className={cn(
                'h-5 w-5 flex-shrink-0 stroke-[#7F92B9]',
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              )}
              onClick={handleChevronClick}
              aria-label={isOpen ? 'Close dropdown' : 'Open dropdown'}
              role="button"
            />
          )}
        </div>
      </div>

      {!disabled && (
        <div className="relative mt-1">
          <div
            className={cn(
              'absolute top-0 z-10 w-full rounded-xl border bg-white shadow-bg outline-none animate-in fade-in-0 zoom-in-95',
              isOpen ? 'block' : 'hidden'
            )}
          >
            <CommandList className="rounded-lg ring-1 ring-slate-200">
              {isLoading ? (
                <CommandPrimitive.Loading>
                  <div className="p-1">
                    {' '}
                    {options.map((option) => (
                      <div
                        key={option.value}
                        className="flex w-full items-center gap-2 rounded-sm px-2 py-0.5 text-sm"
                      >
                        <Skeleton
                          className="h-4"
                          style={{
                            width: `${Math.floor(Math.random() * 40) + 60}%`, // random width between 60% and 100%
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </CommandPrimitive.Loading>
              ) : null}
              {options.length > 0 && !isLoading ? (
                <CommandGroup>
                  {options.map((option) => {
                    const isSelected = multiselect
                      ? selectedItems.some((item) => item.value === option.value)
                      : selected?.value === option.value
                    return (
                      <CommandItem
                        key={option.value}
                        value={option.label}
                        onMouseDown={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                        }}
                        onSelect={() => handleSelectOption(option)}
                        className={cn(
                          'flex w-full items-center gap-2',
                          !isSelected ? 'pl-8' : null
                        )}
                      >
                        {isSelected ? <Check className="w-4" /> : null}
                        {option.label}
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              ) : null}
              {!isLoading ? (
                <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                  {emptyMessage}
                </CommandPrimitive.Empty>
              ) : null}
            </CommandList>
          </div>
        </div>
      )}
    </CommandPrimitive>
  )
}
