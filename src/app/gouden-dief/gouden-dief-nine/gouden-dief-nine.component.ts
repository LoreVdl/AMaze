import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GoudenDiefService} from '../gouden-dief.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-nine',
  templateUrl: './gouden-dief-nine.component.html',
  styleUrls: ['./gouden-dief-nine.component.scss']
})
export class GoudenDiefNineComponent implements OnInit {

  loginForm: FormGroup;
  code: FormControl = new FormControl('');
  showErrorScreen = false;

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
    this.goudenDiefService.setInputCode('codePageNine', this.code.value.toLowerCase());

    if (this.goudenDiefService.getInputCode('codePageNine') === this.goudenDiefService.codePageNine.toLowerCase()) {
      this.goudenDiefService.playSuccessAudio();
      this.router.navigate(['degoudendief/pageTen']);
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
