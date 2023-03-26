import { DeepPartial } from 'redux'

import { getBook } from './getBook'

import { StateSchema } from 'app/providers/StoreProvider'

describe('getBook', () => {
  test('should return', () => {
    const state: DeepPartial<StateSchema> = {
      book: {
        book: {},
      },
    }

    expect(getBook(state as StateSchema)).toEqual({})
  })
})
