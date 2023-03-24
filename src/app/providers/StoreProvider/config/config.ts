import { configureStore } from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider/config/stateSchems'
import { booksReducer } from 'entities/books'

export const createStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: { books: booksReducer },
    devTools: true,
    preloadedState: initialState,
  })
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
