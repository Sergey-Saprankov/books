import { DeepPartial } from 'redux'

import { getTotalBooks } from './getTotalBooks'

import { StateSchema } from 'app/providers/StoreProvider'

describe('getTotalBooks', () => {
  test('should return', () => {
    const state: DeepPartial<StateSchema> = {
      books: {
        totalItems: 100,
      },
    }

    expect(getTotalBooks(state as StateSchema)).toEqual(100)
  })
})
