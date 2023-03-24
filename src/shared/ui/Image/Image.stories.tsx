// import React from 'react'
//
// import { ComponentMeta, ComponentStory } from '@storybook/react'
//
// import { Image } from './Image'
//
// import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
// import defaultImg from 'shared/assets/avatar.png'
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
//
// export default {
//   title: 'shared/Image',
//   component: Image,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof Image>
//
// const Template: ComponentStory<typeof Image> = args => (
//   <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//     <Image {...args} />{' '}
//   </div>
// )
//
// export const ImageLightTheme = Template.bind({})
//
// ImageLightTheme.args = {
//   src: defaultImg,
//   alt: 'avatar',
//   width: '120px',
//   height: '120px',
// }
//
// export const ImageDarkTheme = Template.bind({})
//
// ImageDarkTheme.args = {
//   src: defaultImg,
//   alt: 'avatar',
//   width: '120px',
//   height: '120px',
// }
//
// ImageDarkTheme.decorators = [ThemeDecorator(Theme.Dark)]
export {}
