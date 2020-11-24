import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MarketDataComponent } from './market-data/market-data.component';
import { SignupComponent } from './signup/signup.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', component: MarketDataComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'order', component: OrderComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
