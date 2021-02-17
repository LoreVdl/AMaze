import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallNavigatieComponent } from './small-navigatie/small-navigatie.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    SmallNavigatieComponent,
    HamburgerMenuComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SmallNavigatieComponent,
    HamburgerMenuComponent,
    NavigationComponent
  ]
})
export class SharedModule { }
