import { useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'

import s from './MainPage.module.scss'

import { Books, fetchBooks, getIsLoading, getParams, setMarker, setPage } from 'entities/books'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Loader } from 'shared/ui/Loader/Loader'

const MainPage = () => {
  const dispatch = useAppDispatch()
  const params = useSelector(getParams)
  const { key, maxResults, orderBy, q, startIndex } = params
  const isLoading = useSelector(getIsLoading)

  const onChangePagination = useCallback(() => {
    dispatch(setMarker(true))
    dispatch(setPage())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchBooks({ q, orderBy, startIndex, maxResults, key }))
  }, [dispatch, q, orderBy, startIndex, maxResults, key])

  if (isLoading) return <Loader />

  return (
    <section className={s.MainPage}>
      <Books />
      <Button onClick={onChangePagination} theme={ButtonTheme.Primary}>
        Show more
      </Button>
    </section>
  )
}

export default MainPage
