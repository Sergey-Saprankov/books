import React, { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react'

import s from './Button.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

export enum ButtonTheme {
  Clear = 'clear',
  Primary = 'primary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = memo(
  ({ className = '', children, theme = '', ...otherProps }) => {
    return (
      <button {...otherProps} className={classNames(s.Button, {}, [s[theme], className])}>
        {children}
      </button>
    )
  }
)
