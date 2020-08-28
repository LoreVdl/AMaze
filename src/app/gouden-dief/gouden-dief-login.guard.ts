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
    switch (route.data.page) {
      case 'pageTwo':
      case 'pageThree':
        if (this.service.getInputCode('codePageOne') === this.service.codePageOne) {
          return true;
        } else {
          this.router.navigate(['/degoudendief']);
          return false;
        }
      case 'pageFour':
      case 'pageFive':
        if (this.service.getInputCode('codePageOne') === this.service.codePageOne &&
          (this.service.codePageThree.includes(this.service.getInputCode('codePageThree').toLowerCase()))) {
          return true;
        } else {
          this.router.navigate(['/degoudendief/pageThree']);
          return false;
        }
      case 'pageSix':
      case 'pageSeven':
        if (this.service.getInputCode('codePageOne') === this.service.codePageOne &&
          (this.service.codePageThree.includes(this.service.getInputCode('codePageThree').toLowerCase())) &&
          (this.service.getInputCode('codePageFive') === this.service.codePageFive.sort().join(''))) {
          return true;
        } else {
          this.router.navigate(['/degoudendief/pageFive']);
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
