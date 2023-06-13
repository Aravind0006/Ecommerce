import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
 prolist: any;
  mobilelist: any;
  groseryList: any;
  laptopList: any;
  gamesList: any;
  mobilelist1: any;
  mobilelist2: any;
  groseryList1: any;
  groseryList2: any;
  laptopList2: any;
  laptopList1: any;
  gamesList2: any;
  gamesList1: any;
  constructor(private service:ServService , private cartService: CartService) {
    
   }

   addtocart(item: any) { 

    this.cartService.addtoCart(item);
  }

  ngOnInit(): void {
    this.prolist = this.service.getProduct();
    this.mobilelist = this.prolist.filter((x:any)=>x.productId == 1),
    this.mobilelist1 = this.prolist.filter((x:any)=>x.productId == 2),
    this.mobilelist2 = this.prolist.filter((x:any)=>x.productId == 3),

    this.groseryList = this.prolist.filter((x:any)=>x.productId == 9),
    this.groseryList1 = this.prolist.filter((x:any)=>x.productId == 10),
    this.groseryList2 = this.prolist.filter((x:any)=>x.productId == 11),

    this.laptopList = this.prolist.filter((x:any)=>x.productId == 17),
    this.laptopList1 = this.prolist.filter((x:any)=>x.productId == 18),
    this.laptopList2 = this.prolist.filter((x:any)=>x.productId == 19),

    this.gamesList = this.prolist.filter((x:any)=>x.productId == 25),
    this.gamesList1 = this.prolist.filter((x:any)=>x.productId == 26),
    this.gamesList2 = this.prolist.filter((x:any)=>x.productId == 27)
  }

}
