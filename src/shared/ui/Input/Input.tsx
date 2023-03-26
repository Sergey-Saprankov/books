import React, {
  ChangeEvent,
  KeyboardEvent,
  FC,
  InputHTMLAttributes,
  memo,
  ReactNode,
  useState,
} from 'react'

import s from './Input.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  onChangeText?: (value: string) => void
  children?: ReactNode
}

export const Input: FC<InputProps> = memo(
  ({ className = '', value, onChange, children, onChangeText, ...otherProps }) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeText?.(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onChange?.(e.currentTarget.value)
      }
    }

    return (
      <div className={classNames(s.Input, {}, [className])}>
        <input
          onKeyDown={onKeyDownHandler}
          {...otherProps}
          value={value}
          onChange={onChangeHandler}
          className={s.input}
        />
        {children}
      </div>
    )
  }
)
