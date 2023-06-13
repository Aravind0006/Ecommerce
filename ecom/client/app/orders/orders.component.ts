import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any;


  constructor(private serv:ServService){ }

  ngOnInit(): void {
    this.orderpage()
  }
 
  orderpage(){
    this.serv.orderpage().subscribe((data:any)=>{
      this.orders = data.orderSub
    })
  }
}
