import type { Meta, StoryObj } from '@storybook/react'
import ChipGroup from '../components/ui/composed/chip-group'
import { BookOpen, Flag, Mail, User } from 'lucide-react'

const meta: Meta<typeof ChipGroup> = {
  title: 'Composed/ChipGroup',
  component: ChipGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'active-brand', 'active-dev', 'success', 'warning', 'danger'],
    },
  },
}

export default meta
type Story = StoryObj<typeof ChipGroup>

export const Default: Story = {
  args: {
    options: [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
    ],
    defaultSelected: '1',
    variant: 'default',
  },
}

export const WithIcons: Story = {
  args: {
    options: [
      { id: 'user', label: 'Users', leftIcon: <User size={16} /> },
      { id: 'mail', label: 'Emails', leftIcon: <Mail size={16} /> },
      { id: 'docs', label: 'Documents', leftIcon: <BookOpen size={16} /> },
      { id: 'report', label: 'Reports', leftIcon: <Flag size={16} /> },
    ],
    defaultSelected: 'user',
    variant: 'active-brand',
  },
}

export const WithDisabledOption: Story = {
  args: {
    options: [
      { id: '1', label: 'Available' },
      { id: '2', label: 'Restricted', disabled: true },
      { id: '3', label: 'Advanced' },
    ],
    defaultSelected: '1',
    variant: 'default',
  },
}

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <ChipGroup
        {...args}
        variant="default"
        options={[
          { id: '1', label: 'Default 1' },
          { id: '2', label: 'Default 2' },
          { id: '3', label: 'Default 3' },
        ]}
      />
      <ChipGroup
        {...args}
        variant="active-brand"
        options={[
          { id: '1', label: 'Brand 1' },
          { id: '2', label: 'Brand 2' },
          { id: '3', label: 'Brand 3' },
        ]}
      />
      <ChipGroup
        {...args}
        variant="active-dev"
        options={[
          { id: '1', label: 'Dev 1' },
          { id: '2', label: 'Dev 2' },
          { id: '3', label: 'Dev 3' },
        ]}
      />
      <ChipGroup
        {...args}
        variant="success"
        options={[
          { id: '1', label: 'Success 1' },
          { id: '2', label: 'Success 2' },
          { id: '3', label: 'Success 3' },
        ]}
      />
      <ChipGroup
        {...args}
        variant="warning"
        options={[
          { id: '1', label: 'Warning 1' },
          { id: '2', label: 'Warning 2' },
          { id: '3', label: 'Warning 3' },
        ]}
      />
      <ChipGroup
        {...args}
        variant="danger"
        options={[
          { id: '1', label: 'Danger 1' },
          { id: '2', label: 'Danger 2' },
          { id: '3', label: 'Danger 3' },
        ]}
      />
    </div>
  ),
}
