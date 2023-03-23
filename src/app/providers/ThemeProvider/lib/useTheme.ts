import { useContext } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps } from './ThemeContext'

export const useTheme = () => {
  const { theme = Theme.Light, setTheme } = useContext<ThemeContextProps>(ThemeContext)
  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light

    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
