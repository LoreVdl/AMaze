import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoudenDiefOneComponent} from './gouden-dief-one/gouden-dief-one.component';
import {GoudenDiefLoginGuard} from './gouden-dief-login.guard';
import {GoudenDiefTwoComponent} from './gouden-dief-two/gouden-dief-two.component';
import {CookieService} from 'ngx-cookie-service';
import {GoudenDiefThreeComponent} from './gouden-dief-three/gouden-dief-three.component';
import {GoudenDiefFourComponent} from "./gouden-dief-four/gouden-dief-four.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pageOne'
  },
  {
    path: 'pageOne',
    component: GoudenDiefOneComponent
  },
  {
    path: 'pageTwo',
    component: GoudenDiefTwoComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageTwo'}
  },
  {
    path: 'pageThree',
    component: GoudenDiefThreeComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageThree'}
  },
  {
    path: 'pageFour',
    component: GoudenDiefFourComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageFour'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    CookieService
  ],
  exports: [RouterModule]
})
export class GoudenDiefRoutingModule { }
