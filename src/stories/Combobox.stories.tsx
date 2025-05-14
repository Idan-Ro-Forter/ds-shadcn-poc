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
