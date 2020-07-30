import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-small-navigatie',
  templateUrl: './small-navigatie.component.html',
  styleUrls: ['./small-navigatie.component.scss']
})
export class SmallNavigatieComponent implements OnInit {
  @Output() scrollEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
