import type { Meta, StoryObj } from '@storybook/react'
import { Combobox } from '../components/ui/combobox'

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Combobox>

export const Default: Story = {
  args: {
    placeholder: 'Search or select...',
    emptyMessage: 'No matches found',
    options: [
      { value: 'option-1', label: 'Option 1' },
      { value: 'option-2', label: 'Option 2' },
      { value: 'option-3', label: 'Option 3' },
    ],
  },
}
export const Disabled: Story = {
  args: {
    placeholder: 'Search or select...',
    emptyMessage: 'No matches found',
    options: [
      { value: 'option-1', label: 'Option 1' },
      { value: 'option-2', label: 'Option 2' },
      { value: 'option-3', label: 'Option 3' },
    ],
    disabled: true,
  },
}
export const WithError: Story = {
  args: {
    placeholder: 'Search or select...',
    emptyMessage: 'No matches found',
    options: [
      { value: 'option-1', label: 'Option 1' },
      { value: 'option-2', label: 'Option 2' },
      { value: 'option-3', label: 'Option 3' },
    ],
    error: 'Invalid Option',
  },
}

export const Loading: Story = {
  args: {
    placeholder: 'Search or select...',
    emptyMessage: 'No matches found',
    options: [
      { value: 'option-1', label: 'Option 1' },
      { value: 'option-2', label: 'Option 2' },
      { value: 'option-3', label: 'Option 3' },
    ],
    isLoading: true,
  },
}

export const Multiselect: Story = {
  args: {
    placeholder: 'Select multiple options...',
    emptyMessage: 'No matches found',
    options: [
      { value: 'option-1', label: 'Option 1' },
      { value: 'option-2', label: 'Option 2' },
      { value: 'option-3', label: 'Option 3' },
      { value: 'option-4', label: 'Option 4' },
      { value: 'option-5', label: 'Option 5' },
      {
        value: 'option-with-long-text',
        label: 'This is an option with a very long text that should be truncated',
      },
    ],
    multiselect: true,
    value: [
      { value: 'option-1', label: 'Option 1' },
      { value: 'option-3', label: 'Option 3' },
    ],
  },
}
