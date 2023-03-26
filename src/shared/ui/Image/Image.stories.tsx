import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Image } from './Image'

import test from 'shared/assets/test.png'

export default {
  title: 'shared/Image',
  component: Image,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = args => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Image {...args} />
  </div>
)

export const DefaultState = Template.bind({})

DefaultState.args = {
  src: test,
}

export const CheckWidth = Template.bind({})

CheckWidth.args = {
  src: test,
  width: '100px',
}

export const ErrorImage = Template.bind({})

ErrorImage.args = {
  src: '',
  width: '200px',
}
