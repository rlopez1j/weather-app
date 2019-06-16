import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherInformation } from '../models/weather-information';
import { WeatherService } from '../weather.service';
import { AppState } from '../app.state';
import { WeatherSearch } from '../actions/data';
import { ForecastInformation } from '../models/forecast-information';
import { Forecast } from '../models/forecast';
import { ForecastSearch } from '../actions/forecast';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public zipcode: any;
  public zip$: Observable<String>;
  public weather$: Observable<WeatherInformation>;
  public ERROR_FLAG = 0;

  constructor(private weather_service: WeatherService, public store: Store<AppState>) { 
  }

  ngOnInit() {
  }

  computeMean(forecast_data: ForecastInformation[]): Forecast[]{
    let forecast: Forecast[] = []
    
    let day = 1;
    let right = day*8;
    let left = 0;

    while(right <= forecast_data.length){
      let weather_for_day = forecast_data.slice(left, right);
      left += 8;
      day++;
      right = day*8;

      let temp_sum = weather_for_day.reduce((prev, curr)=>{
        return prev + curr.temperature
      }, 0)
      let temp_avg:number = temp_sum/weather_for_day.length

      let hum_sum = weather_for_day.reduce((prev, curr)=>{
        return prev + curr.humidity
      }, 0)
      let hum_avg = hum_sum/weather_for_day.length

      let wind_sum = weather_for_day.reduce((prev, curr)=>{
        return prev + curr.wind
      }, 0)
      let wind_avg = wind_sum/weather_for_day.length

      forecast.push({
        temp_day_mean: parseFloat(temp_avg.toPrecision(3)),
        humidity_day_mean: parseFloat(hum_avg.toPrecision(3)),
        wind_day_mean: parseFloat(wind_avg.toPrecision(3)),
        date: weather_for_day[0].date
      })
    }

    return forecast
  }

  getWeather(zip_code){
    this.weather_service.getWeather(zip_code)
    .subscribe((data: WeatherInformation)=>{
      this.store.dispatch(new WeatherSearch(data));
      this.ERROR_FLAG = 0
    }, error =>{
      this.ERROR_FLAG = 1
    });

    this.weather_service.getForecastData(zip_code)
    .subscribe((data: ForecastInformation[])=>{
      this.store.dispatch(new ForecastSearch(this.computeMean(data)))
      this.ERROR_FLAG = 0
    }, error =>{
      this.ERROR_FLAG = 1
    })
  }
}
