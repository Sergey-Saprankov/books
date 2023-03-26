import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ErrorPage } from './ErrorPage'

export default {
  title: 'page/ErrorPage',
  component: ErrorPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ErrorPage>

const Template: ComponentStory<typeof ErrorPage> = args => <ErrorPage />

export const DefaultState = Template.bind({})

DefaultState.args = {}
