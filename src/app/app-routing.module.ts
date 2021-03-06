import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LegendeZandhovenComponent} from './legende-zandhoven/legende-zandhoven.component';
import {HomeComponent} from './home/home.component';
import {CookieService} from 'ngx-cookie-service';


const routes: Routes = [
  {
    path: 'degoudendief',
    loadChildren: () => import('./gouden-dief/gouden-dief.module').then(m => m.GoudenDiefModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  { path: 'delegendevanzandhoven', component: LegendeZandhovenComponent },
  { path: 'home', component: HomeComponent },
  { path: '',  redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    CookieService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
