import type { Meta, StoryObj } from '@storybook/react'

import Badge from './Badge'

const meta = {
  component: Badge,
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const AllProps: Story = {
  args: {
    children: 'Badge text',
    cId: 'sb',
    className: '',
    color: 'neutral',
    iconButtonAriaLabel: 'Open in new window',
    iconButtonType: undefined,
  },
  render: args => <Badge {...args} />,
}
