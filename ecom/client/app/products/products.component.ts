import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';
import { CartService } from '../cart.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prolist: any;
  mobilelist: any;
  groseryList: any;
  laptopList: any;
  gamesList: any;
  item: any;
  filterCategory: any;
  x: any;
  Count:any=0;
  constructor(private service: ServService, private cartService: CartService,private router :Router) { }

  ngOnInit(): void {
    //alert(sessionStorage.getItem("UserId"));
    this.prolist = this.service.getProduct();
    this.mobilelist = this.prolist.filter((x: any) => x.categoryId == 1)
    this.groseryList = this.prolist.filter((x: any) => x.categoryId == 2)
    this.laptopList = this.prolist.filter((x: any) => x.categoryId == 3)
    this.gamesList = this.prolist.filter((x: any) => x.categoryId == 4)
    console.log(this.mobilelist.length);

    
  }
  ShowId(x: any) {
    
      this.router.navigate(["/prod"] , { queryParams:{proId:x ,name:x}});
    
  }
  addtocart(item: any) { 
    
    this.cartService.addtoCart(item);
    
  }
  filter(category: string) {
    this.prolist = this.service.getProduct();
    this.mobilelist = this.prolist.filter((x: any) => x.categoryId == 1)((x: any) => {
      if (x.category == category || category == '') {
        return x;
      }
    })
  }



}
