import { Component, OnInit } from '@angular/core';
import {GoudenDiefService} from '../gouden-dief.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-seven',
  templateUrl: './gouden-dief-seven.component.html',
  styleUrls: ['./gouden-dief-seven.component.scss']
})
export class GoudenDiefSevenComponent implements OnInit {

  showErrorScreen = false;

  inputCode = [];

  constructor(private goudenDiefService: GoudenDiefService,
              private router: Router) { }

  ngOnInit(): void {
    this.goudenDiefService.loadSuccessAudio();
    this.goudenDiefService.loadErrorAudio();
    this.goudenDiefService.loadWaterfallsAudio();
  }

  clickButton(code: string) {
    this.goudenDiefService.loadWaterfallsAudio();
    this.goudenDiefService.playWaterfallsAudio();
    this.inputCode.push(code);
    if (this.inputCode.length === 10) {
      this.goudenDiefService.setInputCode('codePageSeven', this.inputCode.join(''));
      if (this.goudenDiefService.codePageSevenOne.join('') === this.goudenDiefService.getInputCode('codePageSeven') ||
        this.goudenDiefService.codePageSevenTwo.join('') === this.goudenDiefService.getInputCode('codePageSeven')) {
        setTimeout(() => {
          this.goudenDiefService.playSuccessAudio();
          this.router.navigate(['degoudendief/pageEighth']);
        }, 800);
      } else {
        this.showErrorScreen = true;
        this.goudenDiefService.playErrorAudio();
        this.inputCode = [];

        setTimeout(() => {
          this.showErrorScreen = false;
        }, 1500);
      }
    }
  }
}
