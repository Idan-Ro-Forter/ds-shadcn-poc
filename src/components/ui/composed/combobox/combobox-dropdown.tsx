import { CommandGroup, CommandItem, CommandList } from '../../base/command'
import { Command as CommandPrimitive } from 'cmdk'
import { Skeleton } from '../../base/skeleton'
import { cn } from '../../../../lib/utils'
import { Check } from 'lucide-react'
import { Option } from './types'

type ComboboxDropdownProps = {
  isOpen: boolean
  options: Option[]
  isLoading?: boolean
  emptyMessage: string
  multiselect?: boolean
  selectedItems: Option[]
  selected: Option | null
  handleSelectOption: (option: Option) => void
}

export const ComboboxDropdown = ({
  isOpen,
  options,
  isLoading = false,
  emptyMessage,
  multiselect = false,
  selectedItems,
  selected,
  handleSelectOption,
}: ComboboxDropdownProps) => {
  return (
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
                    className={cn(' w-full items-center pl-1.5', isSelected && 'pl-1')}
                  >
                    {isSelected ? <Check className="px-0" /> : null}
                    {option.label}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          ) : null}
          {!isLoading ? (
            <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 font-poppins text-sm text-text-tertiary">
              {emptyMessage}
            </CommandPrimitive.Empty>
          ) : null}
        </CommandList>
      </div>
    </div>
  )
}
