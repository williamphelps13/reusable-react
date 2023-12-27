import type { Meta, StoryObj } from '@storybook/react'

import IconButton from './IconButton'

const meta = {
  component: IconButton,
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const AllProps: Story = {
  args: {
    cId: 'sb',
    className: '',
    isDisabled: false,
    isLoading: false,
    name: 'beaker',
    purpose: undefined,
    size: 'md',
    type: 'button',
  },
  render: args => <IconButton {...args} />,
}
