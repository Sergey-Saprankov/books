import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SortPanel } from './SortPanel'

import { StoreProvider } from 'app/providers/StoreProvider'

export default {
  title: 'shared/SortPanel',
  component: SortPanel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SortPanel>

const Template: ComponentStory<typeof SortPanel> = args => (
  <StoreProvider>
    <div
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <SortPanel {...args} />
    </div>
  </StoreProvider>
)

export const DefaultState = Template.bind({})

DefaultState.args = {}
