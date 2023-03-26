import { createSelector } from '@reduxjs/toolkit'

import { getBookState } from 'pages/BookPage/model/selectors/getBookState/getBookState'

export const getBook = createSelector(getBookState, book => book.book)
