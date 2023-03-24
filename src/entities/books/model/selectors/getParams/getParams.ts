import { createSelector } from '@reduxjs/toolkit'

import { FetchParams } from '../../types/FetchParams'
import { getBooksState } from '../getBooksState/getBooksState'

export const getParams = createSelector(getBooksState, books => books.params)

export const getQ = (getParams: FetchParams) => getParams.q
export const getSort = (getParams: FetchParams) => getParams.orderBy
export const getKey = (getParams: FetchParams) => getParams.key
export const getMaxResults = (getParams: FetchParams) => getParams.maxResults
