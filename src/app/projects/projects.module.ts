import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmFunComponent } from './farm-fun/farm-fun.component';
import { NxtEscapeComponent } from './nxt-escape/nxt-escape.component';
import { GoudenDiefComponent } from './gouden-dief/gouden-dief.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'farmFun'
  },
  {
    path: 'farmFun',
    component: FarmFunComponent
  },
  {
    path: 'goudenDief',
    component: GoudenDiefComponent
  },
  {
    path: 'nxtEscape',
    component: NxtEscapeComponent,
  }
];
@NgModule({
  declarations: [FarmFunComponent, NxtEscapeComponent, GoudenDiefComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule {
}
