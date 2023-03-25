import { createSelector } from '@reduxjs/toolkit'

import { getBooksState } from '../getBooksState/getBooksState'
export const getBookIdSelector = createSelector(getBooksState, books => books.currentBookId)
