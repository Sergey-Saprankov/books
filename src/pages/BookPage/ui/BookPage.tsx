import { useEffect } from 'react'

import { Simulate } from 'react-dom/test-utils'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { getBook } from '../model/selectors/getBook/getBook'
import { getError } from '../model/selectors/getError/getError'
import { getIsLoading } from '../model/selectors/getIsLoading/getIsLoading'

import s from './BookPage.module.scss'

import { fetchCurrentBook } from 'pages/BookPage/model/services/fetchCurrentBook'
import { ReactComponent as Arrow } from 'shared/assets/icon/arrow-left.svg'
import { API_KEY } from 'shared/lib/const/apiKey'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ErrorMessage } from 'shared/ui/ErrorMessage/ErrorMessage'
import { Image } from 'shared/ui/Image/Image'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextTheme } from 'shared/ui/Text/Text'

const BookPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const book = useSelector(getBook)
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)

  useEffect(() => {
    if (!id) return
    dispatch(fetchCurrentBook({ id, key: API_KEY }))
  }, [id])

  const { volumeInfo } = book
  const src = volumeInfo.imageLinks?.thumbnail || ''
  const alt = volumeInfo.description || ''
  const author = volumeInfo.authors ? volumeInfo.authors.join(' ') : ''
  const category = volumeInfo.categories ? volumeInfo.categories.join(' ') : ''
  const title = volumeInfo.title || ''

  if (!id) return null

  return (
    <section className={s.BookPage}>
      {isLoading && <Loader />}
      <Button onClick={() => navigate(-1)} className={s.btn} theme={ButtonTheme.Clear}>
        <Arrow />
        <span>Back to Main Page</span>
      </Button>
      <div className={s.innerWrapper}>
        <div className={s.block}>
          <div className={s.coverBlock}>
            {<Image src={src} alt={alt} width={'280px'} height={'auto'} />}
          </div>
        </div>
        <div className={s.block}>
          <div className={s.informationBlock}>
            <Text text={category} theme={TextTheme.Primary} />
            <div className={s.titleBlock}>
              <Text title={title} theme={TextTheme.Primary} />
              <Text className={s.underline} text={author} theme={TextTheme.Primary} />
            </div>
            {alt && (
              <div className={s.description}>
                <Text text={alt} theme={TextTheme.Primary} />
              </div>
            )}
          </div>
        </div>
      </div>
      {error && <ErrorMessage error={error} />}
    </section>
  )
}

export default BookPage
