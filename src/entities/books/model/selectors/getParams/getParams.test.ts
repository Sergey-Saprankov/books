import { DeepPartial } from 'redux'

import { getParams } from './getParams'

import { StateSchema } from 'app/providers/StoreProvider'
import { API_KEY } from 'shared/lib/const/apiKey'

describe('getParams', () => {
  test('should return', () => {
    const state: DeepPartial<StateSchema> = {
      books: {
        params: {
          startIndex: 0,
          key: API_KEY,
          maxResults: 30,
          q: 'all',
          orderBy: 'newest',
        },
      },
    }

    expect(getParams(state as StateSchema)).toEqual({
      startIndex: 0,
      key: API_KEY,
      maxResults: 30,
      q: 'all',
      orderBy: 'newest',
    })
  })
})
