export type Option = Record<'value' | 'label', string> & Record<string, string>

export type ComboboxProps = {
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
