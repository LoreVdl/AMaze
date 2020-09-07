import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-twenty',
  templateUrl: './gouden-dief-twenty.component.html',
  styleUrls: ['./gouden-dief-twenty.component.scss']
})
export class GoudenDiefTwentyComponent {

  constructor(private router: Router) {}

  naviagte(): void {
    this.router.navigate(['degoudendief/pageTwentyOne']);
  }

}
