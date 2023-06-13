import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  baseUrl = "http://92.205.109.210:8013/"
//   constructor(private serv:ServService) { }

//   ngOnInit(): void {
//     this.Getproducts()
//   }
//   products:any

// Getproducts(){

//     this.serv.Getproducts().subscribe((data:any)=>{

//       this.products=data
//     })
//   }


  constructor(private service: ServService) { }

  ngOnInit(): void {
    this.Getproducts()
  }

  EmpDatas: any = []

  Getproducts() {

    this.service.Getproducts().subscribe((data: any) => {
      this.EmpDatas = data.allProducts;
    })

  }
  Getproimage(){
    this.service.Getproducts().subscribe((data: any) => {
     alert(JSON.stringify(data))
      this.EmpDatas = data.allProducts;
  })
  
}}
