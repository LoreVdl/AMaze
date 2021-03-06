import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GoudenDiefService} from '../gouden-dief.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-thirteen',
  templateUrl: './gouden-dief-thirteen.component.html',
  styleUrls: ['./gouden-dief-thirteen.component.scss']
})
export class GoudenDiefThirteenComponent implements OnInit {

  loginForm: FormGroup;
  code1: FormControl = new FormControl('');
  code2: FormControl = new FormControl('');
  code3: FormControl = new FormControl('');
  code4: FormControl = new FormControl('');
  showErrorScreen = false;

  constructor(private goudenDiefService: GoudenDiefService,
              private router: Router) { }

  ngOnInit() {
    this.goudenDiefService.loadSuccessAudio();
    this.goudenDiefService.loadErrorAudio();
    this.loginForm = new FormGroup({
      code1: this.code1,
      code2: this.code2,
      code3: this.code3,
      code4: this.code4
    });
  }

  submit(): void {
    const code = +(this.code1.value * 3) + +(this.code2.value * 6) + +(this.code3.value * 4) + +(this.code4.value * 2);
    this.goudenDiefService.setInputCode('codePageThirteen', code.toString());

    if (this.goudenDiefService.getInputCode('codePageThirteen') === this.goudenDiefService.codePageThirteen) {
      this.goudenDiefService.playSuccessAudio();
      this.router.navigate(['degoudendief/juiste-balans-antwoord']);
    } else {
      this.showErrorScreen = true;
      this.goudenDiefService.playErrorAudio();
      this.code1.setValue('');
      this.code2.setValue('');
      this.code3.setValue('');
      this.code4.setValue('');

      setTimeout(() => {
        this.showErrorScreen = false;
      }, 1500);
    }
  }
}
