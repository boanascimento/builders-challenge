import * as S from './styles'

interface IWeatherInfoProps {
  data: any
}

const WeatherInfo = (props: IWeatherInfoProps): JSX.Element => {
  return (
    <S.Info>
      <S.RefreshButton>Refresh info</S.RefreshButton>
      <h1>The weather in you location</h1>
    </S.Info>
  )
}

export default WeatherInfo
