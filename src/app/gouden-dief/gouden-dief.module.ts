import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoudenDiefOneComponent } from './gouden-dief-one/gouden-dief-one.component';
import {GoudenDiefRoutingModule} from './gouden-dief-routing.module';



@NgModule({
  declarations: [
    GoudenDiefOneComponent
  ],
  imports: [
    CommonModule,
    GoudenDiefRoutingModule
  ]
})
export class GoudenDiefModule { }
