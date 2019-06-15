export class WeatherInformation {
    city: String = '';
    temperature_current: Number = -1;
    temperature_high: Number = -1;
    temperature_low: Number = -1;
    humidity: Number = -1;
    wind: Number = -1;
    description_main: String = '';
    description_detailed: String = '';
    icon: String = '';

    constructor(data: any){
        this.city = data.city
        this.temperature_current = data.temp
        this.temperature_high = data.temp_high
        this.temperature_low = data.temp_min
        this.humidity = data.humidity
        this.wind = data.wind
        this.description_main = data.desc
        this.description_detailed = data.desc_detail
        this.icon = data.icon
    }
}
