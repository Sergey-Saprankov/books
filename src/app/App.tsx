import './styles/index.scss'

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { MainPage } from 'pages/MainPage'
import { classNames } from 'shared/lib/classNames/classNames'
import { Header } from 'widgets/Header/ui/Header'

function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('App', {}, [theme])}>
      <Header />
      <MainPage />
    </div>
  )
}

export default App
