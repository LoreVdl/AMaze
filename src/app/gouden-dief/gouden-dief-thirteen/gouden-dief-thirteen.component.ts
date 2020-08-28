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
    this.loginForm = new FormGroup({
      code1: this.code1,
      code2: this.code2,
      code3: this.code3,
      code4: this.code4
    });
  }

  submit(): void {
    const code = this.code1.value + this.code2.value + this.code3.value + this.code4.value;
    this.goudenDiefService.setInputCode('codePageEleven', code);

    if (this.goudenDiefService.getInputCode('codePageEleven') === this.goudenDiefService.codePageEleven) {
      this.router.navigate(['degoudendief/pageTwelve']);
    } else {
      this.showErrorScreen = true;
      this.code1.setValue('');
      this.code2.setValue('');
      this.code3.setValue('');
      this.code4.setValue('');

      setTimeout(() => {
        this.showErrorScreen = false;
      }, 800);
    }
  }
}
