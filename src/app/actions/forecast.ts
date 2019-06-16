import { Action } from '@ngrx/store';
import { Forecast } from '../models/forecast';

export const FORECAST_SEARCH = '[FORECASTINFORMATION] SEARCH'

export class ForecastSearch implements Action {
    type = FORECAST_SEARCH

    constructor(public payload: Forecast[]){}
}

export type Actions = ForecastSearch