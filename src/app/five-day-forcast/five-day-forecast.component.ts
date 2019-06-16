import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Forecast } from '../models/forecast';
import { ForecastState } from '../app.forecast.state';

@Component({
  selector: 'five-day-forecast',
  templateUrl: './five-day-forcast.component.html',
  styleUrls: ['./five-day-forcast.component.css']
})
export class FiveDayForecastComponent implements OnInit {

  public forecast$: Observable<Forecast[]>
  forecast: any = undefined

  constructor(public store: Store<ForecastState>) {
    this.forecast$ = store.select('forecast')
  }

  ngOnInit() {
    this.forecast$
    .subscribe((data: Forecast[]) => this.forecast = data)
  }
}
