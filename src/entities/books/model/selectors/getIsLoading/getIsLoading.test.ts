import { DeepPartial } from 'redux'

import { getIsLoading } from './getIsLoading'

import { StateSchema } from 'app/providers/StoreProvider'

describe('getIsLoading', () => {
  test('should return', () => {
    const state: DeepPartial<StateSchema> = {
      books: {
        isLoading: true,
      },
    }

    expect(getIsLoading(state as StateSchema)).toEqual(true)
  })
})
