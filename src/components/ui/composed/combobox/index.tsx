import { Command as CommandPrimitive } from 'cmdk'
import { SelectedItems } from './selected-items'
import { ComboboxInput } from './combobox-input'
import { ComboboxDropdown } from './combobox-dropdown'
import { useCombobox } from './use-combobox'
import { cn } from '../../../../lib/utils'
import { ComboboxProps } from './types'

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
}: ComboboxProps) => {
  const {
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
  } = useCombobox({
    options,
    value,
    onValueChange,
    multiselect,
  })

  return (
    <CommandPrimitive onKeyDown={handleKeyDown}>
      <div
        className={cn(
          'flex max-h-[36px] min-h-[36px] w-[320px] flex-nowrap items-center gap-1 rounded-full border border-border-primary bg-surface-primary px-2 py-[6px] focus-within:border-border-brand hover:bg-surface-secondary focus:border-border-brand',
          error && 'border-red-500 focus-within:border-red-500 focus:border-red-500',
          disabled && 'bg-surface-tertiary hover:bg-surface-tertiary'
        )}
      >
        {multiselect && (
          <SelectedItems selectedItems={selectedItems} onItemRemove={handleItemRemove} />
        )}

        <ComboboxInput
          inputRef={inputRef}
          inputValue={inputValue}
          setInputValue={setInputValue}
          error={error}
          isLoading={isLoading}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setOpen(true)}
          onBlur={handleBlur}
          handleChevronClick={handleChevronClick}
          multiselect={multiselect}
          selectedItems={selectedItems}
          isOpen={isOpen}
        />
      </div>

      {!disabled && (
        <ComboboxDropdown
          isOpen={isOpen}
          options={options}
          isLoading={isLoading}
          emptyMessage={emptyMessage}
          multiselect={multiselect}
          selectedItems={selectedItems}
          selected={selected}
          handleSelectOption={handleSelectOption}
        />
      )}
    </CommandPrimitive>
  )
}

export type { Option } from './types'
