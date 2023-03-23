import React from 'react'

import s from './Header.module.scss'

import { SortPanel } from 'shared/ui/SortPanel/SortPanel'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'

export const Header = () => {
  return (
    <header className={s.Header}>
      <ThemeSwitcher className={s.alignSelfRight} />
      <Text className={s.alignSelfCenter} title={'Search for books'} theme={TextTheme.Secondary} />
      <SortPanel className={s.alignSelfCenter} />
    </header>
  )
}
