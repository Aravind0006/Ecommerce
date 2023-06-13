import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { BannerComponent } from './banner/banner.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { BanneroneComponent } from './bannerone/bannerone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductlistComponent } from './productlist/productlist.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    BannerComponent,
    OrdersComponent,
    BanneroneComponent,
    ProductlistComponent,
    UsersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
