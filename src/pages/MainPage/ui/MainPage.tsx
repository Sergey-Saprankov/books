import s from './MainPage.module.scss'

import { Select } from 'shared/ui/Select/Select'

export const MainPage = () => {
  const options = ['Sergey', 'Valera', 'Ivan']

  return (
    <section className={s.MainPage}>
      <Select options={options} />
    </section>
  )
}
