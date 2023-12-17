# Story Template

```typescript
import type { Meta, StoryObj } from '@storybook/react'

import Component from './Component'

const meta = {
  component: Component,
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const AllProps: Story = {
  args: {
    cId: 'sb',
    className: '',
  },
  render: args => <Component {...args} />,
}
```
