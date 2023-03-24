import { render, screen } from '@testing-library/react'

import { Image } from './Image'

import defaultImg from 'shared/assets/avatar.png'

describe('Image', () => {
  test('have attribute', () => {
    render(<Image width={'90px'} height={'90px'} src={defaultImg} alt={'avatar'} />)
    expect(screen.getByTestId('image')).toHaveAttribute('src')
  })
})
