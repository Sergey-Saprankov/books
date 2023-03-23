import React, { FC, memo } from 'react'

import s from './Text.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

export enum TextTheme {
  Primary = 'primary',
  Secondary = 'secondary',
  Error = 'error',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text: FC<TextProps> = memo(({ className = '', text, title, theme = '' }) => {
  return (
    <div className={classNames(s.Text, {}, [s[theme], className])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  )
})
