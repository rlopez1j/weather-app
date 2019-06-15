import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { WeatherInformation } from '../models/weather-information';

@Component({
  selector: 'current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.css']
})
export class CurrentForecastComponent implements OnInit {

  public weather$: Observable<WeatherInformation>;
  weather: any = undefined;

  constructor(public store: Store<AppState>) {
    this.weather$ = store.select('weather')
  }

  ngOnInit() {
    this.weather$
    .subscribe((data: WeatherInformation) => this.weather = data)
  }
}
