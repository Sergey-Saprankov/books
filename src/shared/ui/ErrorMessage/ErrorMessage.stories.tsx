import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ErrorMessage } from './ErrorMessage'

export default {
  title: 'shared/ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ErrorMessage>

const Template: ComponentStory<typeof ErrorMessage> = args => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <ErrorMessage {...args} />
  </div>
)

export const DefaultState = Template.bind({})

DefaultState.args = {
  error: 'Some Error',
}
