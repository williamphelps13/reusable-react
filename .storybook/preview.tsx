import type { Preview } from '@storybook/react'
import React from 'react'

import '../app/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
  decorators: [
    Story => (
      <div className="flex flex-col items-center p-16 border-2 border-gray-200">
        <Story />
      </div>
    ),
  ],
}

export default preview
