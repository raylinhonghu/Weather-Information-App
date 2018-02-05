import { Component, OnInit } from '@angular/core';
import { WeatherInfoService } from '../weather-info.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  chart = [];

  constructor(private _info: WeatherInfoService) { }

  ngOnInit() {
    this._info.getHistoricalData()
      .subscribe(data => {

        // Time
        let dateString = [];
        let time = data['list'].map(data => data.dt);

        // Mains
        let temp = data['list'].map(data => data.main.temp);
        let temp_max = data['list'].map(data => data.main.temp_max);
        let temp_min = data['list'].map(data => data.main.temp_min);
        let humidity = data['list'].map(data => data.main.humidity);
        let pressure = data['list'].map(data => data.main.humidity);
        let seaLevel = data['list'].map(data => data.main.sea_level);

        // Get Time String
        time.forEach((ti) => {
          let date = new Date(ti * 1000);
          dateString.push(date.toLocaleTimeString('en',{
            year: 'numeric', month:'short',day: 'numeric'
          }))
        })

        this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: dateString,
          datasets: [
            {
              data: temp_max,
              borderColor: "#3cba9f",
              fill: false
            },
            {
              data: temp_min,
              borderColor: "#ffcc00",
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });

        // Weahther
        console.log(dateString);
        // let weather = data['list'].map(data => data.weather.humidity);
      })
  }

}
