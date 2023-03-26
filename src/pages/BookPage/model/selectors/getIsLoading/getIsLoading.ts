import { createSelector } from '@reduxjs/toolkit'

import { getBookState } from 'pages/BookPage/model/selectors/getBookState/getBookState'

export const getIsLoading = createSelector(getBookState, book => book.isLoading)
