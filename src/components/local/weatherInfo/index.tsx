import { useCallback, useEffect, useState } from 'react'
import { getWeatherInfo } from '../../../service/weather'
import { IGetWeatherInfoResponse } from '../../../service/weather/types'
import * as S from './styles'

const WeatherInfo = (): JSX.Element => {
  const [latitude, setLatitude] = useState<number>(0)
  const [longitude, setLongitude] = useState<number>(0)
  const [weatherInfo, setWeatherInfo] = useState<IGetWeatherInfoResponse>()
  const [loading, setLoading] = useState<boolean>(false)

  const getWeather = useCallback(async (lat: number, lon: number) => {
    try {
      const response = await getWeatherInfo(lat, lon)
      setWeatherInfo(() => response.data)
      setLoading(false)
      console.log('🚀  Bonny ~ getWeather ~ response', response.data)
    } catch (error) {
      setLoading(false)
      console.log('Got some error', error)
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(async function (
      position: GeolocationPosition,
    ) {
      setLatitude(() => position.coords.latitude)
      setLongitude(() => position.coords.longitude)
    })
  }, [])

  const refreshWeather = useCallback(() => {
    setLoading(true)
    getWeather(latitude, longitude)
  }, [latitude, longitude])

  useEffect(() => {
    if (latitude !== 0 && longitude !== 0) getWeather(latitude, longitude)
  }, [latitude, longitude])

  return (
    <S.Content>
      <S.RefreshButton onClick={refreshWeather}>Refresh info</S.RefreshButton>
      <h1>The weather in you location</h1>
      <S.Info>
        <S.ContentInfo>
          <h2>Address</h2>
          <S.Text loading={loading ? 1 : 0}>
            {'City: ' + weatherInfo?.name}
          </S.Text>
          <S.Text loading={loading ? 1 : 0}>
            {'Country: ' + weatherInfo?.sys.country}
          </S.Text>
        </S.ContentInfo>
        <S.ContentInfo>
          <h2>Weather</h2>
          <S.Text loading={loading ? 1 : 0}>
            {'With ' + weatherInfo?.weather[0].description}
          </S.Text>
          <S.Text loading={loading ? 1 : 0}>
            {weatherInfo?.main.humidity + '% of humidity'}
          </S.Text>
        </S.ContentInfo>
      </S.Info>
    </S.Content>
  )
}

export default WeatherInfo
