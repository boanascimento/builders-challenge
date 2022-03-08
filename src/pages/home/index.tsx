import React from 'react'
import WeatherInfo from '../../components/local/weatherInfo'
import { Container, AppRoot, BgImg } from './styles'

export enum HomePageIds {
  ourSolution = 'ourSolution',
  jussiSession = 'jussiSession',
}

export const HomePage: React.FC<any> = (): JSX.Element => {
  return (
    <Container>
      <AppRoot />
      <BgImg />
      <WeatherInfo data={'test'} />
    </Container>
  )
}
