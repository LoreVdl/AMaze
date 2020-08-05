import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gouden-dief-one',
  templateUrl: './gouden-dief-one.component.html',
  styleUrls: ['./gouden-dief-one.component.scss']
})
export class GoudenDiefOneComponent implements OnInit {

  readonly loginCode = '1234';

  inputCode = '1234';

  constructor() { }

  ngOnInit() {
  }

}
