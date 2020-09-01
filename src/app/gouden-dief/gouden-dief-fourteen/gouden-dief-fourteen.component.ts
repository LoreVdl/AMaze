import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-fourteen',
  templateUrl: './gouden-dief-fourteen.component.html',
  styleUrls: ['./gouden-dief-fourteen.component.scss']
})
export class GoudenDiefFourteenComponent {

  constructor(private router: Router) {}

  naviagte(): void {
    this.router.navigate(['degoudendief/pageFifteen']);
  }

}
