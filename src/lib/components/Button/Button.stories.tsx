import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const AllProps: Story = {
  args: {
    children: 'Button Text',
    cId: 'sb',
    className: '',
    iconName: 'plus',
    iconPlacement: 'left',
    isDisabled: false,
    isLoading: true,
    purpose: 'primary',
    size: 'md',
    type: 'button',
  },
  render: args => <Button {...args}>{args.children}</Button>,
}
