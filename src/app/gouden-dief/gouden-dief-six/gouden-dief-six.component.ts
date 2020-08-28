import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-six',
  templateUrl: './gouden-dief-six.component.html',
  styleUrls: ['./gouden-dief-six.component.scss']
})
export class GoudenDiefSixComponent {

  constructor(private router: Router) {}

  naviagte(): void {
    this.router.navigate(['degoudendief/pageSeven']);
  }

}
