import { Action, ActionCreator, Reducer } from 'redux'

// Types
export const Types = { SET_REMOTE_CONFIG: 'SET_REMOTE_CONFIG' }
export interface IRemoteConfigState {
  apiHosts?: { weatherApi?: string }
  openWeatherMapApiKey?: string
}

// Reducers
const INITIAL_STATE: IRemoteConfigState = {
  apiHosts: { weatherApi: '' },
  openWeatherMapApiKey: '',
}

export const RemoteConfigReducer: Reducer<IRemoteConfigState> = (
  state = INITIAL_STATE,
  action: Action | any,
) => {
  switch (action.type) {
    case Types.SET_REMOTE_CONFIG:
      return {
        ...state,
        ...action.stateProps,
      }
    default:
      return state
  }
}

// Actions
export const SetRemoteConfig: ActionCreator<Action> = (
  stateProps: IRemoteConfigState,
) => ({
  type: Types.SET_REMOTE_CONFIG,
  stateProps,
})
