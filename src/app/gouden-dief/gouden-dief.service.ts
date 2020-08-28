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

  readonly  codePageFive = ['X', 'Y', 'Z'];

  readonly codePageSevenOne = ['2', '3', '3', '1', '3', '2', '1', '3', '3', '3'];

  readonly codePageSevenTwo = ['2', '1', '3', '3', '3', '2', '3', '3', '1', '3'];

  readonly codePageNine = 'migratie';

  readonly codePageEleven = '4293';

  readonly codePageThirteen = '4216';

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
