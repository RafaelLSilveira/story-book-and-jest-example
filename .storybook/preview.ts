import { muiTheme } from 'storybook-addon-material-ui'
import { addDecorator } from '@storybook/react'
import { withTests } from '@storybook/addon-jest'
import results from '../.jest-test-results.json'

addDecorator(
  withTests({
    results,
  })
)

export const decorators = [
	muiTheme()
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}