import type { Preview } from '@storybook/react'
import React from 'react'

import '../src/lib/tailwind/theme.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
  decorators: [
    Story => (
      <div className="flex flex-col items-center rounded-xl border-2 border-neutral-200 p-16">
        <Story />
      </div>
    ),
  ],
}

export default preview
