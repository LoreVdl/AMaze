import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoudenDiefOneComponent} from './gouden-dief-one/gouden-dief-one.component';
import {GoudenDiefLoginGuard} from './gouden-dief-login.guard';
import {GoudenDiefTwoComponent} from './gouden-dief-two/gouden-dief-two.component';
import {CookieService} from 'ngx-cookie-service';


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
    canActivate: [GoudenDiefLoginGuard]
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
