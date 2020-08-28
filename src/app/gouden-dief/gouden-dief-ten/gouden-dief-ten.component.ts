import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-ten',
  templateUrl: './gouden-dief-ten.component.html',
  styleUrls: ['./gouden-dief-ten.component.scss']
})
export class GoudenDiefTenComponent {

  constructor(private router: Router) {}

  naviagte(): void {
    this.router.navigate(['degoudendief/pageEleven']);
  }

}
