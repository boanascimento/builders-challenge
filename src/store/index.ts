import { combineReducers, createStore } from 'redux'
import { IReduxState } from './types'
import { RemoteConfigReducer } from './ducks/firebase'

export const RootReducers = combineReducers<IReduxState>({
  RemoteConfigReducer,
})

export const store = createStore(RootReducers)
