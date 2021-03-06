import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GoudenDiefService} from '../gouden-dief.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-one',
  templateUrl: './gouden-dief-one.component.html',
  styleUrls: ['./gouden-dief-one.component.scss']
})
export class GoudenDiefOneComponent implements OnInit {

  loginForm: FormGroup;
  code: FormControl = new FormControl('');
  showErrorScreen = false;
  showPopUp = true;

  constructor(private goudenDiefService: GoudenDiefService,
              private router: Router) { }

  ngOnInit() {
    this.goudenDiefService.loadSuccessAudio();
    this.goudenDiefService.loadErrorAudio();
    this.loginForm = new FormGroup({
      code: this.code
    });
  }

  submit(): void {
    this.goudenDiefService.setInputCode('codePageOne', this.code.value);

    if (this.goudenDiefService.getInputCode('codePageOne') === this.goudenDiefService.codePageOne) {
      this.goudenDiefService.playSuccessAudio();
      this.router.navigate(['degoudendief/qr-code-antwoord']);
    } else {
      this.showErrorScreen = true;
      this.goudenDiefService.playErrorAudio();
      this.code.setValue('');

      setTimeout(() => {
        this.showErrorScreen = false;
      }, 1500);
    }
  }

}
