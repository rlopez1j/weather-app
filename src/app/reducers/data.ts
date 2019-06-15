import { WeatherInformation } from '../models/weather-information'
import { WEATHER_SEARCH, Actions } from '../actions/data'

const InitialState: WeatherInformation = {
    city: 'City', // change all of these
    temperature_current:  -1,
    temperature_high:  -1,
    temperature_low:  -1,
    humidity:  -1,
    wind:  -1,
    description_main:  'Desc',
    description_detailed:  'Detailed Dexc',
    icon:  'https://openweathermap.org/img/w/01d.png',
}

export function weatherReducer(state: WeatherInformation = InitialState, action: Actions){
    switch(action.type){
        case WEATHER_SEARCH:
            return action.payload
        default:
            return state;
    }
}