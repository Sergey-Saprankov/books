import React, { ChangeEvent, FC, memo } from 'react'

import s from './Image.module.scss'

import defaultImg from 'shared/assets/default.jpg'
import { classNames } from 'shared/lib/classNames/classNames'

interface ImageProps {
  className?: string
  src: string
  alt: string
  width: string
  height: string
}

export const Image: FC<ImageProps> = memo(({ className = '', src, alt, height, width }) => {
  const onErrorImgHandler = (e: ChangeEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImg
  }

  return (
    <div style={{ width: width, height: height }} className={classNames(s.Image, {}, [className])}>
      <img
        data-testid={'image'}
        className={s.img}
        src={src}
        alt={alt}
        onError={onErrorImgHandler}
      />
    </div>
  )
})
