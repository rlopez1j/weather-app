import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherInformation } from './models/weather-information';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(zip_code): Observable<WeatherInformation> {
    return this.http.get<any>('https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        zip: zip_code, // get country code (don't assume US)
        units: 'imperial', // might change depending on country code
        APPID: '346cfdc8742305b796a5082c46271d73' // may hide
      }
    }).pipe(
      map((data: any)=>{
        let param = {
          city: data.name,
          temp: data.main.temp,
          temp_high: data.main.temp_high,
          temp_low: data.main.temp_min,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          desc: data.weather[0].main,
          desc_detail: data.weather[0].description,
          icon: 'https://openweathermap.org/img/w/'+data.weather[0].icon+'.png'
        }
        return new WeatherInformation(param)
      })
    )
  }
}
