import { Component, OnInit } from '@angular/core';
import {GoudenDiefService} from '../gouden-dief.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-seven',
  templateUrl: './gouden-dief-seven.component.html',
  styleUrls: ['./gouden-dief-seven.component.scss']
})
export class GoudenDiefSevenComponent {

  showErrorScreen = false;

  inputCode = [];

  constructor(private goudenDiefService: GoudenDiefService,
              private router: Router) { }

  clickButton(code: string) {
    this.inputCode.push(code);
    if (this.inputCode.length === 10) {
      this.goudenDiefService.setInputCode('codePageSeven', this.inputCode.join(''));
      if (this.goudenDiefService.codePageSevenOne.join('') === this.goudenDiefService.getInputCode('codePageSeven') ||
        this.goudenDiefService.codePageSevenTwo.join('') === this.goudenDiefService.getInputCode('codePageSeven')) {
        this.router.navigate(['degoudendief/pageSix']);
      } else {
        this.showErrorScreen = true;
        this.inputCode = [];

        setTimeout(() => {
          this.showErrorScreen = false;
        }, 800);
      }
    }
  }
}
