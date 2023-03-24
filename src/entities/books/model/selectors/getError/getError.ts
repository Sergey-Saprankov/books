import { createSelector } from '@reduxjs/toolkit'

import { getBooksState } from '../getBooksState/getBooksState'

export const getError = createSelector(getBooksState, books => books.error)
