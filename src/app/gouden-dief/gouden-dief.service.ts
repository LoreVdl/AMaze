import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GoudenDiefService {

  constructor(private cookieService: CookieService) { }

  readonly codePageOne = 'Sch8tt2nJ8g2r';

  readonly codePageThree = [
    'sir winston churchill',
    'winston churchill',
    'churchill',
    'sir churchill'
  ];

  readonly  codePageFive = ['U', 'E', 'G', 'S', 'M', 'T'];

  readonly codePageSevenOne = ['2', '3', '3', '1', '3', '2', '1', '3', '3', '3'];

  readonly codePageSevenTwo = ['2', '1', '3', '3', '3', '2', '3', '3', '1', '3'];

  readonly codePageNine = 'migratie';

  readonly codePageEleven = '2394';

  readonly codePageThirteen = '52';

  readonly codePageFifteen = 'VTGMP';

  readonly codePageSeventeen = 'true';

  readonly codePageNineteen = ['2', '4', '3', '7', '5', '8', '6', '1'];

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

  playAudio() {
    const audio = new Audio();
    audio.src = '../../assets/sounds/sound_wrong.wav';
    audio.load();
    audio.play();
  }
}
