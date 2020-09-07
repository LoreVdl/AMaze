import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-sixteen',
  templateUrl: './gouden-dief-sixteen.component.html',
  styleUrls: ['./gouden-dief-sixteen.component.scss']
})
export class GoudenDiefSixteenComponent {

  constructor(private router: Router) {}

  naviagte(): void {
    this.router.navigate(['degoudendief/pageSeventeen']);
  }
}
