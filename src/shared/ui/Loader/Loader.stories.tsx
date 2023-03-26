import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Loader } from './Loader'

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = args => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Loader {...args} />
  </div>
)

export const DefaultState = Template.bind({})

DefaultState.args = {}
