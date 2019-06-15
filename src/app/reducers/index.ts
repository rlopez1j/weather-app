import { WeatherInformation } from '../models/weather-information'
import { submitReducer } from './submit';
import { weatherReducer } from './data';

export interface State{
    zip: string
    weather: WeatherInformation
}

export const reducers = {
    zip_code: submitReducer,
    weather: weatherReducer
}

export const getSubmitState = (state: State) => state.zip
export const getWeatherState = (state: State) => state.weather