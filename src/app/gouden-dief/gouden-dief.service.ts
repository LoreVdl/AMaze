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

  readonly codePageFifteen = 'STRAL';

  readonly codePageSeventeen = 'true';

  readonly codePageNineteen = ['2', '4', '3', '7', '5', '8', '6', '1'];

  $inputCode: string;

  endAudio = new Audio();
  errorAudio = new Audio();
  successAudio = new Audio();
  snakeAudio = new Audio();
  waterfallsAudio = new Audio();
  buttonAudio = new Audio();

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

  loadErrorAudio() {
    this.errorAudio.src = '../../assets/sounds/sound_wrong.wav';
    this.errorAudio.load();
  }

  playErrorAudio() {
    this.errorAudio.play();
  }

  loadEndAudio() {
    this.endAudio.src = '../../assets/sounds/muziek_ontsnapt.wav';
  }

  playEndAudio() {
    this.endAudio.play();
  }

  stopEndAudio() {
    this.endAudio.pause();
  }

  loadSuccessAudio() {
    this.successAudio.src = '../../assets/sounds/sound_correct.wav';
    this.successAudio.load();
  }

  playSuccessAudio() {
    this.successAudio.play();
  }

  loadSnakeAudio() {
    this.snakeAudio.src = '../../assets/sounds/sound_alphabet_snake.wav';
    this.snakeAudio.load();
  }

  playSnakeAudio() {
    this.snakeAudio.play();
  }

  loadWaterfallsAudio() {
    this.waterfallsAudio.src = '../../assets/sounds/sound_water_falls.wav';
    this.waterfallsAudio.load();
  }

  playWaterfallsAudio() {
    this.waterfallsAudio.play();
  }

  loadButtonAudio() {
    this.buttonAudio.src = '../../assets/sounds/sound_the_end.wav';
    this.buttonAudio.load();
  }

  playButtonAudio() {
    this.buttonAudio.play();
  }
}
