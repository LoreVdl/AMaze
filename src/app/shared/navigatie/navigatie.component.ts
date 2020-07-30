import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigatie',
  templateUrl: './navigatie.component.html',
  styleUrls: ['./navigatie.component.scss']
})
export class NavigatieComponent implements OnInit {
  @Output() scrollEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
