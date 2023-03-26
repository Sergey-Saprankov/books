import { createAsyncThunk } from '@reduxjs/toolkit'

import { FetchParams } from '../types/BookSchema'

import { instance } from 'shared/api/instance'

export const fetchCurrentBook = createAsyncThunk(
  'currentBook',
  async ({ id, key }: FetchParams, thunkAPI) => {
    try {
      const res = await instance.get(`books/v1/volumes/${id}?key=${key}`)

      return res.data
    } catch (e) {
      thunkAPI.rejectWithValue('Error')
    }
  }
)
