import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherInformation } from '../models/weather-information';
//import { WeatherUpdatedAction, WeatherUpdateAction } from '../actions/data';
import { WeatherService } from '../weather.service';
import { AppState } from '../app.state';
import { WeatherSearch } from '../actions/data';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  
  public zip$: Observable<String>;
  public weather$: Observable<WeatherInformation>;

  constructor(private weather_service: WeatherService, public store: Store<AppState>) { 
  }

  ngOnInit() {
  }

  getWeather(zip_code){
    this.weather_service.getWeather(zip_code)
    .subscribe((data: WeatherInformation)=>{
      this.store.dispatch(new WeatherSearch(data));
    });
  }
}
