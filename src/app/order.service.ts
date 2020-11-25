import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrderService {

  private BASE: String = "http://localhost:8090";


  constructor(private httpClient: HttpClient) { }

  placeOrder(orderParams: any) {
    return this.httpClient.post(this.BASE + "/order", orderParams);
}

}
