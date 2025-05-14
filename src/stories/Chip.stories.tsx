import type { Meta, StoryObj } from '@storybook/react'
import Chip from '../components/chip'
import { action } from '@storybook/addon-actions'
import { ChevronRight, Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'

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
    dismissible: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onAction: { action: 'clicked' },
    onDismiss: { action: 'dismissed' },
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
  },
  args: {
    onAction: undefined,
    onDismiss: undefined,
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

export const DismissibleChip: Story = {
  args: {
    children: 'Click X to dismiss',
    dismissible: true,
    variant: 'default',
    onDismiss: action('dismissed'),
  },
}

export const DismissibleWithIcon: Story = {
  args: {
    children: 'Dismissible with icon',
    leftIcon: <Star size={16} />,
    dismissible: true,
    variant: 'default',
    onDismiss: action('dismissed'),
  },
}

export const DismissibleActionChip: Story = {
  args: {
    children: 'Click me or dismiss',
    dismissible: true,
    onAction: action('clicked action'),
    onDismiss: action('dismissed'),
    variant: 'active-brand',
  },
}

export const DisabledChip: Story = {
  args: {
    children: 'Disabled chip',
    disabled: true,
    variant: 'default',
  },
}

export const DisabledActionChip: Story = {
  args: {
    children: 'Disabled action',
    disabled: true,
    onAction: action('clicked action'),
    variant: 'active-brand',
  },
}

export const DisabledDismissibleChip: Story = {
  args: {
    children: 'Disabled dismissible',
    disabled: true,
    dismissible: true,
    onDismiss: action('dismissed'),
  },
}

export const ChipWithAvatar: Story = {
  args: {
    children: (
      <>
        <Avatar className="mr-1 h-6 w-6">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        User Name
      </>
    ),
    variant: 'default',
    className: 'px-0.5',
  },
}

export const ChipWithAvatarFallback: Story = {
  args: {
    children: (
      <>
        <Avatar className="mr-1 h-6 w-6">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        John Doe
      </>
    ),
    variant: 'active-brand',
    className: 'px-0.5',
  },
}

export const DismissibleChipWithAvatar: Story = {
  args: {
    children: (
      <>
        <Avatar className="mr-1 h-6 w-6">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        Dismissible User
      </>
    ),
    className: 'px-0.5',
    dismissible: true,
    onDismiss: action('dismissed'),
    variant: 'default',
  },
}
