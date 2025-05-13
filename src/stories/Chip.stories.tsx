import type { Meta, StoryObj } from '@storybook/react'
import Chip from '../components/chip'
import { action } from '@storybook/addon-actions'
import { ChevronRight, Star } from 'lucide-react'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'outline', 'action'],
      control: { type: 'select' },
    },
    selected: {
      control: 'boolean',
    },
    onAction: { action: 'clicked' },
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
  },
  args: {
    onAction: undefined,
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

export const ActionChip: Story = {
  args: {
    children: 'Click me',
    selected: false,
    leftIcon: <Star size={16} />,
    onAction: action('clicked action'),
  },
}

export const SelectedActionChip: Story = {
  args: {
    children: 'Selected',
    onAction: action('clicked action'),
    selected: true,
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

export const WithLeftIcon: Story = {
  args: {
    children: 'Left Icon',
    leftIcon: <Star size={16} />,
    variant: 'default',
  },
}

export const WithRightIcon: Story = {
  args: {
    children: 'Right Icon',
    rightIcon: <ChevronRight size={16} />,
    variant: 'default',
  },
}

export const WithBothIcons: Story = {
  args: {
    children: 'Both Icons',
    leftIcon: <Star size={16} />,
    rightIcon: <ChevronRight size={16} />,
    variant: 'default',
  },
}
