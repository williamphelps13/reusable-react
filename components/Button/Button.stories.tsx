import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const AllProps: Story = {
  args: {
    cId: 'sb',
    children: 'Button Text',
    className: '',
    isDisabled: false,
    isLoading: false,
    purpose: 'primary',
    size: 'md',
    type: 'button',
  },
  render: args => <Button {...args}>{args.children}</Button>,
}
