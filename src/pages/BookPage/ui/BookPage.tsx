import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import s from './BookPage.module.scss'

import { getBookIdSelector, getBooks } from 'entities/books'
import { ReactComponent as Arrow } from 'shared/assets/icon/arrow-left.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Image } from 'shared/ui/Image/Image'
import { Text, TextTheme } from 'shared/ui/Text/Text'

const BookPage = () => {
  const navigate = useNavigate()
  const books = useSelector(getBooks)
  const id = useSelector(getBookIdSelector)
  const book = books.filter(b => b.id === id)
  const [{ volumeInfo }] = book
  const src = volumeInfo.imageLinks?.thumbnail || ''
  const alt = volumeInfo.description || ''
  const author = volumeInfo.authors ? volumeInfo.authors.join(' ') : ''
  const category = volumeInfo.categories ? volumeInfo.categories.join(' ') : ''
  const title = volumeInfo.title

  console.log(book)

  return (
    <section className={s.BookPage}>
      <Button onClick={() => navigate(-1)} className={s.btn} theme={ButtonTheme.Clear}>
        <Arrow />
        <span>Back to Main Page</span>
      </Button>
      <div className={s.innerWrapper}>
        <div className={s.block}>
          <div className={s.coverBlock}>
            {<Image src={src} alt={alt} width={'350px'} height={'auto'} />}
          </div>
        </div>
        <div className={s.block}>
          <div className={s.informationBlock}>
            <Text text={category} theme={TextTheme.Primary} />
            <div className={s.titleBlock}>
              <Text title={title} theme={TextTheme.Primary} />
              <Text className={s.underline} text={author} theme={TextTheme.Primary} />
            </div>
            <div className={s.description}>
              <Text text={alt} theme={TextTheme.Primary} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookPage
