import { Suspense } from 'react'

import { Routes, Route } from 'react-router-dom'

import { BookPage } from 'pages/BookPage'
import { MainPage } from 'pages/MainPage'
import { PATH } from 'shared/lib/const/path'
import { Loader } from 'shared/ui/Loader/Loader'

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={PATH.BOOK} element={<BookPage />} />
      </Routes>
    </Suspense>
  )
}
