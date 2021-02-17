import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {ProductsComponent} from './products/products.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    CookieService
  ],
  exports: [RouterModule]
})
export class WebshopRoutingModule { }
