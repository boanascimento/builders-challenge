import React from 'react'
import { Container, AppRoot } from './styles'

export enum HomePageIds {
  ourSolution = 'ourSolution',
  jussiSession = 'jussiSession',
}

export const HomePage: React.FC<any> = (): JSX.Element => {
  return (
    <Container>
      <AppRoot />
    </Container>
  )
}
