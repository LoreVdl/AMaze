import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallNavigatieComponent } from './small-navigatie/small-navigatie.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';



@NgModule({
  declarations: [SmallNavigatieComponent, HamburgerMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SmallNavigatieComponent,
    HamburgerMenuComponent
  ]
})
export class SharedModule { }
