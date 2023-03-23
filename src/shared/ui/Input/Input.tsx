import React, { ChangeEvent, KeyboardEvent, FC, InputHTMLAttributes, memo } from 'react'

import s from './Input.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input: FC<InputProps> = memo(({ className = '', value, onChange, ...otherProps }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value)
  }

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onChange?.(e.currentTarget.value)
    }
  }

  return (
    <input
      onKeyDown={onKeyDownHandler}
      {...otherProps}
      value={value}
      onChange={onChangeHandler}
      className={classNames(s.Input, {}, [className])}
    />
  )
})
