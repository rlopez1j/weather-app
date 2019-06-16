import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherInformation } from './models/weather-information';
import { map } from 'rxjs/operators';
import { ForecastInformation } from './models/forecast-information';

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
        let temp: number = data.main.temp
        let weather: WeatherInformation = {
          city: data.name,
          temperature_current: parseFloat(temp.toPrecision(3)),
          temperature_high: data.main.temp_max,
          temperature_low: data.main.temp_min,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          description_main: data.weather[0].main,
          description_detailed: data.weather[0].description,
          icon: 'https://openweathermap.org/img/w/'+data.weather[0].icon+'.png'
        }
        return weather
      })
    )
  }

  getForecastData(zip_code): Observable<ForecastInformation[]>{
    let forecast_list: ForecastInformation[] = []
    return this.http.get<any>('https://api.openweathermap.org/data/2.5/forecast',
    {
      params: {
        zip: zip_code,
        units: 'imperial', // might change depending on country code
        APPID: '346cfdc8742305b796a5082c46271d73' // may hide
      }
    }).pipe(
      map((data: any)=>{
        for(let day in data.list){
          let date: string = new Date(data.list[day].dt_txt)
          .toDateString()
          .slice(0,10);

          forecast_list.push({
            temperature: data.list[day].main.temp,
            humidity: data.list[day].main.humidity,
            wind: data.list[day].wind.speed,
            date: date
          })
        }
        return forecast_list
      })
    )
  }
}
