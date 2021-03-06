import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderForm: any;

  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      "product": "",
      "quantity": 0,
      "price": 0,
      "side": "",
    })
  }

  onSubmit(formData: any){
    console.log("Submitted", formData)
    var orderStatus = this.orderService.placeOrder(formData);
    orderStatus.subscribe((orderId)=> {
      window.alert("OrderID: " + orderId)
    })

  }

}
