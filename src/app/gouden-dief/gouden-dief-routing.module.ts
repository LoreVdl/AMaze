import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoudenDiefOneComponent} from './gouden-dief-one/gouden-dief-one.component';
import {GoudenDiefLoginGuard} from './gouden-dief-login.guard';


const routes: Routes = [
  {
    path: '',
    component: GoudenDiefOneComponent,
    canActivateChild: [GoudenDiefLoginGuard],
    children: [
      {
        path: '', redirectTo: '/degoudendief'
      },
      {
        path: 'pageOne',
        component: GoudenDiefOneComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoudenDiefRoutingModule { }
