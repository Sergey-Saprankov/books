import { DeepPartial } from 'redux'

import { getBooks } from './getBooks'

import { StateSchema } from 'app/providers/StoreProvider'

describe('getBooks', () => {
  test('should return', () => {
    const state: DeepPartial<StateSchema> = {
      books: {
        items: [],
      },
    }

    expect(getBooks(state as StateSchema)).toEqual([])
  })
})
