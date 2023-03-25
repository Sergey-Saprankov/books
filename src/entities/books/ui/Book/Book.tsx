import React, { FC, memo } from 'react'

import s from './Book.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { textHandler } from 'shared/lib/textHandler/textHandler'
import { Image } from 'shared/ui/Image/Image'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface BookProps {
  className?: string
  src: string
  alt: string
  category: string
  author: string
  title: string
  id: string
  getBookId: (id: string) => void
}

export const Book: FC<BookProps> = memo(
  ({ className = '', alt, category, src, author, title, id, getBookId }) => {
    return (
      <div onClick={() => getBookId(id)} className={classNames(s.Book, {}, [className])}>
        <div className={s.innerWrapper}>
          <Image className={s.alignSelf} src={src} alt={alt} width={'90px'} height={'120px'} />
          <div className={s.textBlock}>
            <Text theme={TextTheme.Primary} text={textHandler(category)} />
            <Text title={textHandler(title)} />
          </div>
          <Text text={textHandler(author)} />
        </div>
      </div>
    )
  }
)
