import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-eighth',
  templateUrl: './gouden-dief-eighth.component.html',
  styleUrls: ['./gouden-dief-eighth.component.scss']
})
export class GoudenDiefEighthComponent {

  constructor(private router: Router) {}

  naviagte(): void {
    this.router.navigate(['degoudendief/pageNine']);
  }
}
