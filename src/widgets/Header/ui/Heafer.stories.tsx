import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Header } from './Header'

import { StoreProvider } from 'app/providers/StoreProvider'

export default {
  title: 'widgets/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => (
  <StoreProvider>
    <Header />
  </StoreProvider>
)

export const DefaultState = Template.bind({})

DefaultState.args = {}
