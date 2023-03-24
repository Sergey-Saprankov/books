import { createSelector } from '@reduxjs/toolkit'

import { getBooksState } from '../getBooksState/getBooksState'

export const getIsLoading = createSelector(getBooksState, books => books.isLoading)
