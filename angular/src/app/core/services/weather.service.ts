import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { WeatherForecast } from '../Models/WeatherForecast';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private config: ConfigService, private http: HttpClient) { }

  getForecasts(pageSize: number, pageNum: number): Observable<WeatherForecast[]> {

    return this.http.get<WeatherForecast[]>(
      `${this.config.getApiUrl()}/fetchdata?pageSize=${pageSize}&pageNum=${pageNum}`);
  }

}


