import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GoudenDiefService {

  constructor(private cookieService: CookieService) { }

  readonly codePageOne = 'Sch8tt2nJ8g2rs';

  readonly codePageThree = [
    'sir winston churchill',
    'winston churchill',
    'churchill'
  ];

  $inputCode: string;

  setInputCode(code: string, input: string) {
    this.cookieService.set(code, input, 7);
    this.$inputCode = input;
  }

  getInputCode(code: string): string {
    if (this.cookieService.get(code)) {
      return this.cookieService.get(code);
    } else {
      return this.$inputCode;
    }
  }
}
