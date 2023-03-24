import { createSelector } from '@reduxjs/toolkit'

import { getBooksState } from '../getBooksState/getBooksState'

export const getTotalBooks = createSelector(getBooksState, books => books.totalItems)
