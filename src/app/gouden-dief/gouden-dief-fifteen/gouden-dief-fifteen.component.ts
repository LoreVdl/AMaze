import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GoudenDiefService} from '../gouden-dief.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-fifteen',
  templateUrl: './gouden-dief-fifteen.component.html',
  styleUrls: ['./gouden-dief-fifteen.component.scss']
})
export class GoudenDiefFifteenComponent implements OnInit {
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
    this.goudenDiefService.setInputCode('codePageFifteen', this.code.value.toLowerCase());

    if (this.goudenDiefService.getInputCode('codePageFifteen') === this.goudenDiefService.codePageFifteen.toLowerCase()) {
      this.router.navigate(['degoudendief/pageSixteen']);
    } else {
      this.showErrorScreen = true;
      this.code.setValue('');

      setTimeout(() => {
        this.showErrorScreen = false;
      }, 800);
    }
  }
}
