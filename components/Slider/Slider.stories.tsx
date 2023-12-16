import type { Meta, StoryObj } from '@storybook/react'

import Slider, { type Marks } from './Slider'

const marks: Marks = {
  0: 'Low',
  25: 'Med -',
  50: 'Med',
  75: 'Med +',
  100: 'High',
}

const meta = {
  component: Slider,
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const AllProps: Story = {
  args: {
    cId: 'sb',
    className: '',
    color: 'primary',
    defaultValues: [25, 75],
    isDisabled: false,
    label: 'Slider label',
    hasOptionalLabel: true,
    isPearling: true,
    marks,
    step: 25,
  },
  render: args => <Slider {...args} />,
}
