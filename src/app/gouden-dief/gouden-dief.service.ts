import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GoudenDiefService {

  constructor(private cookieService: CookieService) { }

  readonly code = '1234';
  $inputCode: string;

  set inputCode(input: string) {
    this.cookieService.set('code', this.code, 7);
    this.$inputCode = input;
  }

  get inputCode(): string {
    if (this.cookieService.get('code')) {
      return this.cookieService.get('code');
    } else {
      return this.$inputCode;
    }
  }
}
