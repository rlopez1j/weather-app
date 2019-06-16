import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { CurrentForecastComponent } from './current-forecast/current-forecast.component';
import { FiveDayForecastComponent } from './five-day-forcast/five-day-forecast.component';
import { WeatherService } from './weather.service';
import { weatherReducer } from './reducers/data';
import { forecastReducer } from './reducers/forecast';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CurrentForecastComponent,
    FiveDayForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({weather: weatherReducer, forecast: forecastReducer}),
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
