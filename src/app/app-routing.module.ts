import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketDataComponent } from './market-data/market-data.component';

const routes: Routes = [
  { path: '', component: MarketDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
