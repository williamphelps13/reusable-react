import type { Meta, StoryObj } from '@storybook/react'

import Loader from './Loader'

const meta = {
  component: Loader,
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const AllProps: Story = {
  args: {
    cId: 'sb',
    className: '',
    size: 'md',
  },
  render: args => <Loader {...args} />,
}
