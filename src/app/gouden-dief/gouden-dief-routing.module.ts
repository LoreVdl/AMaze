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
import {GoudenDiefNineteenComponent} from './gouden-dief-nineteen/gouden-dief-nineteen.component';
import {GoudenDiefTwentyComponent} from './gouden-dief-twenty/gouden-dief-twenty.component';
import {GoudenDiefTwentyOneComponent} from './gouden-dief-twenty-one/gouden-dief-twenty-one.component';
import {TipsComponent} from './tips/tips.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'qr-code'
  },
  {
    path: 'tips',
    component: TipsComponent
  },
  {
    path: 'qr-code',
    component: GoudenDiefOneComponent
  },
  {
    path: 'qr-code-antwoord',
    component: GoudenDiefTwoComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageTwo'}
  },
  {
    path: 'schilderij-zonder-naam',
    component: GoudenDiefThreeComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageThree'}
  },
  {
    path: 'schilderij-zonder-naam-antwoord',
    component: GoudenDiefFourComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageFour'}
  },
  {
    path: 'alfabetslang',
    component: GoudenDiefFiveComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageFive'}
  },
  {
    path: 'alfabetslang-antwoord',
    component: GoudenDiefSixComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageSix'}
  },
  {
    path: 'kringloop-van-het-water',
    component: GoudenDiefSevenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageSeven'}
  },
  {
    path: 'kringloop-van-het-water-antwoord',
    component: GoudenDiefEighthComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageEighth'}
  },
  {
    path: 'vogels-en-vlaggen',
    component: GoudenDiefNineComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageNine'}
  },
  {
    path: 'vogels-en-vlaggen-antwoord',
    component: GoudenDiefTenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageTen'}
  },
  {
    path: 'vier-maal-het-juiste-pad',
    component: GoudenDiefElevenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageEleven'}
  },
  {
    path: 'vier-maal-het-juiste-pad-antwoord',
    component: GoudenDiefTwelveComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageTwelve'}
  },
  {
    path: 'juiste-balans',
    component: GoudenDiefThirteenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageThirteen'}
  },
  {
    path: 'juiste-balans-antwoord',
    component: GoudenDiefFourteenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageFourteen'}
  },
  {
    path: 'sterrenbeelden',
    component: GoudenDiefFifteenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageFifteen'}
  },
  {
    path: 'sterrenbeelden-antwoord',
    component: GoudenDiefSixteenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageSixteen'}
  },
  {
    path: 'zeven-verschillen',
    component: GoudenDiefSeventeenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageSeventeen'}
  },
  {
    path: 'zeven-verschillen-antwoord',
    component: GoudenDiefEighteenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageEighteen'}
  },
  {
    path: 'uitweg',
    component: GoudenDiefNineteenComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageNineteen'}
  },
  {
    path: 'einde',
    component: GoudenDiefTwentyComponent,
    canActivate: [GoudenDiefLoginGuard],
    data: {page: 'pageTwenty'}
  },
  {
    path: 'contact',
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
