import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  listofpro: any;

  constructor(private serv:ServService) { }

  ngOnInit(): void {
    this.products()
  }

  products(){
    this.serv.checkout().subscribe((data:any)=>{
      this.listofpro.getOrder
    })
  }
}
