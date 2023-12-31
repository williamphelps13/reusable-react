import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'

const meta = {
  component: Icon,
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const AllProps: Story = {
  args: {
    cId: 'sb',
    className: '',
    name: 'beaker',
    purpose: undefined,
    size: 'md',
  },
  render: args => <Icon {...args} />,
}
