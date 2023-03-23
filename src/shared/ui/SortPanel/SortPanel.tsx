import React, { FC, memo } from 'react'

import s from './SortPanel.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import Select from 'shared/ui/CustomSelect/CustomSelect'
import { Input } from 'shared/ui/Input/Input'

interface SortPanelProps {
  className?: string
}

export const SortPanel: FC<SortPanelProps> = memo(({ className = '' }) => {
  const options = ['1', '2', '3']

  return (
    <div className={classNames(s.SortPanel, {}, [className])}>
      <div className={s.searchBlock}>
        <Input className={s.inputWidth} type={'search'} />
        <Button theme={ButtonTheme.Primary}>Search</Button>
      </div>
    </div>
  )
})
