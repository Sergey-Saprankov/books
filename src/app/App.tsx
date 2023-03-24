import './styles/index.scss'
import { useEffect, useMemo } from 'react'

import { useSelector } from 'react-redux'

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { getBooks, getIsLoading, getParams } from 'entities/books'
import { fetchBooks } from 'entities/books/model/services/fetchBooks'
import { MainPage } from 'pages/MainPage'
import { classNames } from 'shared/lib/classNames/classNames'
import { API_KEY } from 'shared/lib/const/apiKey'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Loader } from 'shared/ui/Loader/Loader'
import { Header } from 'widgets/Header/ui/Header'

function App() {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const params = useSelector(getParams)

  useEffect(() => {
    dispatch(fetchBooks({ ...params }))
  }, [])

  return (
    <div className={classNames('App', {}, [theme])}>
      <Header />
      <MainPage />
    </div>
  )
}

export default App
