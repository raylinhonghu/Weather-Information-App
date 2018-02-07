import { Component, OnInit } from '@angular/core';
import { WeatherInfoService } from '../weather-info.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

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

        new Chart('canvas', {
          data: {

            datasets: [
              {
                data: temp_max,
                borderColor: "#000000",
                fill: true,
                backgroundColor: "#3cba9f",
              },
            ]
          },
          type: 'polarArea',

        });

  }

}
