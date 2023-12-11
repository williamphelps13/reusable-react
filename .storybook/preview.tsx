import type { Preview } from '@storybook/react'
import React from 'react'

import '../app/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
  decorators: [
    Story => (
      <div className="flex flex-col items-center border-2 border-neutral-200 p-16">
        <Story />
      </div>
    ),
  ],
}

export default preview
