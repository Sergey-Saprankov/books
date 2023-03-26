import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button, ButtonTheme } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Button {...args} />
  </div>
)

export const Clear = Template.bind({})

Clear.args = {
  children: 'Clear',
  theme: ButtonTheme.Clear,
}

export const Primary = Template.bind({})

Primary.args = {
  children: 'Primary',
  theme: ButtonTheme.Primary,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled',
  theme: ButtonTheme.Primary,
  disabled: true,
}
