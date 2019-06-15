import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherInformation } from '../models/weather-information';
import { ButtonSubmit } from '../actions/submit';
import { State, getSubmitState, getWeatherState } from '../reducers'
import { WeatherUpdatedAction, WeatherUpdateAction } from '../actions/data';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  
  public zip$: Observable<String>;
  public weather$: Observable<WeatherInformation>;

  constructor(private weather_service: WeatherService, public store: Store<State>) { 
    this.zip$ = store.select(getSubmitState);
    this.weather$ = store.select(getWeatherState);
  }

  ngOnInit() {
  }

  getWeather(zip_code){

    this.store.dispatch(new ButtonSubmit(zip_code))

    // this.http.get('https://api.openweathermap.org/data/2.5/weather',
    // {
    //   params: {
    //     zip: zip_code, // get country code (don't assume US)
    //     units: 'imperial', // might change depending on country code
    //     APPID: '346cfdc8742305b796a5082c46271d73' // may hide
    //   }
    // }).subscribe((data: any)=>{
    //   let param = {
    //     city: data.name,
    //     temp: data.main.temp,
    //     temp_high: data.main.temp_high,
    //     temp_low: data.main.temp_min,
    //     humidity: data.main.humidity,
    //     wind: data.wind.speed,
    //     desc: data.weather[0].main,
    //     desc_detail: data.weather[0].description,
    //     icon: 'https://openweathermap.org/img/w/'+data.weather[0].icon+'.png'
    //   }

    //   this.store.dispatch(new WeatherUpdatedAction(new WeatherInformation(param)));
    // });

    //this.store.dispatch(new WeatherUpdateAction(zip_code))
    this.weather_service.getWeather(zip_code)
    .subscribe((data: WeatherInformation)=>{
      this.store.dispatch(new WeatherUpdatedAction(data));
    });
  }
}
