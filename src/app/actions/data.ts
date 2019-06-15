import { Action } from '@ngrx/store'
import { WeatherInformation } from '../models/weather-information';

export const WEATHER_SEARCH = '[WEATHERINFORMATION] Search'

export class WeatherSearch implements Action {
    type = WEATHER_SEARCH

    constructor(public payload: WeatherInformation){}
}

export type Actions = WeatherSearch