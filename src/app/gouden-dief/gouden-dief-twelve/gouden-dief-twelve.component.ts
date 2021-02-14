import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-twelve',
  templateUrl: './gouden-dief-twelve.component.html',
  styleUrls: ['./gouden-dief-twelve.component.scss']
})
export class GoudenDiefTwelveComponent {

  constructor(private router: Router) {}

  naviagte(): void {
    this.router.navigate(['degoudendief/juiste-balans']);
  }

}
