import type { Meta, StoryObj } from '@storybook/react'

import Radio, { type Option } from './Radio'

const options: Option[] = [
  { label: 'Radio 1', value: 'radio-1' },
  { label: 'Radio 2', value: 'radio-2' },
  { label: 'Radio 3', value: 'radio-3' },
]

const meta = {
  component: Radio,
} satisfies Meta<typeof Radio>

export default meta

type Story = StoryObj<typeof meta>

export const AllProps: Story = {
  args: {
    cId: 'sb',
    className: '',
    color: 'primary',
    label: 'What is your favorite radio?',
    options,
  },
  render: args => <Radio {...args} />,
}
