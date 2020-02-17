import { Component, Inject, OnInit } from '@angular/core';
import { WeatherForecast } from '../core/Models/WeatherForecast';
import { WeatherService } from '../core/services/weather.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {

  public forecasts: WeatherForecast[] = [];
  pageSize = 10;
  pageNum = 0;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit(): void {
    this.getForecasts();
  }


  getForecasts() {
    this.weatherService.getForecasts(this.pageSize, this.pageNum).subscribe(res => {
      this.forecasts = res;
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}




