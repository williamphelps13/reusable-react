import type { Meta, StoryObj } from '@storybook/react'

import Label from './Label'

const meta = {
  component: Label,
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const AllProps: Story = {
  args: {
    children: 'Label text',
    cId: 'sb',
    isDisabled: false,
    isOptional: true,
  },
  render: args => <Label {...args}>{args.children}</Label>,
}
