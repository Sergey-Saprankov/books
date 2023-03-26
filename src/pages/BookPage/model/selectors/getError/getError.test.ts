import { DeepPartial } from 'redux'

import { getError } from './getError'

import { StateSchema } from 'app/providers/StoreProvider'

describe('getError', () => {
  test('should return', () => {
    const state: DeepPartial<StateSchema> = {
      book: {
        error: 'some error',
      },
    }

    expect(getError(state as StateSchema)).toEqual('some error')
  })
})
