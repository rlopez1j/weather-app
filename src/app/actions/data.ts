import { Action } from '@ngrx/store'
import { WeatherInformation } from '../models/weather-information';

export const WEATHER_DATA_RECEIVE = 'WeatherInfo Update'
export const WEATHER_DATA_RECEIVED = 'WeatherInfo Updated'

export class WeatherUpdateAction implements Action {
    type = WEATHER_DATA_RECEIVE
}

export class WeatherUpdatedAction implements Action {
    type = WEATHER_DATA_RECEIVED

    constructor(public weather: WeatherInformation){}
}
