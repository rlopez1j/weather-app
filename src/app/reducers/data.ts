import { WeatherInformation } from '../models/weather-information'
import { WEATHER_DATA_RECEIVED, WeatherUpdatedAction } from '../actions/data'

export function weatherReducer(state = {}, action: WeatherUpdatedAction){
    switch(action.type){
        case WEATHER_DATA_RECEIVED:
            return action.weather
        default:
            return state
    }
}