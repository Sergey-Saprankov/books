import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input } from './Input'

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Input {...args} />
  </div>
)

export const DefaultState = Template.bind({})

DefaultState.args = {}
