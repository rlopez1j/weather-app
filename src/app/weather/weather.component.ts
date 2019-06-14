import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  getWeather(zip_code){
    console.log(zip_code)
    this.http.get('https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        zip: zip_code, // get country code (don't assume US)
        APPID: '346cfdc8742305b796a5082c46271d73' // may hide
      }
    }).subscribe((data: any)=>{ // find better type (maybe)
      console.log(data)
    })
  }
}
