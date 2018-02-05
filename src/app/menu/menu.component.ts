import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus1 = [
    {text: 'Current Weather', cols: 6, rows: 4, color: '#FF5722', btnText:'CHECK',icon:'looks'},
    {text: 'UV Index', cols: 3, rows: 4, color: '#FFEB3B', btnText:'CHECK',icon:'flare'},
    {text: 'Historical', cols: 3, rows: 4, color: '#673AB7', btnText:'REVIEW',icon:'folder'},
  ];
  menus2 = [
    {text: 'Pollution', cols: 2, rows: 3, color: '#4CAF50', btnText:'CHECK',icon:'nature'},
    {text: 'Graphics ', cols: 2, rows: 3, color: '#00BCD4', btnText:'BUILD',icon:'gradient'},
    {text: 'Suggestion', cols: 2, rows: 3, color: '#FF9800', btnText:'ABOUT',icon:'pets'},
  ];
  constructor() { }

  ngOnInit() {
  }
  changeTitle():void{
    console.log("sadsds")
  }

}
