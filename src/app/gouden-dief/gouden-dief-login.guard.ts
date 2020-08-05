import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {GoudenDiefOneComponent} from './gouden-dief-one/gouden-dief-one.component';
import {GoudenDiefService} from './gouden-dief.service';

@Injectable({
  providedIn: 'root'
})
export class GoudenDiefLoginGuard implements CanActivateChild {

  constructor(private service: GoudenDiefService) {}

  canActivateChild(): boolean {
    if (this.service.inputCode === this.service.code) {
      return true;
    } else {
      return false;
    }
  }
}
