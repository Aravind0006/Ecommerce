import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  // public productList:any=[];
  // public search :any=[];
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    // alert(JSON.stringify(this.cartItemList))
    this.productList.next(product);
  }
  addtoCart(product : any){

    // if( this.productList.some((s:any) => s.productId ==product.productId)){
    //   alert('kkkk')
    // }
    if(this.cartItemList.some(((f:any) => f.productId == product.productId))){
     alert('This Item Already in Cart')
      return;
    }
    this.cartItemList.push(product);
    //alert(JSON.stringify(this.cartItemList));
    
    this.productList.next(this.cartItemList);
    this.getTotalPrice();


    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(productId: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(productId === a.productId){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  
}
