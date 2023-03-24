import { FC, ReactNode } from 'react'

import { Provider } from 'react-redux'
import { DeepPartial } from 'redux'

import { createStore } from '../config/config'
import { StateSchema } from '../config/stateSchems'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createStore(initialState as StateSchema)

  return <Provider store={store}>{children}</Provider>
}
