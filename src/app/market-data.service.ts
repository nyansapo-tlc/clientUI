import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class MarketDataService {
  constructor(private httpClient: HttpClient) { };

  getLatestMarketData(){
    return this.httpClient.get('/assets/market-data-stub.json')
  }
  
}

