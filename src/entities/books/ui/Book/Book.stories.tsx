import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Book } from './Book'

export default {
  title: 'entities/Book',
  component: Book,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Book>

const Template: ComponentStory<typeof Book> = args => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Book {...args} />
  </div>
)

export const DefaultState = Template.bind({})

DefaultState.args = {
  src: '',
  alt: 'alt',
  category: 'Art',
  author: 'Some author',
  title: 'Title',
}
