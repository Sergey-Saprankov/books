import './styles/index.scss'

import { AppRouter } from './providers/RouterProvider/ui/AppRouter'

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { Header } from 'widgets/Header/ui/Header'

function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('App', {}, [theme])}>
      <Header />
      <AppRouter />
    </div>
  )
}

export default App
