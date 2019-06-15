import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { reducers } from './reducers/index';
import { CurrentForecastComponent } from './current-forecast/current-forecast.component';
import { FiveDayForecastComponent } from './five-day-forcast/five-day-forecast.component';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './effects/effects';
import { WeatherService } from './weather.service';

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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([WeatherEffects])
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
