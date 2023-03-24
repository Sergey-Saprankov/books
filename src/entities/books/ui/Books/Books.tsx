import React, { FC, memo, useEffect } from 'react'

import { useSelector } from 'react-redux'

import s from './Books.module.scss'

import { getBooks } from 'entities/books/model/selectors/getBooks/getBooks'
import { getParams } from 'entities/books/model/selectors/getParams/getParams'
import { getTotalBooks } from 'entities/books/model/selectors/getTotalBooks/getTotalBooks'
import { fetchBooks } from 'entities/books/model/services/fetchBooks'
import { Book } from 'entities/books/ui/Book/Book'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface BooksProps {
  className?: string
}

export const Books: FC<BooksProps> = memo(({ className = '' }) => {
  const dispatch = useAppDispatch()
  const params = useSelector(getParams)
  const books = useSelector(getBooks)
  const total = useSelector(getTotalBooks)
  const booksCount = `Found ${String(total)} result`

  useEffect(() => {
    dispatch(fetchBooks({ ...params }))
  }, [dispatch, params])

  return (
    <div className={classNames(s.Books, {}, [className])}>
      <Text className={s.center} theme={TextTheme.Primary} title={booksCount} />
      <ul className={s.booksList}>
        {books.map(el => {
          const src = el.volumeInfo.imageLinks?.thumbnail || ''
          const alt = el.volumeInfo.description || ''
          const author = el.volumeInfo.authors ? el.volumeInfo.authors.join(' ') : ''
          const category = el.volumeInfo.categories ? el.volumeInfo.categories[0] : ''

          return (
            <Book
              key={el.id}
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
