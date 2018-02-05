import { Component } from '@angular/core';
import { WeatherInfoService } from './weather-info.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title:string = "ds";
  labels = [
    {text:"HOME",color:""},
    {text:"SHARE",color:"primary"},
    {text:"WARN",color:"warn"},
    {text:"USER",color:"accent"},
  ]
  constructor(){}

  ngOnInit(){
  }


}
