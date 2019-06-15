import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getWeatherState } from '../reducers';
import { Observable } from 'rxjs';
import { WeatherInformation } from '../models/weather-information';

@Component({
  selector: 'five-day-forecast',
  templateUrl: './five-day-forcast.component.html',
  styleUrls: ['./five-day-forcast.component.css']
})
export class FiveDayForecastComponent implements OnInit {

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
