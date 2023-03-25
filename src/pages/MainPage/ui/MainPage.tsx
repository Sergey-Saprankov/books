import { useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'

import s from './MainPage.module.scss'

import { Books, getBookId, getBooks, getTotalBooks, setMarker, setPage } from 'entities/books'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

const MainPage = () => {
  const dispatch = useAppDispatch()
  const books = useSelector(getBooks)
  const total = useSelector(getTotalBooks)

  const onChangePagination = useCallback(() => {
    dispatch(setMarker(true))
    dispatch(setPage())
  }, [dispatch])

  return (
    <section className={s.MainPage}>
      <Books />
      {total > books.length && (
        <Button onClick={onChangePagination} theme={ButtonTheme.Primary}>
          Show more
        </Button>
      )}
    </section>
  )
}

export default MainPage
