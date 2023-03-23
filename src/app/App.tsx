import './styles/index.scss'
import { useEffect } from 'react'

import axios from 'axios'

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { MainPage } from 'pages/MainPage'
import { classNames } from 'shared/lib/classNames/classNames'
import { Header } from 'widgets/Header/ui/Header'

const API_KEY = 'AIzaSyB00SQJPE95pngbOFXzGI5Qh2-Pg8io8Uo'

function App() {
  const { theme } = useTheme()
  // useEffect(() => {
  //   axios
  //     .get('https://www.googleapis.com/books/v1/volumes?q=all', {
  //       params: {
  //         key: API_KEY,
  //         startIndex: 0,
  //         maxResults: 40,
  //       },
  //     })
  //     .then(response => console.log(response.data.items))
  //     .catch(error => console.log(error))
  // }, [])

  return (
    <div className={classNames('App', {}, [theme])}>
      <Header />
      <MainPage />
    </div>
  )
}

export default App
