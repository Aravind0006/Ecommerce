import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ServService } from '../serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  public totalItem: number = 0;
  public searchTerm !: string;
  Users: any;
  Username: any='';
  constructor(private cartService: CartService, private service: ServService,private router:Router) { }

  ngOnInit(): void {
    this.Username = sessionStorage.getItem("Name")
    //alert(this.Username)
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
    this.Userdatails()
  }
  Userdatails() {
    this.service.GetUserdatas().subscribe((data: any) => {
      this.Users = data.getSignUp;
       // this.Users = data.getSignUp.filter((x:any)=>x.userId == 39);
      if (data.success == true) {
        
        sessionStorage.getItem(data.userId);
        // alert(JSON.stringify(data))
      }
    })
  } 
  LogOut(){
    alert('jdf')
    sessionStorage.setItem("Name",'')
    sessionStorage.setItem("UserId",'')
    this.router.navigate(['/demo'])
  }
}
