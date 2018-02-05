import { TestBed, inject } from '@angular/core/testing';

import { WeatherInfoService } from './weather-info.service';

describe('WeatherInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherInfoService]
    });
  });

  it('should be created', inject([WeatherInfoService], (service: WeatherInfoService) => {
    expect(service).toBeTruthy();
  }));
});
