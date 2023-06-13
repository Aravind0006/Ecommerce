import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'orders',component:OrdersComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'prod',component:ProductdetailsComponent},
  {path:'demo',component:DemoComponent},
  {path:'login',component:LoginComponent},
  {path:'checkout',component:CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
