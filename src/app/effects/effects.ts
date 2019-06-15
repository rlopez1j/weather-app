import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { WEATHER_DATA_RECEIVE, WeatherUpdatedAction } from '../actions/data';
import { WeatherService } from '../weather.service';

@Injectable()
export class WeatherEffects{
    @Effect()
    update$: Observable<Action> = this.actions$.pipe(
        ofType(WEATHER_DATA_RECEIVE),
        switchMap((zip)=>
            this.weatherService
            .getWeather(zip)
            .pipe(map(data => new WeatherUpdatedAction(data)))
        )
    )

    constructor(private weatherService: WeatherService, private actions$: Actions){}
}