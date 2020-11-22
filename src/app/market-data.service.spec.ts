/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarketDataService } from './market-data.service';

describe('Service: MarketData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketDataService]
    });
  });

  it('should ...', inject([MarketDataService], (service: MarketDataService) => {
    expect(service).toBeTruthy();
  }));
});
