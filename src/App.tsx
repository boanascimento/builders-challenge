import React from 'react'
import { Provider } from 'react-redux'
import LoadAppSettings from './loadAppSettings'
import { HomePage } from './pages/home'
import { store } from './store'

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <LoadAppSettings />
      <HomePage></HomePage>
    </Provider>
  )
}

export default App
