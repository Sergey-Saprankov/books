import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Select } from './Select'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Select {...args} />
  </div>
)

export const DefaultState = Template.bind({})

DefaultState.args = {
  options: ['all', 'biography', 'computers', 'history', 'medical', 'poetry'],
  value: 'all',
}
