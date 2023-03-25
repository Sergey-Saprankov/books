import React, { FC, memo, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { v1 } from 'uuid'

import s from './Books.module.scss'

import { fetchBooks, getBookId, getIsLoading, getParams } from 'entities/books'
import { getBooks } from 'entities/books/model/selectors/getBooks/getBooks'
import { getTotalBooks } from 'entities/books/model/selectors/getTotalBooks/getTotalBooks'
import { Book } from 'entities/books/ui/Book/Book'
import { classNames } from 'shared/lib/classNames/classNames'
import { PATH } from 'shared/lib/const/path'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface BooksProps {
  className?: string
}

export const Books: FC<BooksProps> = memo(({ className = '' }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const books = useSelector(getBooks)
  const total = useSelector(getTotalBooks)
  const booksCount = `Found ${String(total)} result`
  const params = useSelector(getParams)
  const { key, maxResults, orderBy, q, startIndex } = params
  const isLoading = useSelector(getIsLoading)

  const getId = useCallback(
    (id: string) => {
      dispatch(getBookId(id))
      navigate(PATH.BOOK)
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(fetchBooks({ q, orderBy, startIndex, maxResults, key }))
  }, [dispatch, q, orderBy, startIndex, maxResults, key])

  // if (isLoading) return <Loader />

  return (
    <div className={classNames(s.Books, {}, [className])}>
      <Text className={s.center} theme={TextTheme.Primary} title={booksCount} />
      <ul className={s.booksList}>
        {books?.map(el => {
          const src = el.volumeInfo.imageLinks?.thumbnail || ''
          const alt = el.volumeInfo.description || ''
          const author = el.volumeInfo.authors ? el.volumeInfo.authors.join(' ') : ''
          const category = el.volumeInfo.categories ? el.volumeInfo.categories[0] : ''

          return (
            <Book
              getBookId={getId}
              id={el.id}
              key={v1()}
              title={el.volumeInfo.title}
              src={src}
              alt={alt}
              author={author}
              category={category}
            />
          )
        })}
      </ul>
    </div>
  )
})
