import { createSelector } from '@reduxjs/toolkit'

import { getBooksState } from '../getBooksState/getBooksState'

export const getBooks = createSelector(getBooksState, books => books.items)
