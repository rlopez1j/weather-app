import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getWeatherState } from '../reducers';
import { Observable } from 'rxjs';
import { WeatherInformation } from '../models/weather-information';

@Component({
  selector: 'current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.css']
})
export class CurrentForecastComponent implements OnInit {

  public weather$: Observable<WeatherInformation>;
  private weather_information: any = undefined;

  constructor(public store: Store<State>) {
    this.weather$ = store.select(getWeatherState);
  }

  ngOnInit() {
    this.weather$.subscribe((weather: WeatherInformation)=>{
      this.weather_information = this.weather$;
    });

  }
}
