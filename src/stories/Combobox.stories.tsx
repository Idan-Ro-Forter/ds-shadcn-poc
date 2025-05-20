import type { Meta, StoryObj } from '@storybook/react'
import { Combobox } from '../components/ui/composed/combobox'

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

const ComboboxOptions = [
  { value: 'adyen', label: 'Adyen' },
  { value: 'affirm', label: 'Affirm' },
  { value: 'alipay', label: 'Alipay' },
  { value: 'amazon', label: 'Amazon Pay' },
  { value: 'apple', label: 'Apple Pay' },
  { value: 'authorizenet', label: 'Authorize.Net' },
  { value: 'braintree', label: 'Braintree' },
]
export default meta
type Story = StoryObj<typeof Combobox>

export const Default: Story = {
  args: {
    placeholder: 'Search or select...',
    emptyMessage: 'No matches found',
    options: ComboboxOptions,
  },
}
export const Disabled: Story = {
  args: {
    placeholder: 'Search or select...',
    emptyMessage: 'No matches found',
    options: ComboboxOptions,
    disabled: true,
  },
}
export const WithError: Story = {
  args: {
    placeholder: 'Search or select...',
    emptyMessage: 'No matches found',
    options: ComboboxOptions,
    error: 'Invalid Option',
  },
}

export const Loading: Story = {
  args: {
    placeholder: 'Search or select...',
    emptyMessage: 'No matches found',
    options: ComboboxOptions,
    isLoading: true,
  },
}

export const Multiselect: Story = {
  args: {
    placeholder: 'Select multiple options...',
    emptyMessage: 'No matches found',
    options: ComboboxOptions,

    multiselect: true,
    value: [
      { value: 'option-1', label: 'Option 1' },
      { value: 'option-3', label: 'Option 3' },
    ],
  },
}
