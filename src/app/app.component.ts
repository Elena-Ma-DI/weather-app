import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './servises/weather.service';
import { WeatherData } from './models/weather.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    WeatherService
  ]
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';



  constructor(private weatherService: WeatherService) { }


  cityName : string = 'Ilion';
  weatherData?: WeatherData;

  ngOnInit(): void {

    this.getWeatherData(this.cityName);
    
  }

  onSubmit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next:(response) => {
        this.weatherData = response;

        console.log(response);
      }
    });
  }
}

