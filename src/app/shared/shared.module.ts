import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatieComponent } from './navigatie/navigatie.component';
import { SmallNavigatieComponent } from './small-navigatie/small-navigatie.component';



@NgModule({
  declarations: [NavigatieComponent, SmallNavigatieComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavigatieComponent,
    SmallNavigatieComponent
  ]
})
export class SharedModule { }
