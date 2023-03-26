import React, { FC, memo, useEffect, useState } from 'react'

import s from './ErrorMessage.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { useDebounce } from 'shared/lib/hooks/useDebounce'

interface ErrorMessageProps {
  className?: string
  error: string
}

export const ErrorMessage: FC<ErrorMessageProps> = memo(({ className = '', error }) => {
  const [hide, setHide] = useState(true)
  const debouncedValue = useDebounce<boolean>(hide, 5000)

  useEffect(() => {
    setHide(false)
  }, [debouncedValue])

  const mods = {
    [s.hide]: !debouncedValue,
  }

  return (
    <div className={classNames(s.ErrorMessage, mods, [className])}>
      <div className={s.innerWrapper}>
        <span>{error}</span>
      </div>
    </div>
  )
})
