import React from 'react'

import '../src/themes/alfa/theme.scss'

export const decorators = [(Story) => <Story />]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
