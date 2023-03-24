import { useSelector } from 'react-redux'

import s from './MainPage.module.scss'

import { Books, getIsLoading } from 'entities/books'
import { Loader } from 'shared/ui/Loader/Loader'

export const MainPage = () => {
  const isLoading = useSelector(getIsLoading)

  console.log('main')

  return (
    <section className={s.MainPage}>
      {isLoading && <Loader />}
      <Books />
    </section>
  )
}
