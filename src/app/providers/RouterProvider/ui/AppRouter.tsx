import { Suspense } from 'react'

import { Routes, Route } from 'react-router-dom'

import { BookPage } from 'pages/BookPage'
import { ErrorPage } from 'pages/ErrorPage'
import { MainPage } from 'pages/MainPage'
import { PATH } from 'shared/lib/const/path'
import { Loader } from 'shared/ui/Loader/Loader'

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={PATH.MAIN} element={<MainPage />} />
        <Route path={PATH.CURRENT_BOOK} element={<BookPage />} />
        <Route path={PATH.ERROR} element={<ErrorPage />} />
      </Routes>
    </Suspense>
  )
}
