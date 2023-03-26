import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { BooksSchema } from '../types/BooksSchema'

import { fetchBooks } from 'entities/books/model/services/fetchBooks'
import { API_KEY } from 'shared/lib/const/apiKey'

const initialState: BooksSchema = {
  kind: '',
  totalItems: 0,
  items: [],
  isLoading: false,
  error: null,
  paginationMarker: false,
  params: {
    key: API_KEY,
    maxResults: 30,
    startIndex: 0,
    orderBy: 'relevance',
    q: 'all',
  },
}

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.params.q = action.payload
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.params.orderBy = action.payload
    },
    setPage: state => {
      state.params.startIndex += 1
    },
    setMarker: (state, action: PayloadAction<boolean>) => {
      state.paginationMarker = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, state => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<BooksSchema>) => {
        if (state.paginationMarker) {
          state.items = [...state.items, ...action.payload.items]
        } else {
          state.items = action.payload.items
          state.params.startIndex = 0
        }

        state.paginationMarker = false

        state.totalItems = action.payload.totalItems
        state.isLoading = false
        state.error = null
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false
        state.paginationMarker = false
        state.error = action.error.message ?? 'Failed to fetch books'
      })
  },
})

export const { reducer: booksReducer } = booksSlice
export const { setFilter, setSort, setPage, setMarker } = booksSlice.actions
