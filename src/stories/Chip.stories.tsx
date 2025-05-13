import type { Meta, StoryObj } from '@storybook/react'
import Chip from '../components/chip'
import { AArrowDown } from 'lucide-react'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'outline'],
      control: { type: 'select' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {
  args: {
    children: 'Basic',
    variant: 'default',
  },
}

export const ActiveBrand: Story = {
  args: {
    children: 'Active-brand',
    variant: 'active-brand',
  },
}
export const Secondary: Story = {
  args: {
    children: 'Chip',
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
}
