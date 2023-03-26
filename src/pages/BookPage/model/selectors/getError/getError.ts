import { createSelector } from '@reduxjs/toolkit'

import { getBookState } from 'pages/BookPage/model/selectors/getBookState/getBookState'

export const getError = createSelector(getBookState, book => book.error)
