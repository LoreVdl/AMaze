import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {GoudenDiefService} from './gouden-dief.service';

@Injectable({
  providedIn: 'root'
})
export class GoudenDiefLoginGuard implements CanActivate {

  constructor(private service: GoudenDiefService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const one = this.service.getInputCode('codePageOne') === this.service.codePageOne;
    const two = this.service.codePageThree.includes(this.service.getInputCode('codePageThree'));
    const three = this.service.getInputCode('codePageFive') === this.service.codePageFive.sort().join('');
    const four = this.service.getInputCode('codePageSeven') === this.service.codePageSevenOne.join('') ||
      this.service.getInputCode('codePageSeven') === this.service.codePageSevenTwo.join('');
    const five = this.service.getInputCode('codePageNine') === this.service.codePageNine.toLowerCase();
    const six = this.service.getInputCode('codePageEleven') === this.service.codePageEleven.toLowerCase();
    const seven = this.service.getInputCode('codePageThirteen') === this.service.codePageThirteen.toLowerCase();
    const eighth = this.service.getInputCode('codePageFifteen') === this.service.codePageFifteen.toLowerCase();
    const nine = this.service.getInputCode('codePageSeventeen') === this.service.codePageSeventeen;
    const ten = this.service.getInputCode('codePageNineteen') === this.service.codePageNineteen.join('');

    switch (route.data.page) {
      case 'pageTwo':
      case 'pageThree':
        if (one) {
          return true;
        } else {
          this.router.navigate(['/degoudendief']);
          return false;
        }
      case 'pageFour':
      case 'pageFive':
        if (one && two) {
          return true;
        } else {
          this.router.navigate(['/degoudendief/schilderij-zonder-naam']);
          return false;
        }
      case 'pageSix':
      case 'pageSeven':
        if (one && two && three) {
          return true;
        } else {
          this.router.navigate(['/degoudendief/alfabetslang']);
          return false;
        }
      case 'pageEighth':
      case 'pageNine':
        if (one && two && three && four) {
          return true;
        } else {
          this.router.navigate(['/degoudendief/kringloop-van-het-water']);
          return false;
        }
      case 'pageTen':
      case 'pageEleven':
        if (one && two && three && four && five) {
          return true;
        } else {
          this.router.navigate(['/degoudendief/vogels-en-vlaggen']);
          return false;
        }
      case 'pageTwelve':
      case 'pageThirteen':
        if (one && two && three && four && five && six) {
          return true;
        } else {
          this.router.navigate(['/degoudendief/vier-maal-het-juiste-pad']);
          return false;
        }
      case 'pageFourteen':
      case 'pageFifteen':
        if (one && two && three && four && five && six && seven) {
          return true;
        } else {
          this.router.navigate(['/degoudendief/juiste-balans']);
          return false;
        }
      case 'pageSixteen':
      case 'pageSeventeen':
        if (one && two && three && four && five && six && seven && eighth) {
          return true;
        } else {
          this.router.navigate(['/degoudendief/sterrenbeelden']);
          return false;
        }
      case 'pageEighteen':
      case 'pageNineteen':
        if (one && two && three && four && five && six && seven && eighth && nine) {
          return true;
        } else {
          this.router.navigate(['/degoudendief/zeven-verschillen']);
          return false;
        }
      case 'pageTwenty':
      case 'pageTwentyOne':
        if (one && two && three && four && five && six && seven && eighth && nine && ten) {
          return true;
        } else {
          this.router.navigate(['/degoudendief/uitweg']);
          return false;
        }
      default:
        if (this.service.getInputCode('codePageOne') === this.service.codePageOne) {
          return true;
        } else {
          this.router.navigate(['/degoudendief']);
          return false;
        }
    }
  }
}
