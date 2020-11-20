import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GoudenDiefService} from '../gouden-dief.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-three',
  templateUrl: './gouden-dief-three.component.html',
  styleUrls: ['./gouden-dief-three.component.scss']
})
export class GoudenDiefThreeComponent implements OnInit {

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
    this.goudenDiefService.setInputCode('codePageThree', this.code.value.toLowerCase());
    if (this.goudenDiefService.codePageThree.includes(this.goudenDiefService.getInputCode('codePageThree').toLowerCase())) {
      this.goudenDiefService.playSuccessAudio();
      this.router.navigate(['degoudendief/pageFour']);
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
