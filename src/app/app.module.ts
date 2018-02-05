import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { WeatherInfoService } from './weather-info.service';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MenuComponent } from './menu/menu.component'


@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [WeatherInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
