import { Forecast } from "../models/forecast";
import { Actions, FORECAST_SEARCH } from '../actions/forecast';

const InitialState: Forecast[] = [{
    temp_day_mean: -100,
    humidity_day_mean: -100,
    wind_day_mean: -100,
    date: 'DMMYY'
}]

export function forecastReducer(state: Forecast[] = InitialState, action: Actions){
    switch(action.type){
        case FORECAST_SEARCH:
            return action.payload
        default:
            return state
    }
}

