import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrderService {

  private BASE: String = "https://exchange-connectivity1.herokuapp.com/";


  constructor(private httpClient: HttpClient) { }

  placeOrder(orderParams: any) {
    return this.httpClient.post(this.BASE + "/order", orderParams);
}

}
