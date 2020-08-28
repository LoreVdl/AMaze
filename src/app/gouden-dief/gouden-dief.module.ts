import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoudenDiefOneComponent } from './gouden-dief-one/gouden-dief-one.component';
import {GoudenDiefRoutingModule} from './gouden-dief-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GoudenDiefTwoComponent } from './gouden-dief-two/gouden-dief-two.component';
import { GoudenDiefThreeComponent } from './gouden-dief-three/gouden-dief-three.component';
import { GoudenDiefFourComponent } from './gouden-dief-four/gouden-dief-four.component';
import { GoudenDiefFiveComponent } from './gouden-dief-five/gouden-dief-five.component';
import { GoudenDiefSixComponent } from './gouden-dief-six/gouden-dief-six.component';
import { GoudenDiefSevenComponent } from './gouden-dief-seven/gouden-dief-seven.component';



@NgModule({
  declarations: [
    GoudenDiefOneComponent,
    GoudenDiefTwoComponent,
    GoudenDiefThreeComponent,
    GoudenDiefFourComponent,
    GoudenDiefFiveComponent,
    GoudenDiefSixComponent,
    GoudenDiefSevenComponent
  ],
    imports: [
        CommonModule,
        GoudenDiefRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class GoudenDiefModule { }
