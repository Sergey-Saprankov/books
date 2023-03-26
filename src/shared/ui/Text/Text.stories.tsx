import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Text, TextTheme } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Text {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  title: 'Test',
  text: 'Test test test',
  theme: TextTheme.Primary,
}
