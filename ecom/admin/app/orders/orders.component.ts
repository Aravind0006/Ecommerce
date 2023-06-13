import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orderData: any;

  constructor(private service:ServService) { }

  ngOnInit(): void {
    this.orders()
  }
  orders(){
    this.service.getorders().subscribe((data:any)=>{
      this.orderData=data.getOrder;
      // alert(JSON.stringify(this.orderData))
    })
  }

}
