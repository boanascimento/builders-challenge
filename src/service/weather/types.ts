export interface IGetWeatherInfoResponse {
  base: string
  clouds: IClouds
  cod: number
  coord: ICoord
  dt: number
  id: number
  main: IMain
  name: string
  sys: ISys
  timezone: number
  visibility: number
  weather: Array<IWeather>
  wind: IWind
}

interface IWind {
  speed: number
  deg: number
}

interface IWeather {
  description: 'broken clouds'
  icon: '04d'
  id: 803
  main: 'Clouds'
}

interface ISys {
  sunrise: number
  sunset: number
  country: string
  id: number
  type: number
}

interface IClouds {
  all: number
}

interface ICoord {
  lon: number
  lat: number
}

interface IMain {
  feels_like: number
  grnd_level: number
  humidity: number
  pressure: number
  sea_level: number
  temp: number
  temp_max: number
  temp_min: number
}
