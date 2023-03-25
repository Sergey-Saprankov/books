import { useEffect } from 'react'

import { useSelector } from 'react-redux'

import s from './MainPage.module.scss'

import { fetchBooks, Books, getIsLoading, getParams } from 'entities/books'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Loader } from 'shared/ui/Loader/Loader'

export const MainPage = () => {
  const dispatch = useAppDispatch()
  const params = useSelector(getParams)
  const { key, maxResults, orderBy, q, startIndex } = params
  const isLoading = useSelector(getIsLoading)

  useEffect(() => {
    dispatch(fetchBooks({ q, orderBy, startIndex, maxResults, key }))
  }, [dispatch, q, orderBy, startIndex, maxResults, key])

  if (isLoading) return <Loader />

  return (
    <section className={s.MainPage}>
      <Books />
    </section>
  )
}
