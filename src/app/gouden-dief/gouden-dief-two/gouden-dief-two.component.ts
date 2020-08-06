import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GoudenDiefService} from '../gouden-dief.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-two',
  templateUrl: './gouden-dief-two.component.html',
  styleUrls: ['./gouden-dief-two.component.scss']
})
export class GoudenDiefTwoComponent implements OnInit {
  loginForm: FormGroup;
  code: FormControl = new FormControl('');
  showErrorScreen = false;

  constructor(private goudenDiefService: GoudenDiefService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      code: this.code
    });
  }

  submit(): void {
    this.goudenDiefService.inputCode = this.code.value;

    if (this.goudenDiefService.inputCode ===  this.goudenDiefService.code) {
      this.router.navigate(['degoudendief/pageTwo']);
    } else {
      this.showErrorScreen = true;
    }
  }
}
