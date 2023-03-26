import { StyleDecorator } from '../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { Theme } from '../src/app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from '../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { addDecorator } from '@storybook/react'
import { RouterDecorator } from '../src/shared/config/storybook/RouterDecorator/RouterDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'light',
    list: [
      {
        name: 'light',
        class: '',
        color: '#ffffff',
        default: true,
      },
      {
        name: 'dark',
        class: 'theme--dark',
        color: '#121212',
      },
    ],
  },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.Light))
addDecorator(RouterDecorator)
