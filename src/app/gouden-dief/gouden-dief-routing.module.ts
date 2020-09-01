import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoudenDiefOneComponent} from './gouden-dief-one/gouden-dief-one.component';
import {GoudenDiefLoginGuard} from './gouden-dief-login.guard';
import {GoudenDiefTwoComponent} from './gouden-dief-two/gouden-dief-two.component';
import {CookieService} from 'ngx-cookie-service';
import {GoudenDiefThreeComponent} from './gouden-dief-three/gouden-dief-three.component';
import {GoudenDiefFourComponent} from './gouden-dief-four/gouden-dief-four.component';
import {GoudenDiefFiveComponent} from './gouden-dief-five/gouden-dief-five.component';
import {GoudenDiefSixComponent} from './gouden-dief-six/gouden-dief-six.component';
import {GoudenDiefSevenComponent} from './gouden-dief-seven/gouden-dief-seven.component';
import {GoudenDiefEighthComponent} from './gouden-dief-eighth/gouden-dief-eighth.component';
import {GoudenDiefNineComponent} from './gouden-dief-nine/gouden-dief-nine.component';
import {GoudenDiefTenComponent} from './gouden-dief-ten/gouden-dief-ten.component';
import {GoudenDiefElevenComponent} from './gouden-dief-eleven/gouden-dief-eleven.component';
import {GoudenDiefTwelveComponent} from './gouden-dief-twelve/gouden-dief-twelve.component';
import {GoudenDiefThirteenComponent} from './gouden-dief-thirteen/gouden-dief-thirteen.component';
import {GoudenDiefFourteenComponent} from './gouden-dief-fourteen/gouden-dief-fourteen.component';
import {GoudenDiefFifteenComponent} from './gouden-dief-fifteen/gouden-dief-fifteen.component';
import {GoudenDiefSixteenComponent} from './gouden-dief-sixteen/gouden-dief-sixteen.component';
import {GoudenDiefSeventeenComponent} from './gouden-dief-seventeen/gouden-dief-seventeen.component';
import {GoudenDiefEighteenComponent} from './gouden-dief-eighteen/gouden-dief-eighteen.component';
import {GoudenDiefNineteenComponent} from "./gouden-dief-nineteen/gouden-dief-nineteen.component";
import {GoudenDiefTwentyComponent} from "./gouden-dief-twenty/gouden-dief-twenty.component";
import {GoudenDiefTwentyOneComponent} from "./gouden-dief-twenty-one/gouden-dief-twenty-one.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pageOne'
  },
  {
    path: 'pageOne',
    component: GoudenDiefOneComponent
  },
  {
    path: 'pageTwo',
    component: GoudenDiefTwoComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageTwo'}
  },
  {
    path: 'pageThree',
    component: GoudenDiefThreeComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageThree'}
  },
  {
    path: 'pageFour',
    component: GoudenDiefFourComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageFour'}
  },
  {
    path: 'pageFive',
    component: GoudenDiefFiveComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageFive'}
  },
  {
    path: 'pageSix',
    component: GoudenDiefSixComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageSix'}
  },
  {
    path: 'pageSeven',
    component: GoudenDiefSevenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageSeven'}
  },
  {
    path: 'pageEighth',
    component: GoudenDiefEighthComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageEighth'}
  },
  {
    path: 'pageNine',
    component: GoudenDiefNineComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageNine'}
  },
  {
    path: 'pageTen',
    component: GoudenDiefTenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageTen'}
  },
  {
    path: 'pageEleven',
    component: GoudenDiefElevenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageEleven'}
  },
  {
    path: 'pageTwelve',
    component: GoudenDiefTwelveComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageTwelve'}
  },
  {
    path: 'pageThirteen',
    component: GoudenDiefThirteenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageThirteen'}
  },
  {
    path: 'pageFourteen',
    component: GoudenDiefFourteenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageFourteen'}
  },
  {
    path: 'pageFifteen',
    component: GoudenDiefFifteenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageFifteen'}
  },
  {
    path: 'pageSixteen',
    component: GoudenDiefSixteenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageSixteen'}
  },
  {
    path: 'pageSeventeen',
    component: GoudenDiefSeventeenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageSeventeen'}
  },
  {
    path: 'pageEighteen',
    component: GoudenDiefEighteenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageEighteen'}
  },
  {
    path: 'pageNineteen',
    component: GoudenDiefNineteenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageNineteen'}
  },
  {
    path: 'pageTwenty',
    component: GoudenDiefTwentyComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageTwenty'}
  },
  {
    path: 'pageTwentyOne',
    component: GoudenDiefTwentyOneComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageTwentyOne'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    CookieService
  ],
  exports: [RouterModule]
})
export class GoudenDiefRoutingModule { }
