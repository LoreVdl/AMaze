import { Injectable } from '@angular/core';
import {CanActivate, CanActivateChild, Router} from '@angular/router';
import {GoudenDiefService} from './gouden-dief.service';

@Injectable({
  providedIn: 'root'
})
export class GoudenDiefLoginGuard implements CanActivate {

  constructor(private service: GoudenDiefService,
              private router: Router) {}

  canActivate(): boolean {
    if (this.service.inputCode === this.service.code) {
      return true;
    } else {
      this.router.navigate(['/degoudendief']);
      return false;
    }
  }
}
