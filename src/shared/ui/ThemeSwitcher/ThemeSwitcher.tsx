import React, { FC, memo } from 'react'

import s from './ThemeSwitcher.module.scss'

import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { ReactComponent as Dark } from 'shared/assets/icon/darkTheme.svg'
import { ReactComponent as Light } from 'shared/assets/icon/lightTheme.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className = '' }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames(s.ThemeSwitcher, {}, [className])}>
      <Button onClick={toggleTheme} theme={ButtonTheme.Clear}>
        {theme === Theme.Light ? (
          <div className={s.flexContainer}>
            <Dark style={{ fill: 'var(--bg-primary)' }} />
            <Text theme={TextTheme.Secondary} text={'Dark Theme'} />
          </div>
        ) : (
          <div className={s.flexContainer}>
            <Light style={{ fill: 'var(--bg-primary)' }} />
            <Text theme={TextTheme.Secondary} text={'Light Theme'} />
          </div>
        )}
      </Button>
    </div>
  )
})
