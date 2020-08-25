import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-four',
  templateUrl: './gouden-dief-four.component.html',
  styleUrls: ['./gouden-dief-four.component.scss']
})
export class GoudenDiefFourComponent {

  constructor(private router: Router) {}

  naviagte(): void {
    this.router.navigate(['degoudendief/pageThree']);
  }
}
