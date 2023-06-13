import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  prolist: any;
  mobilelist: any;
  groseryList: any;
  laptopList: any;
  gamesList: any;

  constructor(private service: ServService, private cartService: CartService,private router :ActivatedRoute) { }

  addtocart(item: any) { 

    this.cartService.addtoCart(item);
  }

  ngOnInit(): void {let proId = this.router.snapshot.queryParams['proId']

  this.prolist = this.service.getProduct();
  this.mobilelist = this.prolist.filter((x: any) => x.productId == proId)
  this.groseryList = this.prolist.filter((x: any) => x.productId == proId)
  this.laptopList = this.prolist.filter((x: any) => x.productId == proId)
  this.gamesList = this.prolist.filter((x: any) => x.productId == proId)
  console.log(this.mobilelist.length);
  }

}
