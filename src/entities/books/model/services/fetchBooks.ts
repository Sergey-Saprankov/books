import { createAsyncThunk } from '@reduxjs/toolkit'

import { FetchParams } from '../types/FetchParams'

import { instance } from 'shared/api/instance'

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (params: FetchParams, thunkAPI) => {
    try {
      const res = await instance.get(`books/v1/volumes`, { params })

      return res.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  }
)
