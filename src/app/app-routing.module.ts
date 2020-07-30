import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LegendeZandhovenComponent} from './legende-zandhoven/legende-zandhoven.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: 'degoudendief',
    loadChildren: () => import('./gouden-dief/gouden-dief.module').then(m => m.GoudenDiefModule)
  },
  { path: 'delegendevanzandhoven', component: LegendeZandhovenComponent },
  { path: 'home', component: HomeComponent },
  { path: '',  redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
