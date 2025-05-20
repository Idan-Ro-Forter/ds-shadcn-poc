import { ChevronDown, AlertCircle } from 'lucide-react'
import { MutableRefObject } from 'react'
import { CommandInput } from '../../base/command'
import { cn } from '../../../../lib/utils'
import { Option } from './types'

type ComboboxInputProps = {
  inputRef: MutableRefObject<HTMLInputElement | null>
  inputValue: string
  setInputValue: (value: string) => void
  error?: string
  isLoading?: boolean
  placeholder?: string
  disabled?: boolean
  onFocus: () => void
  onBlur: () => void
  handleChevronClick: () => void
  multiselect?: boolean
  selectedItems?: Option[]
  isOpen: boolean
}

export const ComboboxInput = ({
  inputRef,
  inputValue,
  setInputValue,
  error,
  // isLoading,
  placeholder,
  disabled,
  onFocus,
  onBlur,
  handleChevronClick,
  multiselect = false,
  selectedItems = [],
  isOpen,
}: ComboboxInputProps) => {
  return (
    <div
      className={cn(
        'flex flex-1 items-center',
        multiselect && selectedItems.length > 0 && 'ml-1 w-0 pr-2'
      )}
    >
      <CommandInput
        ref={inputRef}
        value={error ? error : inputValue}
        onValueChange={setInputValue}
        onBlur={onBlur}
        onFocus={onFocus}
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
  )
}
