import React from 'react'
import { firebase } from '../service/firebase/firebase'
import { IRemoteConfigState } from '../store/ducks/firebase'

export function useRemoteConfig() {
  const [remoteConfig, setRemoteConfig] = React.useState<IRemoteConfigState>({})

  const init = React.useCallback(async () => {
    const rmtConfig = firebase.remoteConfig()

    try {
      await rmtConfig.fetchAndActivate()

      const apiHosts = JSON.parse(rmtConfig.getValue('apiHosts').asString())
      const openWeatherMapApiKey = rmtConfig
        .getValue('openWeatherMapApiKey')
        .asString()

      setRemoteConfig({ apiHosts, openWeatherMapApiKey })
    } catch (error) {
      console.log('RemoteConfig ~ error', error)
    }
  }, [])

  React.useEffect(() => {
    init()
  }, [init])
  return { remoteConfig }
}
