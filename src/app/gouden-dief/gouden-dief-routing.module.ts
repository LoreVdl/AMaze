import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoudenDiefOneComponent} from './gouden-dief-one/gouden-dief-one.component';


const routes: Routes = [
  {
    path: '',
    component: GoudenDiefOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoudenDiefRoutingModule { }
