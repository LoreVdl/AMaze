import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-two',
  templateUrl: './gouden-dief-two.component.html',
  styleUrls: ['./gouden-dief-two.component.scss']
})
export class GoudenDiefTwoComponent {

  constructor(private router: Router) {}

  naviagte(): void {
    this.router.navigate(['degoudendief/schilderij-zonder-naam']);
  }
}
