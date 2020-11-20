import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GoudenDiefService} from '../gouden-dief.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-eleven',
  templateUrl: './gouden-dief-eleven.component.html',
  styleUrls: ['./gouden-dief-eleven.component.scss']
})
export class GoudenDiefElevenComponent implements OnInit {

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
    this.goudenDiefService.setInputCode('codePageEleven', this.code.value.toLowerCase());

    if (this.goudenDiefService.getInputCode('codePageEleven') === this.goudenDiefService.codePageEleven) {
      this.goudenDiefService.playSuccessAudio();
      this.router.navigate(['degoudendief/pageTwelve']);
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
