import axios, { AxiosPromise } from 'axios'
import { store } from '../../store'
import { IGetWeatherInfoResponse } from './types'

/**
 * The weather informations according the givin latitude and longitude.
 * @returns AxiosPromise<any>
 */
export const getWeatherInfo = (
  latitude: number,
  longitude: number,
): AxiosPromise<IGetWeatherInfoResponse> => {
  const weatherApi = store.getState().RemoteConfigReducer.apiHosts?.weatherApi
  const openWeatherMapApiKey =
    store.getState().RemoteConfigReducer.openWeatherMapApiKey
  console.log('🚀  Bonny ~ openWeatherMapApiKey', openWeatherMapApiKey)

  return axios.get(
    `${weatherApi}?lat=${latitude}&lon=${longitude}&appid=${openWeatherMapApiKey}`,
  )
}
