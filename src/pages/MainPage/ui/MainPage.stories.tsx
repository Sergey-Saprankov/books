import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import MainPage from './MainPage'

import { StoreProvider } from 'app/providers/StoreProvider'

export default {
  title: 'page/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = args => (
  <StoreProvider>
    <MainPage />
  </StoreProvider>
)

export const DefaultState = Template.bind({})

DefaultState.args = {}
