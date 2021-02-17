import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import {WebshopRoutingModule} from './webshop-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {PaymentService} from './services/payment.service';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    WebshopRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PaymentService
  ]
})
export class WebshopModule { }
