import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Book, BookSchema } from '../types/BookSchema'

import { fetchCurrentBook } from 'pages/BookPage/model/services/fetchCurrentBook'

const initialState: BookSchema = {
  book: {
    volumeInfo: {},
  },
  isLoading: false,
  error: null,
}

const bookSlice = createSlice({
  name: 'book',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCurrentBook.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCurrentBook.fulfilled, (state, action: PayloadAction<Book>) => {
        state.book = action.payload
        state.isLoading = false
      })
      .addCase(fetchCurrentBook.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Failed to fetch book'
      })
  },
})

export const { reducer: bookReducer } = bookSlice
