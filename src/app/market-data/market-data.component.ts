import { Component, OnInit } from '@angular/core';

import { MarketDataService } from '../market-data.service'

@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.scss']
})
export class MarketDataComponent implements OnInit {
  latestMarketData: any;

  constructor(private marketDataService: MarketDataService) { }

  ngOnInit() {
    this.latestMarketData = this.marketDataService.getLatestMarketData();
    console.log(this.latestMarketData);
  }

}
