import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherInfoService {

  // create instance
  constructor(private _http: HttpClient) { }

  // create method
  getCurrentWeatherData() {
    return this._http.get("http://localhost:4200/assets/currentWeather.json")
      .map(result => result);
  };
  getAirPollutionData() {
    return this._http.get("http://localhost:4200/assets/airPollution.json")
      .map(result => result);
  };
  getUVIndexData() {
    return this._http.get("http://localhost:4200/assets/UVIndex.json")
      .map(result => result);
  };
  getHistoricalData() {
    return this._http.get("http://localhost:4200/assets/historical.json")
      .map(result => result);
  };
}
