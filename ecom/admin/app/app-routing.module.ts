import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { BannerComponent } from './banner/banner.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { BanneroneComponent } from './bannerone/bannerone.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'products',component:ProductsComponent},
  {path:'orders',component:OrdersComponent},
  {path:'ban',component:BannerComponent},
  {path:'banone',component:BanneroneComponent},
  {path:'productdetail',component:ProductlistComponent},
  {path:"User",component:UsersComponent},
  {path:"navbar",component:NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
