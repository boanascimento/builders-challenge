import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRemoteConfig } from './hooks/useRemoteConfig'
import { SetRemoteConfig } from './store/ducks/firebase'

const LoadAppSettings: React.FC = (props): JSX.Element => {
  const dispatch = useDispatch()
  const { remoteConfig } = useRemoteConfig()

  useEffect(() => {
    dispatch(
      SetRemoteConfig({
        apiHosts: remoteConfig.apiHosts,
        openWeatherMapApiKey: remoteConfig.openWeatherMapApiKey,
      }),
    )
  }, [remoteConfig])

  return <div>{props.children}</div>
}

export default LoadAppSettings
