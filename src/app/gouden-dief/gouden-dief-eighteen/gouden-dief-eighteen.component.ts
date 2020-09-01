import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-eighteen',
  templateUrl: './gouden-dief-eighteen.component.html',
  styleUrls: ['./gouden-dief-eighteen.component.scss']
})
export class GoudenDiefEighteenComponent {

  constructor(private router: Router) {}

  naviagte(): void {
    this.router.navigate(['degoudendief/pageNineteen']);
  }
}
