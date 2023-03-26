import { DeepPartial } from 'redux'

import { getBooksState } from './getBooksState'

import { StateSchema } from 'app/providers/StoreProvider'

describe('getBooksState', () => {
  test('should return', () => {
    const state: DeepPartial<StateSchema> = {
      books: {
        kind: '',
        params: {},
        error: null,
        paginationMarker: false,
        items: [],
        isLoading: false,
        totalItems: 300,
      },
    }

    expect(getBooksState(state as StateSchema)).toEqual({
      kind: '',
      params: {},
      error: null,
      paginationMarker: false,
      items: [],
      isLoading: false,
      totalItems: 300,
    })
  })
})
