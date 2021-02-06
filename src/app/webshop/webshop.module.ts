import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CartService } from './products/services/cart.service';
import {WebshopRoutingModule} from './webshop-routing.module';
import { CartComponent } from './products/cart/cart.component';
import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    ProductsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    WebshopRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    CartService
  ]
})
export class WebshopModule { }
