import { DeepPartial } from 'redux'

import { getBookState } from './getBookState'

import { StateSchema } from 'app/providers/StoreProvider'

describe('getBookState', () => {
  test('should return', () => {
    const state: DeepPartial<StateSchema> = {
      book: {
        book: {},
        error: null,
        isLoading: false,
      },
    }

    expect(getBookState(state as StateSchema)).toEqual({
      book: {},
      error: null,
      isLoading: false,
    })
  })
})
