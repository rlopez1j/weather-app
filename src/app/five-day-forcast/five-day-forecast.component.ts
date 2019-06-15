import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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

  constructor() {
  }

  ngOnInit() {
  }
}
