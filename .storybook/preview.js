import { RouterContext } from 'next/dist/shared/lib/router-context'

import { themes } from '@storybook/theming'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from '@/styles'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white,
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg,
      },
    ],
  },
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.normal },
    current: 'dark',
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  ),
]
