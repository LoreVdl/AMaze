import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallNavigatieComponent } from './small-navigatie/small-navigatie.component';



@NgModule({
  declarations: [SmallNavigatieComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SmallNavigatieComponent
  ]
})
export class SharedModule { }
