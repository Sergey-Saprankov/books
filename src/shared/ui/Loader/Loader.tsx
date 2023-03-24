import React, { FC, memo } from 'react'

import s from './Loader.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = memo(({ className = '' }) => {
  return (
    <div className={classNames(s.Loader, {}, [className])}>
      <span className={s.loader}></span>
    </div>
  )
})
